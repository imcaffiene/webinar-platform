"use client";

import Error from '@/components/common/ErrorState';
import Loading from '@/components/common/LoadingState';
import { useTRPC } from '@/trpc/client';
import { useSuspenseQuery } from '@tanstack/react-query';
import React from 'react';

type Props = {};

const AgentsPage = (props: Props) => {

  const trpc = useTRPC();

  const { data, } = useSuspenseQuery(trpc.agents.getMany.queryOptions());

  return (
    <div>
      {JSON.stringify(data, null, 2)}
    </div>
  );
};

export default AgentsPage;

export const AgentsViewLoading = () => {

  return (
    <Loading
      className='flex items-center justify-center min-h-screen'
      size='lg'
      message='Loading agents...'
    />
  );
};

export const AgentsViewError = () => {
  return (
    <Error
      message='Failed to load agents. Please try again later.'
      className='flex items-center justify-center min-h-screen'
      size='lg'
      variant='ripple'
    />
  );
};