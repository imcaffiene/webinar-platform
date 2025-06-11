import { CommandInput, CommandItem, CommandList, CommandResponsiveDialog } from '@/components/ui/command';
import React, { Dispatch, SetStateAction } from 'react';

type Props = {
  open: boolean;
  setOpen: Dispatch<SetStateAction<boolean>>;
};

const DashboardCommand = ({ open, setOpen }: Props) => {

  return (

    <CommandResponsiveDialog open={open} onOpenChange={setOpen}>
      <CommandInput placeholder='Find a meeting or a agent' />
      <CommandList>
        <CommandItem>
          Test
        </CommandItem>
      </CommandList>
    </CommandResponsiveDialog>

  );
};

export default DashboardCommand;