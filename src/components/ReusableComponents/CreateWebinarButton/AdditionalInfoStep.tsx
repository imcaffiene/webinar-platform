'use client';

import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Switch } from '@/components/ui/switch';
import { cn } from '@/lib/utils';
import { useWebinarStore } from '@/store/useWebinarStore';
import { Info } from 'lucide-react';
import React from 'react';

type Props = {};

const AdditionalInfoStep = (props: Props) => {

  const { formData, updateAdditionalInfoField, getStepValidationErrors } = useWebinarStore();

  const { couponCode, lockChat, couponEnabled } = formData.additionalInfo;

  const error = getStepValidationErrors('additionalInfo');

  const handleToggleLockChat = (checked: boolean) => {
    updateAdditionalInfoField('lockChat', checked);
  };

  const handleToggleCoupon = (checked: boolean) => {
    updateAdditionalInfoField('couponEnabled', checked);
  };

  const handleCouponCodeChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    updateAdditionalInfoField('couponCode', e.target.value);
  };

  return (
    <div className='space-y-8'>
      <div className='flex items-center justify-between'>
        <div>
          <Label
            htmlFor='lock-chat'
            className='text-base font-medium'
          >
            Look Chart
          </Label>
          <p className='text-sm text-gray-400'>
            Turn it on to make chart visible to your user at all times.
          </p>
        </div>
        <Switch
          id='lock-chart'
          checked={lockChat || false}
          onCheckedChange={handleToggleLockChat}
        />
      </div>

      <div className='space-y-4'>
        <div className='flex items-center justify-between'>
          <div>
            <Label
              htmlFor='couponCode'
              className='text-base font-medium'
            >
              Coupon Code
            </Label>
            <p className='text-sm text-gray-400'>
              Turn it on to offer discount to your viewers.
            </p>
          </div>

          <Switch
            id='couponEnabled'
            checked={couponEnabled || false}
            onCheckedChange={handleToggleCoupon}
          />
        </div>
        {couponEnabled && (
          <div className='space-y-2'>
            <Input
              id='couponCode'
              value={couponCode || ''}
              onChange={handleCouponCodeChange}
              placeholder='Enter coupon code'
              className={cn(
                '!bg-background/50 border border-input',
                error.couponCode && 'border-red-400 focus-visible:ring-red-400'
              )}
            />
            {error.couponCode && (
              <p className='text-red-400 text-sm mt-1'>
                {error.couponCode}
              </p>
            )}
            <div className='flex items-start gap-2 text-sm text-gray-400 mt-2'>
              <Info className='h-4 w-4 mt-0.5' />
              <p>
                This coupon code can be used to promote a sale. User can used it for buy now CTA.
              </p>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default AdditionalInfoStep;