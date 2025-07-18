import { SteamTranscriptItem } from "@/lib/types";
import { inngest } from "./client";
import JSONL from "jsonl-parse-stringify";
import { prisma } from "@/lib/prisma";
import { createAgent, openai, TextMessage } from "@inngest/agent-kit";

const summarizer = createAgent({
  name: "summarizer",
  system: `
  You are an expert summarizer. You write readable, concise, simple content. You are given a transcript of a meeting and you need to summarize it.

   Use the following markdown structure for every output:

  ### Overview
  Provide a detailed, engaging summary of the session's content. Focus on major features, user workflows, and any key takeaways. Write in a narrative style, using full sentences. Highlight unique or powerful aspects of the product, platform, or discussion.

  ### Notes
  Break down key content into thematic sections with timestamp ranges. Each section should summarize key points, actions, or demos in bullet format.

  Example:
  #### Section Name
  - Main point or demo shown here
  - Another key insight or interaction
  - Follow-up tool or explanation provided

  #### Next Section
  - Feature X automatically does Y
  - Mention of integration with Z`.trim(),
  model: openai({ model: "gpt-4o", apiKey: process.env.OPEN_AI_API_KEY }),
});

export const meetingsProcessing = inngest.createFunction(
  { id: "meetings/processing" },
  { event: "meetings/processing" },
  async ({ event, step }) => {
    // 1. Fetch and parse transcript
    const response = await step.run("fetch-transcript", async () => {
      return fetch(event.data.transcriptUrl).then((res) => res.text());
    });

    const transcript = await step.run("parse-transcript", async () => {
      return JSONL.parse<SteamTranscriptItem>(response);
    });

    // 2. Enrich with speaker information
    const transcriptWithSpeakers = await step.run("add-speakers", async () => {
      const speakerIds = [
        ...new Set(transcript.map((item) => item.speaker_id)),
      ];

      const [userSpeakers, agentSpeakers] = await Promise.all([
        prisma.user.findMany({
          where: { id: { in: speakerIds } },
        }),
        prisma.agent.findMany({
          where: { id: { in: speakerIds } },
        }),
      ]);

      return transcript.map((item) => {
        // Combine ALL speakers into one array
        const allSpeakers = [...userSpeakers, ...agentSpeakers];
        // Find the speaker (user OR agent)
        const speaker = allSpeakers.find((s) => s.id === item.speaker_id);

        if (!speaker) {
          return {
            ...item,
            user: {
              name: "Unknown Speaker", // Fallback for unknown speakers
            },
          };
        }

        return {
          ...item,
          user: {
            name: speaker.name, // Attach the speaker's name
          },
        };
      });
    });

    const { output } = await summarizer.run(
      "Summarize the following meeting transcript: " +
        JSON.stringify(transcriptWithSpeakers)
    );

    await step.run("save-summary", async () => {
      await prisma.meeting.update({
        where: { id: event.data.meetingId },
        data: {
          summary: (output[0] as TextMessage).content as string,
          status: "completed",
        },
      });
    });
  }
);
