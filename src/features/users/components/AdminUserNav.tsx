"use client";
import { buttonVariants } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import Link from "next/link";

function AdminUserNav() {
  return (
    <section className="flex justify-end mb-3">
      <Link className={cn(buttonVariants())} href="/admin/users/new">
        Create New User
      </Link>
    </section>
  );
}

export default AdminUserNav;
