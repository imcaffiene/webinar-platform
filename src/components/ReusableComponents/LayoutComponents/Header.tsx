"use client";

import { Button } from '@/components/ui/button';
import { User } from '@prisma/client';
import { ArrowLeft } from 'lucide-react';
import { usePathname, useRouter } from 'next/navigation';
import React from 'react';
import PurpleIcon from '../PurpleIcon';
import LightningIcon from '../Logo/LightingIcon';
import CreateWebinarButton from '../CreateWebinarButton';

type Props = { user: User; };

const Header = ({ user }: Props) => {

  const pathName = usePathname();
  const router = useRouter();

  return (
    <div className='w-full px-6 pt-10 sticky top-0 z-10 flex justify-between items-center flex-wrap gap-4 bg-background'>
      {pathName.includes('pipeline') ? (
        <Button
          className='bg-primary/10 border border-border rounded-xl'
          variant={'outline'}
          onClick={() => router.push('/webinar')}>
          <ArrowLeft /> Back to Webinar
        </Button>
      ) : (
        <div className='px-4 py-2 flex justify-center text-bold items-center rounded-xl bg-background border border-border text-primary capitalize'>
          {pathName.split('/')[1]}
        </div>
      )}

      <div className='flex gap-6 items-center flex-wrap'>
        <PurpleIcon>
          <LightningIcon />
        </PurpleIcon>

        <CreateWebinarButton />
      </div>
    </div>
  );
};

export default Header;