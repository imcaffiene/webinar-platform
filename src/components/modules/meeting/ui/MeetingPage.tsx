'use client';

import { DataTable } from '@/components/common/data-table';
import Error from '@/components/common/ErrorState';
import Loading from '@/components/common/LoadingState';
import { useTRPC } from '@/trpc/client';
import { useSuspenseQuery } from '@tanstack/react-query';
import React from 'react';
import { columns } from './columns';
import EmptyState from '@/components/common/EmptyState';
import { useRouter } from 'next/navigation';
import { useMeetingsFilter } from '@/hooks/use-filter';
import DataPagination from '@/components/common/DataPagination';


export const MeetingPage = () => {

  const trpc = useTRPC();

  const router = useRouter();
  const [filter, setFilter] = useMeetingsFilter();

  const { data } = useSuspenseQuery(trpc.meetings.getMany.queryOptions({
    ...filter,
  }));

  return (
    <div className='flex-1 pb-4 px-4 md:px-8 flex flex-col gap-y-4'>
      <DataTable
        data={data.items}
        columns={columns}
        onRowClick={(row) => router.push(`/meetings/${row.id}`)}
      />
      <DataPagination
        page={filter.page}
        totalPages={data.totalPages}
        onPageChange={(page) => setFilter({ page })}
      />
      {data.items.length === 0 && (
        <EmptyState
          title='Create your first meeting'
          description='Meetings are scheduled interactions with agents. Create one to get started.'
        />
      )}
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