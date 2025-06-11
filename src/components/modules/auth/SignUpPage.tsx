'use client';

import SpotlightLogo from '@/components/icons/SpotlightLogo';
import { Alert, AlertTitle } from '@/components/ui/alert';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Form, FormControl, FormField, FormItem, FormMessage } from '@/components/ui/form';
import { Input } from '@/components/ui/input';
import { zodResolver } from '@hookform/resolvers/zod';
import { OctagonAlertIcon } from 'lucide-react';
import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import { z } from 'zod';
import { authClient } from '@/lib/auth-client';
import { FaGoogle, FaGithub } from "react-icons/fa";
import { useRouter } from 'next/navigation';
import Link from 'next/link';




const formSchema = z.object({
  name: z.string().min(1, { message: 'Name is required' }),
  email: z.string().email(),
  password: z.string().min(1, { message: 'Password is required' }),
  confirmPassword: z.string().min(1, { message: 'Password is required' })
}).refine((value) => value.password === value.confirmPassword, {
  message: "Password don't match",
  path: ['confirmPassword']
});

const SignUpView = () => {

  const router = useRouter();

  const [error, setError] = useState<string | null>(null);
  const [pending, setPending] = useState(false);

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: '',
      email: '',
      password: '',
      confirmPassword: ''
    }
  });

  const onSubmit = (value: z.infer<typeof formSchema>) => {

    setError(null);
    setPending(true);

    authClient.signUp.email(
      {
        name: value.name,
        email: value.email,
        password: value.password,
        callbackURL: '/'
      },
      {
        onSuccess: () => {
          setPending(false);
          router.push('/');
        },
        onError: (err) => {
          setPending(false);
          setError(err.error.message);
        }
      }
    );
  };

  const onSocial = (provider: 'github' | 'google') => {

    setError(null);
    setPending(true);

    authClient.signIn.social(
      {
        provider: provider,
        callbackURL: '/'

      },
      {
        onSuccess: () => {
          setPending(false);
        },
        onError: (err) => {
          setPending(false);
          setError(err.error.message);
        }
      }
    );
  };

  return (
    <div className='flex flex-col gap-6'>
      <Card className='overflow-hidden p-0'>
        <CardContent className='grid p-0 md:grid-cols-2'>

          <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className='p-6 md:p-8'>
              <div className='flex flex-col gap-6'>
                <div className='flex flex-col items-center text-center'>
                  <h1 className='text-2xl font-bold'>
                    Let&apos;s get started
                  </h1>
                  <p className='text-muted-foreground text-balance'>
                    Create your account
                  </p>
                </div>

                <div className='grid gap-3'>
                  <FormField
                    control={form.control}
                    name='name'
                    render={({ field }) => (
                      <FormItem>
                        <FormControl>
                          <Input
                            {...field}
                            type='text'
                            placeholder='Name'
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

                <div className='grid gap-3'>
                  <FormField
                    control={form.control}
                    name='confirmPassword'
                    render={({ field }) => (
                      <FormItem>
                        <FormControl>
                          <Input
                            {...field}
                            type='password'
                            placeholder='Confirm Password'
                            className='w-full p-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-purple-500'
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                </div>

                {!!error && (
                  <Alert className='bg-destructive/10 border-none'>
                    <OctagonAlertIcon className='h-4 w-4 !text-destructive' />
                    <AlertTitle>{error}</AlertTitle>
                  </Alert>
                )}

                <Button
                  disabled={pending}
                  type='submit'
                  className='w-full bg-purple-600 hover:bg-purple-700 text-white font-semibold py-2 px-4 rounded-md transition-colors duration-200'>
                  Sign Up
                </Button>
                <div className='after:border-border relative text-center text-sm after:absolute after:inset-0 after:top-1/2 after:z-0 after:flex after:items-center after:border-t'>
                  <span className='bg-card text-muted-foreground relative z-10 px-2'>
                    Or continue with
                  </span>
                </div>

                <div className='grid grid-cols-2 gap-4'>
                  <Button
                    variant={'outline'}
                    type='button'
                    className='w-full'
                    disabled={pending}
                    onClick={() => onSocial("google")}
                  >
                    <FaGoogle />
                  </Button>
                  <Button
                    variant={'outline'}
                    type='button'
                    className='w-full'
                    disabled={pending}
                    onClick={() => onSocial("github")}
                  >
                    <FaGithub />
                  </Button>
                </div>

                <div className='text-center text-sm text-muted-foreground'>
                  Already have an account?{" "}
                  <Link href={"/sign-in"} className='underline underline-offset-4'>
                    Sign In
                  </Link>
                </div>
              </div>
            </form>
          </Form>

          <div className='bg-radial from-gray-700 to-gray-900 relative hidden md:flex flex-col gap-y-4 items-center justify-center'>
            {/* <SpotlightIcon /> */}
            <SpotlightLogo className='h-[92px] w-[92px]' />
          </div>
        </CardContent>
      </Card>

      <div className='text-muted-foreground *:[a]:hover:text-primary text-center text-xs text-balance *:[a]:underline *:[a]:underline-offset-4'>
        By clicking  continue, you agree to our <Link href="/terms" className='underline underline-offset-4'>Terms of Service</Link> and <Link href="/privacy" className='underline underline-offset-4'>Privacy Policy</Link>.
      </div>
    </div>

  );
};

export default SignUpView;