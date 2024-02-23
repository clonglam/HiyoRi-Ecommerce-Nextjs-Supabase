import React from "react"
import NavLinkButton from "../layouts/NavLinkButton"
import { Icons } from "../icons"
import { Badge } from "../ui/badge"
import { cn } from "@/lib/utils"

type CartLinkProps = { productCount: number }

function CartLink({ productCount }: CartLinkProps) {
  return (
    <NavLinkButton href={"/cart"}>
      <div className="relative w-4 h-4">
        <Icons.cart className="w-4 h-4" aria-label="cart" />
        <Badge
          className={cn(
            "absolute block rounded-full w-4 h-4 p-0 -top-2 -right-2 text-[10px] text-center align-middle transition-all duration-200",
            productCount === 0 ? "scale-0" : "scale-100"
          )}
        >
          {productCount}
        </Badge>
      </div>
    </NavLinkButton>
  )
}

export default CartLink
