import React from 'react';
import PurpleIcon from '../PurpleIcon';
import { Search } from 'lucide-react';
import { Input } from '@/components/ui/input';

type Props = {
  heading?: string;
  leftIcon: React.ReactNode;
  mainIcon: React.ReactNode;
  rightIcon: React.ReactNode;
  children?: React.ReactNode;
  placeholder?: string;
};

const PageHeader = ({ leftIcon, mainIcon, rightIcon, heading, placeholder, children }: Props) => {
  return (
    <div className='w-full flex flex-col gap-8'>
      <div className='w-full flex justify-center sm:justify-between items-center gap-8 flex-wrap'>
        <p className='text-primary text-4xl font-semibold'>{heading}</p>

        <div className="relative md:mr-28">
          <PurpleIcon className='absolute -left-4 -top-3 -z-10 -rotate-45 py-3'>{leftIcon}</PurpleIcon>
          <PurpleIcon className='z-10 backdrop-blur'>{mainIcon}</PurpleIcon>
          <PurpleIcon className='absolute -right-4 -z-10 rotate-45 py-3 -top-3'>{rightIcon}</PurpleIcon>
        </div>
      </div>

      <div className='w-full flex flex-wrap gap-6 items-center justify-between'>
        <div className='w-full md:max-w-3/4 relative flex-1'>
          <Search className='absolute left-3 top-1/2 h-2 w-4 -translate-y-1/2 text-gray-500' />
          <Input
            type='text'
            placeholder={placeholder || 'Search...'}
            className='pl-10 rounded-md'
          />
        </div>
        <div className='md:max-w-1/4 w-full overflow-x-auto'>
          {children}
        </div>
      </div>
    </div>
  );
};

export default PageHeader;