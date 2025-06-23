import SpotlightIcon from '@/components/icons/SpotlightIcon';
import { CallControls, SpeakerLayout } from '@stream-io/video-react-sdk';
import Link from 'next/link';
import React from 'react';

interface Props {
  onLeave: () => void;
  meetingName: string;
};

export const CallActive = ({ meetingName, onLeave }: Props) => {
  return (
    <div className='flex flex-col justify-between p-4 h-full text-white'>
      <div className='bg-[#101213] rounded-full p-3 flex items-center gap-4'>
        <Link
          href={'/'}
          className='flex items-center justify-center p-2 bg-white/10 rounded-full w-12 h-12 hover:bg-white/20 transition-colors'
        >
          <SpotlightIcon className='w-10 h-10 ' />
        </Link>
        <h4 className='text-base'>
          {meetingName}
        </h4>
      </div>
      <SpeakerLayout />
      <div className='bg-[#101213] rounded-full px-4'>
        <CallControls onLeave={onLeave} />
      </div>
    </div>
  );
};