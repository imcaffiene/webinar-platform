'use client';

import { Button } from '@/components/ui/button';
import { PlusIcon, XCircle } from 'lucide-react';
import React from 'react';
import MeetingsDialogs from './MeetingDialogs';
import MeetingSearchFilters from './MeetingSearchFilters';
import { StatusFilter } from './StatusFilter';
import { AgentsIdFilter } from './AgentsIdFilter';
import { useMeetingsFilter } from '@/hooks/use-filter';
import { ScrollArea, ScrollBar } from '@/components/ui/scroll-area';
import { DEFAULT_PAGE } from '@/lib/constant';


const MeetingHeaders = () => {

  const [isDialogOpen, setIsDialogOpen] = React.useState(false);
  const [filter, setFilter] = useMeetingsFilter();

  const isAnyFilterModified = !!filter.status || !!filter.agentId || !!filter.search;

  const onClearFilters = () => {
    setFilter({
      status: null,
      agentId: '',
      search: '',
      page: DEFAULT_PAGE,
    });
  };

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
        <ScrollArea>
          <div className='flex items-center gap-x-2 p-1'>
            <MeetingSearchFilters />
            <StatusFilter />
            <AgentsIdFilter />

            {isAnyFilterModified && (
              <Button variant={'outline'} onClick={onClearFilters}>
                <XCircle className='size-4' />
                Clear
              </Button>
            )}
          </div>
          <ScrollBar orientation='horizontal' />
        </ScrollArea>
      </div>
    </>
  );
};

export default MeetingHeaders;