import { type Metadata } from "next"
import Link from "next/link"

import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import { SignUpForm } from "@/components/auth/SignupForm"
import { Button } from "@/components/ui/button"

export const metadata: Metadata = {
  title: "Sign Up",
  description: "Sign up for an account",
}

export default function SignUpPage() {
  return (
    <section>
      <Card className="border-0 shadow-none">
        <CardHeader className="space-y-1">
          <CardTitle className="text-2xl">Sign up</CardTitle>
          <CardDescription>
            Choose your preferred sign up method
          </CardDescription>
        </CardHeader>
        <CardContent className="grid gap-4">
          <SignUpForm />

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
              <Button className="w-full">Login with Google</Button>
            </div>
          </div>
        </CardContent>
        <CardFooter className="grid gap-4">
          <div className="text-sm text-muted-foreground">
            Already have an account?{" "}
            <Link
              aria-label="Sign in"
              href="/signin"
              className="text-primary underline-offset-4 transition-colors hover:underline"
            >
              Sign in
            </Link>
          </div>
        </CardFooter>
      </Card>
    </section>
  )
}
