'use client';

import { Button } from '@/components/ui/button';
import { PlusIcon } from 'lucide-react';
import React from 'react';
import MeetingsDialogs from './MeetingDialogs';


const MeetingHeaders = () => {

  const [isDialogOpen, setIsDialogOpen] = React.useState(false);

  return (

    <>
      <MeetingsDialogs open={isDialogOpen} onOpenChange={setIsDialogOpen} />
      <div className='py-4 px-4 md:px-8 flex flex-col gap-y-4'>
        <div className='flex items-center justify-between'>
          <h5 className='font-medium text-xl'>My Meetings</h5>
          <Button onClick={() => setIsDialogOpen(true)}>
            <PlusIcon />
            New Meeting
          </Button>
        </div>
        <div className='flex items-center gap-x-2 p-1'>

        </div>
      </div>
    </>
  );
};

export default MeetingHeaders;