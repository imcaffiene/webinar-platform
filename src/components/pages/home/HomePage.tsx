
"use client";

import { Button } from "@/components/ui/button";
import { authClient } from "@/lib/auth-client";
import { useTransitionRouter } from 'next-view-transitions';


export default function HomePage() {

  const router = useTransitionRouter();

  const { data: session } = authClient.useSession();

  if (!session) {
    return (
      <p>
        loading.....
      </p>
    );
  }

  return (

    <div className="p-4 flex flex-col gap-y-4">
      <p>Hi {session.user.name}</p>
      <Button onClick={() => authClient.signOut({
        fetchOptions: {
          onSuccess: () => router.push('/sign-in'),
        }
      })}>
        baag bsdk
      </Button>
    </div>

  );
}