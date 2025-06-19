import { CommandSelect } from '@/components/common/CommandSelect';
import { useMeetingsFilter } from '@/hooks/use-filter';
import { MeetingStatus } from '@/lib/types';
import { CircleCheck, CircleX, ClockArrowUp, Loader, Video } from 'lucide-react';
import React from 'react';

type Props = {};

const options = [
  {
    id: MeetingStatus.Upcoming,
    value: MeetingStatus.Upcoming,
    children: (
      <div className='flex items-center gap-x-2 capitalize'>
        <ClockArrowUp />
        {MeetingStatus.Upcoming}
      </div>
    )
  },
  {
    id: MeetingStatus.Completed,
    value: MeetingStatus.Completed,
    children: (
      <div className='flex items-center gap-x-2 capitalize'>
        <CircleCheck />
        {MeetingStatus.Completed}
      </div>
    )
  },
  {
    id: MeetingStatus.Active,
    value: MeetingStatus.Active,
    children: (
      <div className='flex items-center gap-x-2 capitalize'>
        <Video />
        {MeetingStatus.Active}
      </div>
    )
  },
  {
    id: MeetingStatus.Processing,
    value: MeetingStatus.Processing,
    children: (
      <div className='flex items-center gap-x-2 capitalize'>
        <Loader />
        {MeetingStatus.Processing}
      </div>
    )
  },
  {
    id: MeetingStatus.Cancelled,
    value: MeetingStatus.Cancelled,
    children: (
      <div className='flex items-center gap-x-2 capitalize'>
        <CircleX />
        {MeetingStatus.Cancelled}
      </div>
    )
  }
];

export const StatusFilter = (props: Props) => {

  const [filters, setFilters] = useMeetingsFilter();


  return (
    <CommandSelect
      placeholder='Status'
      className='h-9'
      options={options}
      onSelect={(value) => setFilters({ status: value as MeetingStatus })}
      value={filters.status ?? ''}
    />
  );
};