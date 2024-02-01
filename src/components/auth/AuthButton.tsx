"use client"

import Link from "next/link"
import React from "react"
import { Icons } from "../icons"
import { useAuth } from "@/lib/providers/AuthProvider"

function AuthButton() {
  const { user } = useAuth()
  return (
    <>
      {user ? (
        <div className="flex items-center text-foreground">
          Hi {user.email},
        </div>
      ) : (
        <Link href="/sign-in" className="flex items-center text-foreground">
          <Icons.user className="h-4 w-4 mr-3" />
          <p className="text-sm">Sign in or Sign up</p>
        </Link>
      )}
    </>
  )
}

export default AuthButton
