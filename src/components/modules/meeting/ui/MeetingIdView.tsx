'use client';
import { useTRPC } from '@/trpc/client';
import { useMutation, useQueryClient, useSuspenseQuery } from '@tanstack/react-query';
import React from 'react';
import { MeetingIdViewHeader } from './MeetingIdViewHeader';
import { useRouter } from 'next/navigation';
import UseConfirm from '@/hooks/use-confirm';
import { UpdateMeetingsDialogs } from './UpdateMeetingDialog';
import { UpcomingState } from './UpcomingState';
import { ActiveState } from './ActiveState';
import { CancelledState } from './CancelState';
import { ProcessingState } from './ProcessingState';
import CompletedState from './CompletedState';

interface Props {
  meetingId: string;
}

export const MeetingIdView = ({ meetingId }: Props) => {

  const trpc = useTRPC();
  const router = useRouter();
  const queryClient = useQueryClient();

  const [updateMeetingsDialogsOpen, setUpdateMeetingsDialogsOpen] = React.useState(false);

  const [RemoveConfirmation, confirmRemove] = UseConfirm(
    'Are you sure you want to remove this meeting?',
    `The following action will remove the meeting with ID ${meetingId} and all associated data.`
  );

  const { data } = useSuspenseQuery(
    trpc.meetings.getOne.queryOptions({ id: meetingId })
  );

  const removeMeeting = useMutation(
    trpc.meetings.remove.mutationOptions({
      onSuccess: () => {
        queryClient.invalidateQueries(trpc.meetings.getMany.queryOptions({}));
        router.push('/meetings');
      },
    })
  );

  const handleRemoveMeeting = async () => {
    const ok = await confirmRemove();

    if (!ok) return;

    await removeMeeting.mutateAsync({ id: meetingId });
  };

  const isActive = data.status === 'active';
  const isUpcomig = data.status === 'upcoming';
  const isCompleted = data.status === 'completed';
  const isCancelled = data.status === 'canceled';
  const isProcessing = data.status === 'processing';


  return (
    <>
      <RemoveConfirmation />
      <UpdateMeetingsDialogs
        open={updateMeetingsDialogsOpen}
        onOpenChange={setUpdateMeetingsDialogsOpen}
        initialValues={data}
      />
      <div className='flex-1 py-4 px-4 md:px-8 flex flex-col gap-y-4'>
        <MeetingIdViewHeader
          meetingId={meetingId}
          meetingName={data.name}
          onEdit={() => setUpdateMeetingsDialogsOpen(true)}
          onRemove={handleRemoveMeeting}
        />
        {isCancelled && (<CancelledState />)}
        {isCompleted && (<CompletedState data={data} />)}
        {isActive && (<ActiveState meetingId={meetingId} />)}
        {isUpcomig &&
          (<UpcomingState
            isCancelled={false}
            meetingId={meetingId}
            onCancelMeeting={() => { }}
          />)}
        {isProcessing && <ProcessingState />}
      </div>
    </>
  );
}

