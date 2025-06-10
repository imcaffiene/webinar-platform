import { CommandDialog, CommandInput, CommandItem, CommandList } from '@/components/ui/command';
import React, { Dispatch, SetStateAction } from 'react';

type Props = {
  open: boolean;
  setOpen: Dispatch<SetStateAction<boolean>>;
};

const DashboardCommand = ({ open, setOpen }: Props) => {

  return (

    <CommandDialog open={open} onOpenChange={setOpen}>
      <CommandInput placeholder='Find a meeting or a agent' />
      <CommandList>
        <CommandItem>
          Test
        </CommandItem>
      </CommandList>
    </CommandDialog>

  );
};

export default DashboardCommand;