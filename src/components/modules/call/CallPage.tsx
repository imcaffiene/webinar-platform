'use client';

import Error from '@/components/common/ErrorState';
import { useTRPC } from '@/trpc/client';
import { useSuspenseQuery } from '@tanstack/react-query';
import React from 'react';
import { CallProvider } from './CallProvider';

interface Props {
  meetingId: string;
};

export const CallPage = ({ meetingId }: Props) => {

  const trpc = useTRPC();
  const { data } = useSuspenseQuery(trpc.meetings.getOne.queryOptions({ id: meetingId }));

  if (data.status === 'completed') {
    return (
      <div>
        <Error
          message='Meeting has already ended'
          className='flex items-center justify-center min-h-screen'
          size='lg'
          variant='ripple'
        />
      </div>
    );
  }

  return (
    <CallProvider
      meetingId={meetingId}
      meetingName={data.name || 'Meeting'}
    />
  );
}

