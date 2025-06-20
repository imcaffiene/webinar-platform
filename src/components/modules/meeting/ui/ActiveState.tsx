import EmptyState from '@/components/common/EmptyState';
import { Button } from '@/components/ui/button';
import { Video } from 'lucide-react';
import Link from 'next/link';
import React from 'react';

interface Props {
  meetingId: string;
};

export const ActiveState = ({ meetingId }: Props) => {
  return (
    <div className='bg-gray-950 rounded-lg px-4 py-5 flex flex-col gap-y-8 items-center justify-center'>
      <EmptyState
        image='/upcoming.svg'
        title='Meeting Active'
        description='Meeting is currently active. You can join the call or cancel the meeting.'
      />

      <div className='flex flex-col-reverse lg:flex-row lg:justify-center items-center gap-2 w-full'>

        <Button asChild className='w-full lg:w-auto'>
          <Link href={`/call/${meetingId}`}>
            <Video />
            Join Meeting
          </Link>
        </Button>
      </div>
    </div>
  );
}

