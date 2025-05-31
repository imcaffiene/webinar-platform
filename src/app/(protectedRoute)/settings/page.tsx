import { onAuthenticate } from '@/actions/auth';
import { getStripeOAuthLink } from '@/lib/stripe/utils';
import { LucideAlertCircle, LucideArrowRight, LucideCheckCircle } from 'lucide-react';
import Link from 'next/link';
import { redirect } from 'next/navigation';
import React from 'react';

type Props = {};

const SettingsPage = async (props: Props) => {

  const userExists = await onAuthenticate();
  if (!userExists.user) {
    redirect('/sign-in');
  }

  const isConnected = !!userExists.user.stripeConnectId;

  const stripeLink = getStripeOAuthLink(
    'api/stripe-connect',
    userExists.user.id
  );

  return (
    <div className='w-full mx-auto py-8 px-4'>
      <h1 className='text-2xl font-bold mb-6'>Payment Integration</h1>
      <div className='w-full p-6 border border-input rounded-lg bg-background shadow-sm'>
        <div className='flex items-center mb-4'>
          <div className='h-10 w-10 rounded-full bg-gradient-to-r from-purple-500 to bg-indigo-600 flex items-center justify-center mr-4'>
            <svg
              width={24}
              height={24}
              viewBox='0 0 24 24'
              fill='none'
              xmlns='http://www.w3.org/2000/svg'
            >
              <path d='M12 2L15.09 8.26L22 9.27L17 14.14L18.18 21.02L12 17.77L5.82 21.02L7 14.14L2 9.27L8.91 8.26L12 2Z' fill='white' />
            </svg>
          </div>

          <div>
            <h2 className='text-xl font-semibold text-primary'>Stripe Connenct</h2>
            <p className='text-muted-foreground text-sm'>Connect your stripe account to start accepting payment</p>
          </div>
        </div>

        <div className='my-6 p-4 bg-muted rounded-md'>
          <div className='flex items-start'>
            {isConnected ? (
              <LucideCheckCircle className='h-5 w-5 text-green-500 mt-0.5 mr-3 flex-shrink-0' />
            ) : (
              <LucideAlertCircle className='h-5 w-5 text-amber-500 mt-0.5 mr-3 flex-shrink-0' />
            )}

            <div>
              <p className='font-medium'>
                {isConnected ? 'Stripe is connected' : 'Stripe is not connected'}
              </p>
              <p className='text-sm text-muted-foreground mt-1'>
                {isConnected ? 'You can now accept payments through Stripe.' : 'Please connect your Stripe account to start accepting payments.'}
              </p>
            </div>
          </div>
        </div>

        <div className='flex flex-col sm:flex-row items-center justify-between gap-4'>
          <div className='text-sm text-muted-foreground'>
            {isConnected ? 'You can reconnect any time if you need' : 'You will be redirected to Stripe to connect your account.'}
          </div>

          <Link
            href={stripeLink}
            className={`px-5 py-2.5 rounded-md font-medium text-sm flex items-center gap-2 transition-colors ${isConnected
              ? 'bg-muted hover:bg-muted/80 text-foreground'
              : 'bg-gradient-to-r from-purple-500 to-indigo-600 text-white hover:from-purple-600 hover:to-indigo-700'
              }`}
          >
            {isConnected ? 'Reconnect Stripe' : 'Connect Stripe'}
            <LucideArrowRight size={16} />
          </Link>
        </div>
      </div>
    </div>
  );
};

export default SettingsPage;