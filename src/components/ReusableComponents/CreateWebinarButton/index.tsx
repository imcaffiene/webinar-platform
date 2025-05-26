"use client";

import { Button } from '@/components/ui/button';
import { Dialog, DialogContent, DialogTitle, DialogTrigger } from '@/components/ui/dialog';
import { useWebinarStore } from '@/store/useWebinarStore';
import { PlusIcon } from 'lucide-react';
import React, { useState } from 'react';
import MultiStepForm from './MultiStepForm';
import BasicInfoStep from './BasicInfoStep';
import CTASteps from './CTASteps';
import AdditionalInfoStep from './AdditionalInfoStep';


type Props = {};

const CreateWebinarButton = (props: Props) => {

  const { isModalOpen, setModalOpen, isComplete, setComplete } = useWebinarStore();

  const [webinarLink, setWebinarLink] = useState('');

  const steps = [
    {
      id: 'basicInfo',
      title: 'Basic Information',
      description: 'Enter the basic information for your webinar',
      component: <BasicInfoStep />,
    },
    {
      id: 'cta',
      title: 'Call to Action',
      description: 'Place provide the end-point for your customers through your webinar',
      component: (
        // <CTASteps assitant={[]} stripeProduct={[]} />
        <CTASteps />
      )
    },
    {
      id: 'additionalInfo',
      title: 'Additional Information',
      description: 'Provide any additional information or settings for your webinar',
      component: <AdditionalInfoStep />
    }
  ];

  const handleComplete = (webinarId: string) => {
    setComplete(true);
    setWebinarLink(
      `${process.env.NEXT_PUBLIC_BASE_URL}/live-webinar/${webinarId}`
    );
  };

  return (
    <Dialog open={isModalOpen} onOpenChange={setModalOpen}>
      <DialogTrigger asChild>
        <Button
          className='rounded-xl flex gap-2 items-center hover:cursor-pointer px-4 py-2 border border-border bg-primary/10 backdrop-blur-sm text-sm font-normal text-primary'
          onClick={() => setModalOpen(true)}
        >
          <PlusIcon />
          Create Webinar
        </Button>
      </DialogTrigger>

      <DialogContent className='sm:max-w-[900px] p-0 bg-transparent border-none'>
        {isComplete ? (
          <div className='bg-muted text-primary rounded-lg overflow-hidden'>
            <DialogTitle className='sr-only'>Webinar Created</DialogTitle>
          </div>
        ) : (
          <>
            <DialogTitle className='sr-only'> Create Webinar</DialogTitle>

            <MultiStepForm
              steps={steps}
              onComplete={handleComplete}
            />
          </>
        )}
      </DialogContent>
    </Dialog>
  );
};

export default CreateWebinarButton;