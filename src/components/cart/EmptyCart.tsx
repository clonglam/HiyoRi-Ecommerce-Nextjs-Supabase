import Link from "next/link"
import React from "react"
import { buttonVariants } from "../ui/button"
import { cn } from "@/lib/utils"
import { Icons } from "../icons"

function EmptyCart() {
  return (
    <section className="w-full border border-foreground min-h-[450px] flex flex-col gap-5 justify-center items-center">
      <p className="text-muted-foreground text-sm">Your Cart is empty.</p>
      <Link
        href="/products"
        className={cn(buttonVariants({ size: "lg" }), "font-semibold")}
      >
        <Icons.cart className="mr-3 w-5 h-5" />
        Continue shopping
      </Link>
    </section>
  )
}

export default EmptyCart
