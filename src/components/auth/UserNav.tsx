"use client"

import Link from "next/link"
import React from "react"
import { Icons } from "../icons"
import { useAuth } from "@/lib/providers/AuthProvider"
import { Avatar, AvatarFallback, AvatarImage } from "../ui/avatar"
import { Button } from "../ui/button"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuShortcut,
  DropdownMenuTrigger,
} from "../ui/dropdown-menu"
import supabaseClient from "@/lib/supabase/client"
import { useRouter } from "next/navigation"
import { User } from "@supabase/supabase-js"

interface UserNavProps {
  // currentUser: User | null
  // isAdmin: boolean
}

function UserNav({}: UserNavProps) {
  const router = useRouter()
  const { user } = useAuth()

  const logout = () => {
    supabaseClient.auth.signOut()
    router.refresh()
  }

  console.log("user", user)
  return (
    <>
      {user ? (
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button
              variant="ghost"
              className="relative h-8 w-8 rounded-full focus:ring-0 border-0"
            >
              <Avatar className="h-8 w-8 focus:ring-0 border-0">
                <AvatarImage src="/avatars/01.png" alt="@shadcn" />
                <AvatarFallback>SC</AvatarFallback>
              </Avatar>
            </Button>
          </DropdownMenuTrigger>

          <DropdownMenuContent className="w-56" align="end" forceMount>
            <DropdownMenuLabel className="font-normal">
              <div className="flex flex-col space-y-1">
                <p className="text-sm font-medium leading-none">shadcn</p>
                <p className="text-xs leading-none text-muted-foreground">
                  {user.email}
                </p>
              </div>
            </DropdownMenuLabel>
            <DropdownMenuSeparator />
            <DropdownMenuGroup>
              <Link href="/orders">
                <DropdownMenuItem>Orders</DropdownMenuItem>
              </Link>
              <Link href="/wish-list">
                <DropdownMenuItem>Wishlist</DropdownMenuItem>
              </Link>
              <Link href="/cart">
                <DropdownMenuItem>Cart</DropdownMenuItem>
              </Link>
              <Link href="/setting">
                <DropdownMenuItem>Setting</DropdownMenuItem>
              </Link>
            </DropdownMenuGroup>
            <DropdownMenuSeparator />

            {user.role === "ADMIN" && (
              <DropdownMenuGroup>
                <Link href="/admin">
                  <DropdownMenuItem>
                    Admin
                    <DropdownMenuShortcut>⇧⌘P</DropdownMenuShortcut>
                  </DropdownMenuItem>
                </Link>
                <DropdownMenuItem>
                  Billing
                  <DropdownMenuShortcut>⌘B</DropdownMenuShortcut>
                </DropdownMenuItem>
                <DropdownMenuItem>
                  Settings
                  <DropdownMenuShortcut>⌘S</DropdownMenuShortcut>
                </DropdownMenuItem>
                <DropdownMenuItem>New Team</DropdownMenuItem>
              </DropdownMenuGroup>
            )}
            <DropdownMenuSeparator />

            <DropdownMenuItem onClick={logout}>
              Log out
              <DropdownMenuShortcut>⇧⌘Q</DropdownMenuShortcut>
            </DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      ) : (
        <Link href="/sign-in" className="flex items-center text-foreground">
          <Icons.user className="h-4 w-4 mr-3" />
          <p className="text-sm">Sign in or Sign up</p>
        </Link>
      )}
    </>
  )
}

export default UserNav
