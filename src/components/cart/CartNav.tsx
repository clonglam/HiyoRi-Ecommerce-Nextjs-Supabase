"use client"
import { gql } from "@/gql"
import { useMemo } from "react"
import { useAuth } from "@/lib/providers/AuthProvider"
import { User } from "@supabase/auth-helpers-nextjs"
import { useQuery } from "@urql/next"
import CartLink from "./CartLink"
import useCartStore, { calcProductCountStorage } from "./useCartStore"
import SearchProductsGridSkeleton from "../products/SearchProductsGridSkeleton"

export const CartCountQuery = gql(/* GraphQL */ `
  query CartCountQuery($user_id: UUID) {
    cartsCollection(filter: { user_id: { eq: $user_id } }, first: 100) {
      edges {
        __typename
        node {
          product_id
          quantity
        }
      }
    }
  }
`)

function CartNav() {
  const { user } = useAuth()
  if (!user) {
    return <GuestCart />
  } else {
    return <UserCartNav currentUser={user} />
  }
}

const GuestCart = () => {
  const cart = useCartStore((s) => s.cart)

  const productCountStorage = useMemo(
    () => calcProductCountStorage(cart),
    [cart]
  )
  return <CartLink productCount={productCountStorage} />
}

const UserCartNav = ({ currentUser }: { currentUser: User }) => {
  const [{ data, fetching, error }] = useQuery({
    query: CartCountQuery,
    variables: {
      user_id: currentUser.id,
    },
  })

  const carts = data?.cartsCollection

  const productCount = (carts?.edges || []).reduce(
    (acc, cur) => acc + cur.node.quantity,
    0
  )

  return (
    <div>
      {error && <CartLink productCount={0} />}

      {fetching && <CartLink productCount={0} />}

      {carts && <CartLink productCount={productCount} />}
    </div>
  )
}
export default CartNav
