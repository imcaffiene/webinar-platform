'use client';

import { authClient } from '@/lib/auth-client';
import { Loader } from 'lucide-react';
import React from 'react';
import { CallConnect } from './CallConnect';
import { GeneratedAvatarUri } from '@/lib/avatar';

interface Props {
  meetingId: string,
  meetingName: string,
};

export const CallProvider = ({ meetingId, meetingName }: Props) => {

  const { data, isPending } = authClient.useSession();

  if (!data || isPending) {
    return (
      <div className='flex h-screen items-center justify-center bg-radial from-sidebar-accent to-sidebar'>
        <Loader className='size-6 animate-spin text-white' />
      </div>
    );
  }
  return (
    <CallConnect
      meetingId={meetingId}
      meetingName={meetingName}
      userId={data.user.id}
      userName={data.user.name}
      userImage={
        data.user.image ?? GeneratedAvatarUri({ seed: data.user.name, variant: 'botttsNeutral' })
      }
    />
  );
};