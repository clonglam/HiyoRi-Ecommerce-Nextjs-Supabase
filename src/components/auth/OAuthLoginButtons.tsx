"use client"
import React, { useState } from "react"
import { Button } from "../ui/button"
import { Icons } from "../icons"
import { createClient } from "@/lib/supabase/client"
import { useRouter } from "next/navigation"
import { useAuth } from "@/lib/providers/AuthProvider"

function OAuthLoginButtons() {
  const [isLoading, setIsLoading] = useState(false)
  const supabase = createClient()
  const router = useRouter()
  const user = useAuth()

  const signWithGoogle = async () => {
    setIsLoading(true)

    const { data, error } = await supabase.auth.signInWithOAuth({
      provider: "google",
    })

    if (error) {
      router.push("/sign-in")
    }
    console.log("data", data)

    setIsLoading(false)
  }

  const signWithGithub = async () => {
    setIsLoading(true)

    const { data, error } = await supabase.auth.signInWithOAuth({
      provider: "github",
    })

    console.log("data", data)
    console.log("error", error)

    setIsLoading(false)
  }
  return (
    <div className="flex flex-col space-y-3">
      <Button onClick={signWithGoogle} disabled={isLoading}>
        {isLoading && (
          <Icons.spinner
            className="mr-2 h-4 w-4 animate-spin"
            aria-hidden="true"
          />
        )}
        <Icons.google className="w-4 h-4 mr-5" />
        Sign in with Google
      </Button>

      <Button onClick={signWithGithub} disabled={isLoading}>
        {isLoading && (
          <Icons.spinner
            className="mr-2 h-4 w-4 animate-spin"
            aria-hidden="true"
          />
        )}
        <Icons.gitHub className="w-4 h-4 mr-5" />
        Sign in with Github
      </Button>
    </div>
  )
}

export default OAuthLoginButtons
