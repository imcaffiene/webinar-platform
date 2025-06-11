import AgentsPage, { AgentsViewError, AgentsViewLoading } from '@/components/modules/agents/ui/AgentsPage';
import { getQueryClient, trpc } from '@/trpc/server';
import { dehydrate, HydrationBoundary } from '@tanstack/react-query';
import { Suspense } from 'react';
import { ErrorBoundary } from "react-error-boundary";
import AgentHeaders from '@/components/modules/agents/ui/AgentsHeaders';



const page = async () => {

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