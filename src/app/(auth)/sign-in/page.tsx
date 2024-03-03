import { type Metadata } from "next";
import Link from "next/link";

import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

import OAuthLoginButtons from "@/features/auth/components/OAuthLoginButtons";
import { SigninForm } from "@/features/auth";
import { Suspense } from "react";

export const metadata: Metadata = {
  title: "HIYORI | Sign In",
  description: "Sign in to HIYORI",
};

export default function SignInPage() {
  return (
    <section>
      <Card className="border-0 shadow-none">
        <CardHeader className="space-y-1">
          <CardTitle className="text-2xl">Sign in</CardTitle>
          <CardDescription>Welcome back</CardDescription>
        </CardHeader>
        <CardContent className="grid gap-4">
          <Suspense
            fallback={
              <div className="bg-zinc-400 animate-pulse max-w-xl w-full h-[360px]" />
            }
          >
            <SigninForm />
          </Suspense>

          <div className="relative mb-10">
            <div className="relative flex justify-center text-xs uppercase">
              <div className="absolute inset-0 flex items-center z-0">
                <span className="w-full border-t" />
              </div>
              <span className="bg-background px-2 text-muted-foreground z-10">
                Or continue with
              </span>
            </div>

            <div className="w-full py-5">
              <OAuthLoginButtons />
            </div>
          </div>
        </CardContent>

        <CardFooter className="flex flex-wrap items-center space-x-2">
          <div className="flex-1 text-sm text-muted-foreground">
            Don&apos;t have an account?{" "}
            <Link
              aria-label="Sign up"
              href="/sign-up"
              className="text-primary underline-offset-4 transition-colors hover:underline"
            >
              Sign up
            </Link>
          </div>
          <Link
            aria-label="Reset password"
            href="/sign-in/reset-password"
            className="text-sm text-primary underline-offset-4 transition-colors hover:underline"
          >
            Reset password
          </Link>
        </CardFooter>
      </Card>
    </section>
  );
}
