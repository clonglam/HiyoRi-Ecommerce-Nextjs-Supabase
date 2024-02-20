"use client"
import { useMemo } from "react"
import { Icons } from "../icons"
import NavLinkButton from "../layouts/NavLinkButton"
import { Badge } from "../ui/badge"
import useCartStore, { calcProductCount } from "./useCartStore"

function CartNav() {
  const cart = useCartStore((s) => s.cart)
  const productCount = useMemo(() => calcProductCount(cart), [cart])

  return (
    <NavLinkButton href={"/cart"}>
      <div className="relative w-4 h-4">
        <Icons.cart className="w-4 h-4" aria-label="cart" />
        <Badge className="absolute block rounded-full w-4 h-4 p-0 -top-2 -right-2 text-[10px] text-center align-middle">
          {productCount}
        </Badge>
      </div>
    </NavLinkButton>
  )
}

export default CartNav
