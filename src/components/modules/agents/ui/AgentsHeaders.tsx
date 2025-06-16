'use client';

import { Button } from '@/components/ui/button';
import { PlusIcon, XCircleIcon } from 'lucide-react';
import React, { useState } from 'react';
import AgentsDailogs from './AgentsDailogs';
import { useAgentsFilter } from '@/hooks/use-agents-filter';
import AgentsSearchFilters from './AgentsSearchFilters';
import { DEFAULT_PAGE } from '@/lib/constant';


const AgentHeaders = () => {

  const [isDialogOpen, setIsDialogOpen] = useState(false);
  const [filters, setFilters] = useAgentsFilter();

  const isAnyFilterModify = !!filters.search;

  const onClearFilter = () => {
    setFilters({
      search: '',
      page: DEFAULT_PAGE
    });
  };

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
        <div className='flex items-center gap-x-2 p-1'>
          <AgentsSearchFilters />
          {isAnyFilterModify && (
            <Button
              variant='outline'
              size='sm'
              onClick={onClearFilter}
            >
              <XCircleIcon />
              Clear
            </Button>
          )}
        </div>
      </div>
    </>
  );
};

export default AgentHeaders;