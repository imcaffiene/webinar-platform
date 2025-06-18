import ResponsiveDailog from '@/components/common/ResponsiveDailog';
import React from 'react';
import AgentsForm from './AgentsForm';
import { AgentGetOne } from '@/lib/types';

interface Props {
  open: boolean;
  onOpenChange: (open: boolean) => void;
  initialValues: AgentGetOne;
};

const UpdateAgentsDailogs = ({ onOpenChange, open, initialValues }: Props) => {

  return (

    <ResponsiveDailog
      description='Edit the agent details and settings.'
      title='Edit Agent'
      open={open}
      onOpenChange={onOpenChange}
    >
      <AgentsForm
        onSuccess={() => onOpenChange(false)}
        onCancel={() => onOpenChange(false)}
        initialValues={initialValues}
      />
    </ResponsiveDailog>
  );
};

export default UpdateAgentsDailogs;