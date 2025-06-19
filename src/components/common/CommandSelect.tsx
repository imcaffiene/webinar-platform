import React from 'react';
import { Button } from '@/components/ui/button';
import { cn } from '@/lib/utils';
import { ChevronsUpDownIcon } from 'lucide-react';
import {
  CommandEmpty,
  CommandInput,
  CommandItem,
  CommandList,
  CommandResponsiveDialog
} from '@/components/ui/command';

interface Props {
  options: Array<{
    id: string;
    value: string;
    children: React.ReactNode;
  }>;
  onSelect: (value: string) => void;
  onSearch?: (value: string) => void;
  value: string;
  placeholder?: string;
  isSearchable?: boolean;
  className?: string;
}

export const CommandSelect = ({
  onSelect,
  options,
  value,
  className,
  onSearch,
  placeholder = 'Select an option' }: Props) => {

  const [open, setOpen] = React.useState(false);
  const selectOption = options.find((option) => option.value === value);

  const handleOpenChange = (open: boolean) => {
    onSearch?.('');
    setOpen(open);
  };

  return (
    <>
      <Button
        onClick={() => setOpen(true)}
        type='button'
        variant={'outline'}
        className={cn('h-9 justify-between font-normal px-2', !selectOption && 'text-muted-foreground')}
      >
        <div>
          {selectOption?.children ?? placeholder}
        </div>
        <ChevronsUpDownIcon />
      </Button>

      <CommandResponsiveDialog
        open={open}
        onOpenChange={handleOpenChange}
        shouldFilter={!onSearch}
      >
        <CommandInput placeholder='Search...' onValueChange={onSearch} />
        <CommandList>
          <CommandEmpty>
            <span className='text-muted-foreground text-sm'>
              No option found
            </span>
          </CommandEmpty>

          {options.map((option) => (
            <CommandItem
              key={option.id}
              onSelect={() => {
                onSelect(option.value);
                setOpen(false);
              }}
            >
              {option.children}
            </CommandItem>
          ))}
        </CommandList>
      </CommandResponsiveDialog>
    </>
  );
};