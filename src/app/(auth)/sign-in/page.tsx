import SignInView from '@/components/modules/auth/SignInPage';
import { auth } from '@/lib/auth';
import { headers } from 'next/headers';
import { redirect } from 'next/navigation';
import React from 'react';


const SignInPage = async () => {

  const session = await auth.api.getSession({
    headers: await headers()
  });

  if (!!session) {
    redirect("/");
  }

  return (

    <SignInView />

  );
};

export default SignInPage;