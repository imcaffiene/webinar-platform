'use client';


import Error from '@/components/common/ErrorState';
import Loading from '@/components/common/LoadingState';
import { useTRPC } from '@/trpc/client';
import { useMutation, useQueryClient, useSuspenseQuery } from '@tanstack/react-query';
import React, { useState } from 'react';
import AgentIdViewHeader from './AgentIdViewHeader';
import { GeneratedAvatar } from '@/components/generated-avatar';
import { Badge } from '@/components/ui/badge';
import { VideoIcon } from 'lucide-react';
import { useRouter } from 'next/navigation';
import { toast } from 'sonner';
import UseConfirm from '@/hooks/use-confirm';
import UpdateAgentsDailogs from './UpdateAgentDialog';

interface Props {
  agentId: string;
}

const AgentIdView = ({ agentId }: Props) => {

  const router = useRouter();
  const trpc = useTRPC();
  const queryClient = useQueryClient();

  const [updateAgentsDailogsOpen, setUpdateAgentsDailogsOpen] = useState(false);

  const { data } = useSuspenseQuery(trpc.agents.getOne.queryOptions({ id: agentId }));

  const removeAgent = useMutation(
    trpc.agents.remove.mutationOptions({
      onSuccess: async () => {
        await queryClient.invalidateQueries(trpc.agents.getMany.queryOptions({}));
      },
      onError: (error) => {
        toast.error(`Failed to remove agent: ${error.message}`);
      }
    })
  );

  const [RemoveConfirmation, confirmRemove] = UseConfirm(
    "Are you sure you want to remove this agent?",
    `The following action will remove ${data.name} associated meetings`
  );

  const handleRemoveAgent = async () => {
    const ok = await confirmRemove();

    if (!ok) return;

    await removeAgent.mutateAsync({ id: agentId });
  };

  return (
    <>
      <RemoveConfirmation />
      <UpdateAgentsDailogs
        open={updateAgentsDailogsOpen}
        onOpenChange={setUpdateAgentsDailogsOpen}
        initialValues={data}
      />
      <div className='flex-1 py-4 px-4 md:px-8 flex flex-col gap-y-4'>
        <AgentIdViewHeader
          agentId={agentId}
          agentName={data.name}
          onEdit={() => setUpdateAgentsDailogsOpen(true)}
          onRemove={handleRemoveAgent}
        />

        <div className='bg-gray-700 rounded-lg border'>
          <div className='px-4 py-5 gap-y-5 flex flex-col col-span-5'>
            <div className='flex items-center gap-x-3'>
              <GeneratedAvatar
                variant='botttsNeutral'
                seed={data.name}
                className='size-'
              />
              <h2 className='text-2xl font-medium'>{data.name}</h2>
            </div>
            <Badge variant={'outline'} className='flex items-center gap-x-2 [&>svg]:size-4'>
              <VideoIcon className='text-blue-700' />
              3
              {/* { data.meetingsCount}{ data.meetingsCount === 1 ? ' Meeting' : ' Meetings' } */}
            </Badge>

            <div className='flex flex-col gap-y-4'>
              <p className='text-lg font-medium'>Instruction</p>
              <p className='text-foreground'>{data.instructions}</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default AgentIdView;



export const AgentsIdViewLoading = () => {

  return (
    <Loading
      className='flex items-center justify-center min-h-screen'
      size='lg'
      message='Loading agents...'
    />
  );
};

export const AgentsIdViewError = () => {
  return (
    <Error
      message='Failed to load agents. Please try again later.'
      className='flex items-center justify-center min-h-screen'
      size='lg'
      variant='ripple'
    />
  );
};