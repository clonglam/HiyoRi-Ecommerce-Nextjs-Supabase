"use client"
import { Button, buttonVariants } from "@/components/ui/button"
import { cn } from "@/lib/utils"
import Link from "next/link"
import React from "react"

type AdminUserNavProps = {}

function AdminUserNav({}: AdminUserNavProps) {
  return (
    <section className="flex justify-end">
      <Link className={cn(buttonVariants())} href="/admin/users/new">
        Create New User
      </Link>
    </section>
  )
}

export default AdminUserNav
