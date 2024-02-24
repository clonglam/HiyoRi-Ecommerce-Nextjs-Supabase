import CartSection from "@/components/cart/CartSection"
import CartSectionSkeleton from "@/components/cart/CartSectionSkeleton"
import { Shell } from "@/components/layouts/Shell"
import RecommendationProducts from "@/components/products/RecommendationProducts"
import RecommendationProductsSkeleton from "@/components/products/RecommendationProductsSkeleton"
import Link from "next/link"
import { Suspense } from "react"

async function CartPage() {
  return (
    <Shell>
      <section className="flex justify-between items-center py-8">
        <h1 className="text-3xl">Your Cart</h1>
        <Link href="/shop">Continue shopping</Link>
      </section>

      <Suspense fallback={<CartSectionSkeleton />}>
        <CartSection />
      </Suspense>

      <Suspense fallback={<RecommendationProductsSkeleton />}>
        <RecommendationProducts />
      </Suspense>
    </Shell>
  )
}

export default CartPage
