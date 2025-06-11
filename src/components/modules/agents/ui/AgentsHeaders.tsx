'use client';

import { Button } from '@/components/ui/button';
import { PlusIcon } from 'lucide-react';
import React, { useState } from 'react';
import AgentsDailogs from './AgentsDailogs';


const AgentHeaders = () => {

  const [isDialogOpen, setIsDialogOpen] = useState(false);

  return (

    <>
      <AgentsDailogs onOpenChange={setIsDialogOpen} open={isDialogOpen} />
      <div className='py-4 px-4 md:px-8 flex flex-col gap-y-4'>
        <div className='flex items-center justify-between'>
          <h5 className='font-medium text-xl'>My Agents</h5>
          <Button onClick={() => setIsDialogOpen(true)}>
            <PlusIcon />
            New Agent
          </Button>
        </div>
      </div>
    </>
  );
};

export default AgentHeaders;