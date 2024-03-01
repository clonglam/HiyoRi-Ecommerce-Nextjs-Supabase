"use client"
import { useAuth } from "@/lib/providers/AuthProvider"
import { User } from "@supabase/auth-helpers-nextjs"
import { useQuery } from "@urql/next"
import { useMemo } from "react"
import CartLink from "./CartLink"
import { FetchCartQuery } from "./UserCartSection"
import useCartStore, { calcProductCountStorage } from "./useCartStore"

function CartNav() {
  const { user } = useAuth()
  console.log("CartNav rendered")
  return <>{!user ? <GuestCart /> : <UserCartNav currentUser={user} />}</>
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
  const [{ data, fetching, error }, refetch] = useQuery({
    query: FetchCartQuery,
    variables: {
      userId: currentUser.id,
    },
  })

  const carts = data?.cartsCollection
  const productCount = useMemo(
    () => (carts?.edges || []).reduce((acc, cur) => acc + cur.node.quantity, 0),
    [carts.edges]
  )
  // const productCount = (carts?.edges || []).reduce(
  //   (acc, cur) => acc + cur.node.quantity,
  //   0
  // )

  return (
    <div>
      {error && <CartLink productCount={0} />}

      {fetching && <CartLink productCount={0} />}

      {carts && <CartLink productCount={productCount} />}
    </div>
  )
}
export default CartNav
