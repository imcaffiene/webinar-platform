import { cn } from '@/lib/utils';
import React from 'react';

type Props = {
  className?: string;
  children?: React.ReactNode;
};

const PurpleIcon = ({ children, className }: Props) => {
  return (
    <div className={cn(`px-4 py-2 iconBackground`, className)}>
      {children}
    </div>
  );
};

export default PurpleIcon;