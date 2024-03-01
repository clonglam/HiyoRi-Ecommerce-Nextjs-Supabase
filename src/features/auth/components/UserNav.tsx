"use client"

import Link from "next/link"
import React from "react"
import { Icons } from "@/components/icons"
import { useAuth } from "@/_actions/providers/AuthProvider"

import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuShortcut,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import supabaseClient from "@/lib/supabase/client"
import { useRouter } from "next/navigation"
import { Button } from "@/components/ui/button"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"

function UserNav() {
  const router = useRouter()
  const { user } = useAuth()

  const logout = () => {
    supabaseClient.auth.signOut()
    router.refresh()
  }

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
                {/* TODO: UPDATE AVATOR IMAGE & NAME */}
                <AvatarImage src="/avatars/01.png" alt="@shadcn" />
                <AvatarFallback>
                  {user.user_metadata.name || "N"}
                </AvatarFallback>
              </Avatar>
            </Button>
          </DropdownMenuTrigger>

          <DropdownMenuContent className="w-56" align="end" forceMount>
            <DropdownMenuLabel className="font-normal">
              <div className="flex flex-col space-y-1">
                <p className="text-sm font-medium leading-none">
                  {user.user_metadata.name || "username"}
                </p>
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
