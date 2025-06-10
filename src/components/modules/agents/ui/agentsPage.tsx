"use client";

import ErrorDisplay from '@/components/common/ErrorState';
import Loading from '@/components/common/LoadingState';
import { useTRPC } from '@/trpc/client';
import { useQuery } from '@tanstack/react-query';
import React from 'react';

type Props = {};

const AgentsPage = (props: Props) => {

  const trpc = useTRPC();

  const { data, isError, isLoading } = useQuery(trpc.agents.getMany.queryOptions());

  if (isLoading) {
    return (
      <Loading message='hi' className='flex items-center justify-center min-h-screen' size='lg' />

    );
  }

  if (isError) {
    return (
      <ErrorDisplay
        className='flex items-center justify-center min-h-screen'
        size='lg'
        title="Connection Failed"
        message="Unable to reach the server. Please check your network connection." />
    );
  }

  return (
    <div>
      {JSON.stringify(data, null, 2)}
    </div>
  );
};

export default AgentsPage;