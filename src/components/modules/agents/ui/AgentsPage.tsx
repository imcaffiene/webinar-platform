"use client";

import Error from '@/components/common/ErrorState';
import Loading from '@/components/common/LoadingState';
import { useTRPC } from '@/trpc/client';
import { useSuspenseQuery } from '@tanstack/react-query';
import React from 'react';
import { DataTable } from './data-table';
import { columns } from './columns';
import EmptyState from '@/components/common/EmptyState';




const AgentsPage = () => {

  const trpc = useTRPC();

  const { data, } = useSuspenseQuery(trpc.agents.getMany.queryOptions());

  return (
    <div className='flex-1 pb-4 px-4 md:px-8 flex flex-col gap-y-4'>
      <DataTable data={data} columns={columns} />
      {data.length === 0 && (
        <EmptyState
          title='Create your first agent'
          description='Agents are AI assistants that can help you with various tasks. Create one to get started.'
        />
      )}
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