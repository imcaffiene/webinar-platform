import EmptyState from '@/components/common/EmptyState';
import React from 'react';



export const ProcessingState = () => {
  return (
    <div className='bg-gray-950 rounded-lg px-4 py-5 flex flex-col gap-y-8 items-center justify-center'>
      <EmptyState
        image='/processing.svg'
        title='Meeting Completed'
        description='Your meeting has been successfully completed. Thank you for using our service!'
      />
    </div>
  );
}

