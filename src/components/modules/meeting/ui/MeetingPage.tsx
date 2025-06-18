'use client';

import Error from '@/components/common/ErrorState';
import Loading from '@/components/common/LoadingState';
import { useTRPC } from '@/trpc/client';
import { useSuspenseQuery } from '@tanstack/react-query';
import React from 'react';


export const MeetingPage = () => {

  const trpc = useTRPC();

  const { data } = useSuspenseQuery(trpc.meetings.getMany.queryOptions({}));

  return (
    <div>
      sumit bsdk
    </div>
  );
};



export const MeetingsViewLoading = () => {

  return (
    <Loading
      className='flex items-center justify-center min-h-screen'
      size='lg'
      message='Loading meetingss...'
    />
  );
};

export const MeetingsViewError = () => {
  return (
    <Error
      message='Failed to load meetings. Please try again later.'
      className='flex items-center justify-center min-h-screen'
      size='lg'
      variant='ripple'
    />
  );
};