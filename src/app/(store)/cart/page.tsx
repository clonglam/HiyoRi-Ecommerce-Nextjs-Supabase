import CartSection from "@/features/carts/components/CartSection";
import CartSectionSkeleton from "@/features/carts/components/CartSectionSkeleton";
import { Shell } from "@/components/layouts/Shell";
import {
  RecommendationProducts,
  RecommendationProductsSkeleton,
} from "@/features/products";

import Link from "next/link";
import { Suspense } from "react";

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
  );
}

export default CartPage;
