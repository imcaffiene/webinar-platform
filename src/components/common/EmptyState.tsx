import Image from 'next/image';
import React from 'react';

type Props = {
  title: string;
  description: string;
};

const EmptyState = ({ description, title }: Props) => {


  return (

    <div className='flex flex-col items-center justify-center'>
      <Image src={'/empty.svg'} alt='Empty' width={240} height={240} />
      <div className='flex flex-col gap-y-2 max-w-md mx-auto text-center'>
        <h6 className=''>{title}</h6>
        <p className='text-sm text-muted-foreground'>{description}</p>
      </div>
    </div>
  );
};

export default EmptyState;