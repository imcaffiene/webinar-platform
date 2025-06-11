import ResponsiveDailog from '@/components/common/ResponsiveDailog';
import React from 'react';
import AgentsForm from './AgentsForm';

type Props = {
  open: boolean;
  onOpenChange: (open: boolean) => void;
};

const AgentsDailogs = ({ onOpenChange, open }: Props) => {

  return (

    <ResponsiveDailog
      description='Create a new agent to automate tasks and workflows.'
      title='New Agent'
      open={open}
      onOpenChange={onOpenChange}>
      <AgentsForm onSuccess={() => onOpenChange(false)} onCancel={() => onOpenChange(false)} />
    </ResponsiveDailog>
  );
};

export default AgentsDailogs;