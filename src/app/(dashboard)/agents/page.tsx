import AgentsPage, { AgentsViewError, AgentsViewLoading } from '@/components/modules/agents/ui/AgentsPage';
import { getQueryClient, trpc } from '@/trpc/server';
import { dehydrate, HydrationBoundary } from '@tanstack/react-query';
import { Suspense } from 'react';
import { ErrorBoundary } from "react-error-boundary";
import AgentHeaders from '@/components/modules/agents/ui/AgentsHeaders';
import { auth } from '@/lib/auth';
import { redirect } from 'next/navigation';
import { headers } from 'next/headers';



const page = async () => {

  const session = await auth.api.getSession({
    headers: await headers()
  });

  if (!session) {
    redirect("/sign-in");
  }


  const queryClient = getQueryClient();

  void queryClient.prefetchQuery(trpc.agents.getMany.queryOptions());

  return (

    <>
      <AgentHeaders />
      <HydrationBoundary state={dehydrate(queryClient)}>
        <Suspense fallback={<AgentsViewLoading />}>
          <ErrorBoundary fallback={<AgentsViewError />}>
            <AgentsPage />
          </ErrorBoundary>
        </Suspense>
      </HydrationBoundary>
    </>
  );
};

export default page;