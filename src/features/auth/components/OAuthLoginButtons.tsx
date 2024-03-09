"use client";
import { useState } from "react";
import { useRouter } from "next/navigation";
import { getURL } from "@/lib/utils";

import { Icons } from "@/components/layouts/icons";
import { Button } from "@/components/ui/button";
import { Spinner } from "@/components/ui/spinner";
import { createClient } from "@/lib/supabase/client";

function OAuthLoginButtons() {
  const [isLoading, setIsLoading] = useState(false);
  const supabase = createClient();
  const router = useRouter();

  const signWithGoogle = async () => {
    setIsLoading(true);

    const { data, error } = await supabase.auth.signInWithOAuth({
      provider: "google",
      options: {
        redirectTo: getURL(),
      },
    });

    if (error) {
      router.push("/sign-in");
    }

    setIsLoading(false);
  };

  const signWithGithub = async () => {
    setIsLoading(true);

    const { data, error } = await supabase.auth.signInWithOAuth({
      provider: "github",
      options: {
        redirectTo: getURL(),
      },
    });

    setIsLoading(false);
  };
  return (
    <div className="flex flex-col space-y-3">
      <Button onClick={signWithGoogle} disabled={isLoading}>
        {isLoading && (
          <Spinner className="mr-2 h-4 w-4 animate-spin" aria-hidden="true" />
        )}
        <Icons.google className="w-4 h-4 mr-5" />
        Sign in with Google
      </Button>

      <Button onClick={signWithGithub} disabled={isLoading}>
        {isLoading && (
          <Spinner className="mr-2 h-4 w-4 animate-spin" aria-hidden="true" />
        )}
        <Icons.gitHub className="w-4 h-4 mr-5" />
        Sign in with Github
      </Button>
    </div>
  );
}

export default OAuthLoginButtons;
