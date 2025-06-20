import EmptyState from '@/components/common/EmptyState';
import React from 'react';



export const CancelledState = () => {
  return (
    <div className='bg-gray-950 rounded-lg px-4 py-5 flex flex-col gap-y-8 items-center justify-center'>
      <EmptyState
        image='/cancelled.svg'
        title='Meeting Cancelled'
        description='This meeting has been cancelled and cannot be joined.'
      />
    </div>
  );
}

