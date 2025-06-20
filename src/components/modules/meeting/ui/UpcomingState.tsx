import EmptyState from '@/components/common/EmptyState';
import { Button } from '@/components/ui/button';
import { Ban, Video } from 'lucide-react';
import Link from 'next/link';
import React from 'react';

interface Props {
  meetingId: string;
  onCancelMeeting: () => void;
  isCancelled: boolean;
};

export const UpcomingState = ({ isCancelled, meetingId, onCancelMeeting }: Props) => {
  return (
    <div className='bg-gray-950 rounded-lg px-4 py-5 flex flex-col gap-y-8 items-center justify-center'>
      <EmptyState
        image='/upcoming.svg'
        title='Upcoming Meetings'
        description='You have no upcoming meetings scheduled at the moment.'
      />

      <div className='flex flex-col-reverse lg:flex-row lg:justify-center items-center gap-2 w-full'>
        <Button
          variant='outline'
          className='w-full lg:w-auto'
          onClick={onCancelMeeting}
          disabled={isCancelled}
        >
          <Ban />
          Cancel Meeting
        </Button>
        <Button asChild className='w-full lg:w-auto' disabled={isCancelled}>
          <Link href={`/call/${meetingId}`}>
            <Video />
            Start Meeting
          </Link>
        </Button>
      </div>
    </div>
  );
}

