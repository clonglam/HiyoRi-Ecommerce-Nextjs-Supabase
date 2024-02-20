"use client"
import { useAuth } from "@/lib/providers/AuthProvider"
import { useQuery } from "@urql/next"
import { useMemo } from "react"
import { Icons } from "../icons"
import NavLinkButton from "../layouts/NavLinkButton"
import { Badge } from "../ui/badge"
import { gql } from "@/gql"
import { calcProductCount } from "./UserCartSection"
import useCartStore, { calcProductCountStorage } from "./useCartStore"

export const GetCartCountQuery = gql(/* GraphQL */ `
  query GetCartCountQuery {
    cartsCollection {
      edges {
        node {
          id
          quantity
        }
      }
    }
  }
`)
function CartNav() {
  const { user } = useAuth()
  const cart = useCartStore((s) => s.cart)

  const productCountStorage = useMemo(
    () => calcProductCountStorage(cart),
    [cart]
  )

  // Logined User Cart
  const shouldPause = user === undefined || user === null

  const [{ data, fetching, error }] = useQuery({
    query: GetCartCountQuery,
    pause: shouldPause,
  })

  const cartEdges =
    data && data.cartsCollection ? data.cartsCollection.edges : []

  const productCount = useMemo(() => calcProductCount(cartEdges), [cartEdges])
  return (
    <NavLinkButton href={"/cart"}>
      <div className="relative w-4 h-4">
        <Icons.cart className="w-4 h-4" aria-label="cart" />
        <Badge className="absolute block rounded-full w-4 h-4 p-0 -top-2 -right-2 text-[10px] text-center align-middle">
          {user ? productCount : productCountStorage}
        </Badge>
      </div>
    </NavLinkButton>
  )
}

export default CartNav
