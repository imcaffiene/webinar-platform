import MeetingHeaders from '@/components/modules/meeting/ui/MeetingHeaders';
import {
  MeetingPage,
  MeetingsViewError,
  MeetingsViewLoading
} from '@/components/modules/meeting/ui/MeetingPage';
import { auth } from '@/lib/auth';
import { loadSearchParams, MeetingloadSearchParams } from '@/lib/params';
import { getQueryClient, trpc } from '@/trpc/server';
import { dehydrate, HydrationBoundary } from '@tanstack/react-query';
import { headers } from 'next/headers';
import { redirect } from 'next/navigation';
import { SearchParams } from 'nuqs';
import React, { Suspense } from 'react';
import { ErrorBoundary } from 'react-error-boundary';

interface Props {
  searchparams: Promise<SearchParams>;
}

const page = async ({ searchparams }: Props) => {

  const filters = await MeetingloadSearchParams(searchparams);

  const session = await auth.api.getSession({
    headers: await headers()
  });

  if (!session) {
    redirect("/sign-in");
  }

  const queryClient = getQueryClient();
  void queryClient.prefetchQuery(
    trpc.meetings.getMany.queryOptions({ ...filters })
  );

  return (
    <>
      <MeetingHeaders />
      <HydrationBoundary state={dehydrate(queryClient)}>
        <Suspense fallback={<MeetingsViewLoading />}>
          <ErrorBoundary fallback={<MeetingsViewError />}>
            <MeetingPage />
          </ErrorBoundary>
        </Suspense>
      </HydrationBoundary>
    </>
  );
};

export default page;