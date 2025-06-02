"use client";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { authClient } from "@/lib/auth-client";
import { useState } from "react";

export default function Home() {

  const { data: session } = authClient.useSession();

  const [name, setname] = useState<string>("");
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");

  const onSubmit = () => {
    authClient.signUp.email({
      name,
      email,
      password
    }, {
      onError: () => {
        window.alert("Error signing up");
      },
      onSuccess: () => {
        window.alert("Signed up successfully");
      }
    });
  };

  if (session) {
    return (
      <div className="flex flex-col p-4 gap-y-4">
        <p>Logged in as {session.user.name}</p>
        <Button onClick={() => authClient.signOut()}>
          Signed Out
        </Button>
      </div>
    );
  }

  const onLogin = () => {
    authClient.signIn.email({
      email,
      password
    }, {
      onError: () => {
        window.alert("Error signing in");
      },
      onSuccess: () => {
        window.alert("Signed in successfully");
      }
    });
  };

  return (
    <div className="flex flex-col gap-y-10">
      <div className="p-4 flex flex-col gap-y-4">
        <Input placeholder="name" value={name} onChange={(e) => setname(e.target.value)} />
        <Input placeholder="email" value={email} onChange={(e) => setEmail(e.target.value)} />
        <Input placeholder="password" value={password} onChange={(e) => setPassword(e.target.value)} />

        <Button onClick={onSubmit}>
          hello
        </Button>
      </div>

      <div className="p-4 flex flex-col gap-y-4">
        <Input placeholder="email" value={email} onChange={(e) => setEmail(e.target.value)} />
        <Input placeholder="password" value={password} onChange={(e) => setPassword(e.target.value)} />

        <Button onClick={onLogin}>
          baag bsdk
        </Button>
      </div>
    </div>


  );
}