'use client';

import SpotlightLogo from '@/components/logo&Icon/SpotlightLogo';
import { Alert, AlertTitle } from '@/components/ui/alert';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Form, FormControl, FormField, FormItem, FormMessage } from '@/components/ui/form';
import { Input } from '@/components/ui/input';
import { zodResolver } from '@hookform/resolvers/zod';
import { OctagonAlertIcon } from 'lucide-react';
import React from 'react';
import { useForm } from 'react-hook-form';
import { z } from 'zod';

type Props = {};

const formSchema = z.object({
  email: z.string().email(),
  password: z.string().min(1, { message: 'Password is required' }),
});

const SignInView = (props: Props) => {

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      email: '',
      password: '',
    }
  });

  return (
    <div className='flex flex-col gap-6'>
      <Card className='overflow-hidden p-0'>
        <CardContent className='grid p-0 md:grid-cols-2'>

          <Form {...form}>
            <form className='p-6 md:p-8'>
              <div className='flex flex-col gap-6'>
                <div className='flex flex-col items-center text-center'>
                  <h1 className='text-2xl font-bold'>
                    Welcome Back
                  </h1>
                  <p className='text-muted-foreground text-balance'>
                    Sign in to your account
                  </p>
                </div>

                <div className='grid gap-3'>
                  <FormField
                    control={form.control}
                    name='email'
                    render={({ field }) => (
                      <FormItem>
                        <FormControl>
                          <Input
                            {...field}
                            type='email'
                            placeholder='Email'
                            className='w-full p-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-purple-500'
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                </div>

                <div className='grid gap-3'>
                  <FormField
                    control={form.control}
                    name='password'
                    render={({ field }) => (
                      <FormItem>
                        <FormControl>
                          <Input
                            {...field}
                            type='password'
                            placeholder='Password'
                            className='w-full p-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-purple-500'
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                </div>

                {true && (
                  <Alert className='bg-destructive/10 border-none'>
                    <OctagonAlertIcon className='h-4 w-4 !text-destructive' />
                    <AlertTitle>Error</AlertTitle>
                  </Alert>
                )}

                <Button type='submit' className='w-full bg-purple-600 hover:bg-purple-700 text-white font-semibold py-2 px-4 rounded-md transition-colors duration-200'>
                  Sign In
                </Button>

              </div>
            </form>
          </Form>

          <div className='bg-radial from-gray-700 to-gray-900 relative hidden md:flex flex-col gap-y-4 items-center justify-center'>
            {/* <SpotlightIcon /> */}
            <SpotlightLogo className='h-[92px] w-[92px]' />
          </div>
        </CardContent>
      </Card>
    </div>

  );
};

export default SignInView;