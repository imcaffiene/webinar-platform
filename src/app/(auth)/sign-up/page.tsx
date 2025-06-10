import SignUpView from '@/components/modules/auth/SignUpPage';
import { auth } from '@/lib/auth';
import { headers } from 'next/headers';
import { redirect } from 'next/navigation';
import React from 'react';

const SignUpPage = async () => {

  const session = await auth.api.getSession({
    headers: await headers()
  });

  if (!!session) {
    redirect("/");
  }

  return (
    <SignUpView />
  );
};

export default SignUpPage;