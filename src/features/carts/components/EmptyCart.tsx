import React from "react";
import Link from "next/link";
import { buttonVariants } from "@/components/ui/button";
import { Icons } from "@/components/layouts/icons";
import { cn } from "@/lib/utils";

function EmptyCart() {
  return (
    <section className="w-full border border-foreground min-h-[450px] flex flex-col gap-5 justify-center items-center">
      <p className="text-muted-foreground text-sm">Your Cart is empty.</p>
      <Link
        href="/shop"
        className={cn(buttonVariants({ size: "lg" }), "font-semibold")}
      >
        <Icons.cart className="mr-3 w-5 h-5" />
        Continue shopping
      </Link>
    </section>
  );
}

export default EmptyCart;
