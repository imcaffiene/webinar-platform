import ResponsiveDailog from '@/components/common/ResponsiveDailog';
import React from 'react';
import MeetingForm from './MeetingForm';
import { MeetingGetOne } from '@/lib/types';

interface Props {
  open: boolean;
  onOpenChange: (open: boolean) => void;
  initialValues: MeetingGetOne;
};

export const UpdateMeetingsDialogs = ({ onOpenChange, open, initialValues }: Props) => {



  return (

    <ResponsiveDailog
      description='Edit the meeting to update its details and settings.'
      title='Edit Meeting'
      open={open}
      onOpenChange={onOpenChange}
    >
      <MeetingForm
        onSuccess={() => onOpenChange(false)}
        onCancel={() => onOpenChange(false)}
        initialValues={initialValues}
      />
    </ResponsiveDailog>
  );
};

