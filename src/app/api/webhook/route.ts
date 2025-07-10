import { inngest } from "@/inngest/client";
import { GeneratedAvatarUri } from "@/lib/avatar";
import { prisma } from "@/lib/prisma";
import { streamChat } from "@/lib/stream-chat";
import { streamVideo } from "@/lib/stream-video";
import {
  CallEndedEvent,
  CallRecordingReadyEvent,
  CallSessionParticipantLeftEvent,
  CallSessionStartedEvent,
  MessageNewEvent,
} from "@stream-io/node-sdk";
import {
  CallTranscriptionReadyEvent,
  name,
  role,
} from "@stream-io/video-react-sdk";
import { NextRequest, NextResponse } from "next/server";
import OpenAi from "openai";
import { ChatCompletionMessageParam } from "openai/resources/index.mjs";

const openaiClient = new OpenAi({ apiKey: process.env.OPEN_AI_API_KEY! });

function verifySignatureWithSDK(body: string, signature: string): boolean {
  return streamVideo.verifyWebhook(body, signature);
}

export async function POST(req: NextRequest) {
  const signature = req.headers.get("x-signature");
  const apiKey = req.headers.get("x-api-key");

  if (!signature || !apiKey) {
    return NextResponse.json(
      { error: "Missing signature or API key" },
      { status: 400 }
    );
  }

  const body = await req.text();

  if (!verifySignatureWithSDK(body, signature)) {
    return NextResponse.json({ error: "Invalid signature" }, { status: 401 });
  }

  let payload;

  try {
    payload = JSON.parse(body) as Record<string, unknown>;
  } catch {
    return NextResponse.json(
      { error: "Invalid JSON payload" },
      { status: 400 }
    );
  }

  const eventType = (payload as Record<string, unknown>)?.type;

  if (eventType == "call.session_started") {
    const event = payload as unknown as CallSessionStartedEvent;
    const meetingId = event.call.custom?.meetingId;

    if (!meetingId) {
      return NextResponse.json({ error: "Missing meetingId" }, { status: 400 });
    }

    const existingMeeting = await prisma.meeting.findFirst({
      where: {
        id: meetingId,
        status: {
          notIn: ["completed", "active", "processing", "canceled"],
        },
      },
    });

    if (!existingMeeting) {
      return NextResponse.json(
        { error: "Meeting not found or already active/completed" },
        { status: 404 }
      );
    }

    // Update meeting status to active
    await prisma.meeting.update({
      where: { id: existingMeeting.id },
      data: {
        status: "active",
        startedAt: new Date(),
      },
    });

    const existingAgent = await prisma.agent.findUnique({
      where: {
        id: existingMeeting.agentId,
      },
    });

    if (!existingAgent) {
      return NextResponse.json({ error: "Agent not found" }, { status: 404 });
    }

    const call = streamVideo.video.call("default", meetingId);

    const realtimeClient = await streamVideo.video.connectOpenAi({
      call,
      openAiApiKey: process.env.OPEN_AI_API_KEY!,
      agentUserId: existingAgent.id,
    });

    realtimeClient.updateSession({
      instructions: existingAgent.instructions,
    });
  } else if (eventType === "call.session_participant_left") {
    const event = payload as unknown as CallSessionParticipantLeftEvent;
    const meetingId = event.call_cid.split(":")[1];

    if (!meetingId) {
      return NextResponse.json(
        { error: "Missing meetingId from event" },
        { status: 400 }
      );
    }

    const call = streamVideo.video.call("default", meetingId);
    await call.end();
  } else if (eventType === "call.session_ended") {
    const event = payload as unknown as CallEndedEvent;
    const meetingId = event.call.custom?.meetingId;

    if (!meetingId) {
      return NextResponse.json(
        { error: "Missing meetingId from event" },
        { status: 400 }
      );
    }

    const meeting = await prisma.meeting.findFirst({
      where: {
        id: meetingId,
        status: "active",
      },
    });

    if (!meeting) {
      return NextResponse.json(
        { error: "Active meeting not found" },
        { status: 404 }
      );
    }

    await prisma.meeting.update({
      where: { id: meetingId },
      data: {
        status: "processing",
        endedAt: new Date(),
      },
    });
  } else if (eventType === "call.transcription_ready") {
    const event = payload as unknown as CallTranscriptionReadyEvent;
    const meetingId = event.call_cid.split(":")[1];

    const updatedMeeting = await prisma.meeting.update({
      where: { id: meetingId },
      data: {
        transcriptUrl: event.call_transcription.url,
      },
    });

    if (!updatedMeeting) {
      return NextResponse.json({ error: "Meeting not found" }, { status: 404 });
    }

    await inngest.send({
      name: "meetings/processing",
      data: {
        meetingId: updatedMeeting.id,
        transcriptUrl: updatedMeeting.transcriptUrl,
      },
    });
  } else if (eventType === "call.recording_ready") {
    const event = payload as unknown as CallRecordingReadyEvent;
    const meetingId = event.call_cid.split(":")[1];

    await prisma.meeting.update({
      where: { id: meetingId },
      data: {
        recordingUrl: event.call_recording.url,
      },
    });
  } else if (eventType === "message.new") {
    const event = payload as unknown as MessageNewEvent;

    const userId = event.user?.id;
    const channelId = event.channel_id;
    const text = event.message?.text;

    if (!userId || !channelId || !text) {
      return NextResponse.json(
        { error: "Missing userId, channelId, or text in message" },
        { status: 400 }
      );
    }

    const existingMeeting = await prisma.meeting.findFirst({
      where: {
        id: channelId,
        status: "completed",
      },
    });

    if (!existingMeeting) {
      return NextResponse.json(
        { error: "Meeting not found or not completed" },
        { status: 404 }
      );
    }

    const existingAgent = await prisma.agent.findUnique({
      where: {
        id: existingMeeting.agentId,
      },
    });

    if (!existingAgent) {
      return NextResponse.json({ error: "Agent not found" }, { status: 404 });
    }

    if (userId !== existingAgent.id) {
      const instructions = `
      You are an AI assistant helping the user revisit a recently completed meeting.
      Below is a summary of the meeting, generated from the transcript:
      
      ${existingMeeting.summary}
      
      The following are your original instructions from the live meeting assistant. Please continue to follow these behavioral guidelines as you assist the user:
      
      ${existingAgent.instructions}
      
      The user may ask questions about the meeting, request clarifications, or ask for follow-up actions.
      Always base your responses on the meeting summary above.
      
      You also have access to the recent conversation history between you and the user. Use the context of previous messages to provide relevant, coherent, and helpful responses. If the user's question refers to something discussed earlier, make sure to take that into account and maintain continuity in the conversation.
      
      If the summary does not contain enough information to answer a question, politely let the user know.
      
      Be concise, helpful, and focus on providing accurate information from the meeting and the ongoing conversation.
      `;

      const channel = streamChat.channel("messaging", channelId);
      await channel.watch();

      const prevoiusMessages = channel.state.messages
        .slice(-5)
        .filter((msg) => msg.text && msg.text.trim() !== "")
        .map<ChatCompletionMessageParam>((message) => ({
          role: message.user?.id === existingAgent.id ? "assistant" : "user",
          content: message.text || "",
        }));

      const GPTResponse = await openaiClient.chat.completions.create({
        messages: [
          { role: "system", content: instructions },
          ...prevoiusMessages,
          { role: "user", content: text },
        ],
        model: "gpt-4o",
      });

      const GPTResponseText = GPTResponse.choices[0].message.content;

      if (!GPTResponseText) {
        return NextResponse.json(
          { error: "No response from GPT" },
          { status: 400 }
        );
      }

      const avatarUrl = GeneratedAvatarUri({
        seed: existingAgent.name,
        variant: "botttsNeutral",
      });

      streamChat.upsertUser({
        id: existingAgent.id,
        name: existingAgent.name,
        image: avatarUrl,
      });

      channel.sendMessage({
        text: GPTResponseText,
        user: {
          id: existingAgent.id,
          name: existingAgent.name,
          image: avatarUrl,
        },
      });
    }
  }

  return NextResponse.json({ status: "ok" });
}
