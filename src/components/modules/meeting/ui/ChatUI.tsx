'use client';

import Loading from '@/components/common/LoadingState';
import { useTRPC } from '@/trpc/client';
import { useMutation } from '@tanstack/react-query';
import React, { useEffect, useState } from 'react';
import { Channel as StreamChannel } from 'stream-chat';
import { Channel, Chat, MessageInput, MessageList, Thread, useCreateChatClient, Window } from 'stream-chat-react';

import "stream-chat-react/dist/css/v2/index.css";

interface Props {
  meetingId: string;
  meetingName: string;
  userId: string;
  userName: string;
  userImage: string | undefined;
};

export const ChatUI = ({ meetingId, meetingName, userId, userImage, userName }: Props) => {

  const trpc = useTRPC();
  const { mutateAsync: generateChatToken } = useMutation(trpc.meetings.generateChatToken.mutationOptions());

  const [channel, setChannel] = useState<StreamChannel>();
  const client = useCreateChatClient({
    apiKey: process.env.NEXT_PUBLIC_STREAM_CHAT_API_KEY!,
    tokenOrProvider: generateChatToken,
    userData: {
      id: userId,
      name: userName,
      image: userImage
    }
  });

  useEffect(() => {
    if (!client) return;

    const channel = client.channel('messaging', meetingId, {
      members: [userId],
    });

    setChannel(channel);
  }, [client, meetingId, meetingName, userId]);

  if (!client) {
    return (
      <Loading
        message='This may take few seconds, please wait...'
      />
    );
  }

  return (
    <div className='bg-secondary rounded-lg border overflow-hidden'>
      <Chat client={client}>
        <Channel channel={channel}>
          <Window>
            <div className='flex-1 overflow-y-auto max-h-[calc(100vh-23rem)] border-b'>
              <MessageList />
            </div>
            <MessageInput />
          </Window>
          <Thread />
        </Channel>
      </Chat>
    </div>
  );
}

