"use client"
import { useAuth } from "@/lib/providers/AuthProvider"
import UserCartSection from "./UserCartSection"

import GuestCartSection from "./GuestCartSection"
import { Suspense } from "react"
import CartSectionSkeleton from "./CartSectionSkeleton"

function CartSection() {
  const { user } = useAuth()

  return (
    <Suspense fallback={<CartSectionSkeleton />}>
      {user ? <UserCartSection user={user} /> : <GuestCartSection />}
    </Suspense>
  )
}

export default CartSection
