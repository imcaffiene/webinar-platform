'use client';
import Loading from '@/components/common/LoadingState';
import { authClient } from '@/lib/auth-client';
import React from 'react';
import { ChatUI } from './ChatUI';

interface Props {
  meetingId: string;
  meetingName: string;

};

const ChatProvider = ({ meetingId, meetingName }: Props) => {

  const { data, isPending } = authClient.useSession();

  if (isPending || !data?.user) {
    return (
      <Loading
        message='PLease wait we loading the chat...'
      />
    );
  }

  return (
    <ChatUI
      meetingId={meetingId}
      meetingName={meetingName}
      userId={data.user.id}
      userName={data.user.name}
      userImage={data.user.image ?? undefined}

    />
  );
};

export default ChatProvider;