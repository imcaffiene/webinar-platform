import { inngest } from "@/inngest/client";
import { prisma } from "@/lib/prisma";
import { streamVideo } from "@/lib/stream-video";
import {
  CallEndedEvent,
  CallRecordingReadyEvent,
  CallSessionParticipantLeftEvent,
  CallSessionStartedEvent,
} from "@stream-io/node-sdk";
import { CallTranscriptionReadyEvent } from "@stream-io/video-react-sdk";
import { NextRequest, NextResponse } from "next/server";

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
  }

  return NextResponse.json({ status: "ok" });
}
