import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Tabs, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { cn } from '@/lib/utils';
import { useWebinarStore } from '@/store/useWebinarStore';
import { CtaTypeEnum } from '@prisma/client';
import { add } from 'date-fns';
import { X } from 'lucide-react';
import React, { useState } from 'react';

type Props = {};

const CTASteps = (props: Props) => {

  const { updateCtaField, getStepValidationErrors, formData, addTag, removeTag } = useWebinarStore();
  const { ctaType, aiAgent, ctaLabel, priceId, tags } = formData.cta;
  const [tagsInput, setTagsInput] = useState('');

  const error = getStepValidationErrors('cta');

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    updateCtaField(name as keyof typeof formData.cta, value);
  };

  const handleAddTag = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter' && tagsInput.trim()) {
      e.preventDefault();
      addTag(tagsInput.trim());
      setTagsInput('');
    }
  };

  const handleSelectedCtaType = (value: string) => {
    updateCtaField('ctaType', value as CtaTypeEnum);
  };


  return (
    <div className='space-y-6'>
      <div className='space-y-2'>

        <Label
          htmlFor='ctaLabels'
          className={error?.ctaLabel ? 'text-red-400' : ''}
        >
          CTA Label <span className='text-red-500'>*</span>
        </Label>

        <Input
          id='ctaLabels'
          name='ctaLabel'
          value={ctaLabel || ''}
          onChange={handleChange}
          placeholder="Let's get started"
          className={cn(
            '!bg-background/50 border border-input',
            error?.ctaLabel && 'border-red-400 focus-visible:ring-red-400'
          )}
        />
        {error?.ctaLabel && (
          <p className='text-red-400 text-sm mt-1'>
            {error?.ctaLabel}
          </p>
        )}
      </div>

      <div className='space-y-2'>
        <Label htmlFor='tags'> Tags</Label>
        <Input
          id='tags'
          value={tagsInput}
          onChange={(e) => setTagsInput(e.target.value)}
          onKeyDown={handleAddTag}
          placeholder='Add tags (press Enter to add)'
          className='!bg-background/50 border border-input'
        />
        {tags && tags.length > 0 && (
          <div className='flex flex-wrap gap-2 mt-2'>
            {tags.map((tag: string, index: number) => (
              <div
                className='flex items-center gap-1 bg-gray-800 text-white px-3 py-1 rounded-md'
                key={index}>
                {tag}
                <Button
                  onClick={() => removeTag(tag)}
                  className='text-gray-400 hover:text-white'
                >
                  <X className='h-3 w-3' />
                </Button>
              </div>
            ))}
          </div>
        )}
      </div>

      <div className='space-y-2 w-full'>
        <Label htmlFor='ctaType'>CTA Type</Label>
        <Tabs
          defaultValue={CtaTypeEnum.BOOK_A_CALL}
          className='w-full'
        >
          <TabsList className='w-full bg-transparent'>
            <TabsTrigger
              value={CtaTypeEnum.BOOK_A_CALL}
              className='w-1/2 data-[state=active]:!bg-background/50'
              onClick={() => handleSelectedCtaType(CtaTypeEnum.BOOK_A_CALL)}
            >
              Book a Call
            </TabsTrigger>
            <TabsTrigger
              value={CtaTypeEnum.BUY_NOW}
              className='w-1/2'
              onClick={() => handleSelectedCtaType(CtaTypeEnum.BUY_NOW)}
            >
              Buy Now
            </TabsTrigger>
          </TabsList>
        </Tabs>
      </div>
    </div>
  );
};

export default CTASteps;