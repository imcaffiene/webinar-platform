'use client';

import { Button } from '@/components/ui/button';
import { Calendar } from '@/components/ui/calendar';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Popover, PopoverContent, PopoverTrigger } from '@/components/ui/popover';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Textarea } from '@/components/ui/textarea';
import { cn } from '@/lib/utils';
import { useWebinarStore } from '@/store/useWebinarStore';
import { format } from 'date-fns';
import { CalendarIcon, Clock, Upload } from 'lucide-react';
import React from 'react';
import { toast } from 'sonner';

type Props = {};

const BasicInfoStep = (props: Props) => {

  const { formData, updateBasicInfoField, getStepValidationErrors } = useWebinarStore();

  const { webinarName, description, date, time, timeFormat } = formData.basicInfo;

  const error = getStepValidationErrors('basicInfo');

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    updateBasicInfoField(name as keyof typeof formData.basicInfo, value);
  };

  const handleDateChange = (selectedDate: Date | undefined) => {
    updateBasicInfoField('date', selectedDate);

    if (selectedDate) {
      const today = new Date();
      today.setHours(0, 0, 0, 0);
      if (selectedDate < today) {
        toast.error('Selected date cannot be in the past.');
      }
    }
  };

  const handleTimeFormatChange = (value: string) => {
    updateBasicInfoField('timeFormat', value as 'AM' | 'PM');
  };

  return (
    <div className='space-y-6'>
      <div className='space-y-2'>

        <Label
          htmlFor='webinarName'
          className={error.webinarName ? 'text-red-500' : ''}
        >
          Webinar Name <span className='text-red-500'>*</span>
        </Label>

        <Input
          id='webinarName'
          name='webinarName'
          value={webinarName || ''}
          onChange={handleChange}
          placeholder='Enter webinar name'
          className={cn(
            '!bg-background/50 border border-input',
            error.webinarName && 'border-red-400 focus-visible:ring-red-400'
          )}
        />
        {error.webinarName && (
          <p className='text-sm text-red-400'>{error.webinarName}</p>
        )}
      </div>

      <div className='space-y-2'>
        <Label
          htmlFor='description'
          className={error.description ? 'text-red-500' : ''}
        >
          Description <span className='text-red-500'>*</span>
        </Label>

        <Textarea
          id='description'
          name='description'
          value={description || ''}
          onChange={handleChange}
          placeholder='Enter webinar description'
          className={cn(
            'min-h-[100px] !bg-background/50 border border-input',
            error.description && 'border-red-400 focus-visible:ring-red-400'
          )}
        />
        {error.description && (
          <p className='text-sm text-red-400'>{error.description}</p>
        )}
      </div>

      <div className='grid grid-cols-1 md:grid-cols-2 gap-4'>
        <div className='space-y-2'>
          <Label className={error.date ? 'text-red-4s00' : ''}>
            Webinar Date <span className='text-red-500'>*</span>
          </Label>

          <Popover>
            <PopoverTrigger asChild>
              <Button
                variant={'outline'}
                className={cn(
                  'w-full justify-start text-left font-normal !bg-background/50 border border-input',
                  !date && 'text-gray-500',
                  error.date && 'border-red-400 focus-visible:ring-red-400'
                )}
              >
                <CalendarIcon className='mr-2 h-4 w-4' />
                {date ? format(date, 'PPP') : 'Select date'}
              </Button>
            </PopoverTrigger>
            <PopoverContent className='w-auto p-0 !bg-background/50 border border-input'>
              <Calendar
                mode='single'
                selected={date}
                onSelect={handleDateChange}
                initialFocus
                className='bg-background'
                disabled={(date) => {
                  const today = new Date();
                  today.setHours(0, 0, 0, 0);
                  return date < today;
                }}
              />
            </PopoverContent>
          </Popover>
          {error.date && (
            <p className='text-sm text-red-400'>{error.date}</p>
          )}
        </div>

        <div className='space-y-2'>
          <Label className={error.time ? 'text-red-500' : ''}>
            Webinar Time <span className='text-red-500'>*</span>
          </Label>

          <div className='flex gap-2'>
            <div className='relative flex-1'>
              <Clock className=' absolute left-3 top-2.5 h-4 w-4 text-foreground' />
              <Input
                name='time'
                value={time || ''}
                onChange={handleChange}
                placeholder='HH:MM'
                className={cn(
                  'pl-9 !bg-background/50 border border-input',
                  error.time && 'border-red-400 focus-visible:ring-red-400'
                )}
              />
            </div>

            <Select
              value={timeFormat || 'AM'}
              onValueChange={handleTimeFormatChange}
            >
              <SelectTrigger className='w-20 !bg-background/50 border border-input'>
                <SelectValue placeholder='AM' />
              </SelectTrigger>
              <SelectContent className='!bg-background border border-input'>
                <SelectItem value='AM'>AM</SelectItem>
                <SelectItem value='PM'>PM</SelectItem>
              </SelectContent>
            </Select>
          </div>
          {error.time && (
            <p className='text-sm text-red-400'>{error.time}</p>
          )}
        </div>
      </div>

      <div className=' flex items-center gap-2 text-sm text-gray-400 mt-4'>
        <div className='flex items-center'>
          <Upload className='h-4 w-4 mr-2' />
          Uploading a video makes this webinar pre-recorded.
        </div>
        <Button
          variant={'outline'}
          className='ml-auto relative border border-input hover:bg-background'
        >
          Upload File
          <Input
            type='file'
            className='absolute inset-0 opacity-0 cursor-pointer'
          />
        </Button>
      </div>
    </div>
  );
};

export default BasicInfoStep;