import ResponsiveDailog from '@/components/common/ResponsiveDailog';
import React from 'react';
import MeetingForm from './MeetingForm';
import { useRouter } from 'next/navigation';

interface Props {
  open: boolean;
  onOpenChange: (open: boolean) => void;
};

const MeetingsDialogs = ({ onOpenChange, open }: Props) => {

  const router = useRouter();

  return (

    <ResponsiveDailog
      description='Create a new meeting to automate tasks and workflows.'
      title='New Meeting'
      open={open}
      onOpenChange={onOpenChange}
    >
      <MeetingForm
        onSuccess={(id) => {
          onOpenChange(false);
          router.push(`/meetings/${id}`);
        }}
        onCancel={() => onOpenChange(false)}
      />
    </ResponsiveDailog>
  );
};

export default MeetingsDialogs;