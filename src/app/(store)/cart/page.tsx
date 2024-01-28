import EmptyCart from "@/components/cart/EmptyCart"
import Link from "next/link"

type Props = {}

function CartPage({}: Props) {
  return (
    <div className="min-h-screen container">
      <section className="flex justify-between items-center py-8">
        <h1 className="text-3xl">Your Cart</h1>
        <Link href="/products">Continue shopping</Link>
      </section>

      <EmptyCart />
    </div>
  )
}

export default CartPage
