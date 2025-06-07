import { CommandDialog, CommandInput } from '@/components/ui/command';
import React, { Dispatch, SetStateAction } from 'react';

type Props = {
  open: boolean;
  setOpen: Dispatch<SetStateAction<boolean>>;
};

const DashboardCommand = ({ open, setOpen }: Props) => {

  return (

    <CommandDialog>
      <CommandInput />
    </CommandDialog>

  );
};

export default DashboardCommand;