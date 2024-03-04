"use client"

import { useAuth } from "@/providers/AuthProvider"
import { User } from "@supabase/auth-helpers-nextjs"
import { Suspense } from "react"

import { Icons } from "@/components/icons"
import { Button, ButtonProps } from "@/components/ui/button"
import { useToast } from "@/components/ui/use-toast"
import useCartActions from "../hooks/useCartActions"
import useCartStore from "../useCartStore"

interface AddToCartButtonProps extends ButtonProps {
  productId: string
  quantity?: number
  cartId?: string
}

function AddToCartButton({ productId, quantity = 1 }: AddToCartButtonProps) {
  const { user } = useAuth()
  const { toast } = useToast()

  const addProductToCart = useCartStore((s) => s.addProductToCart)

  const guestAddProduct = () => {
    addProductToCart(productId, quantity)
    toast({ title: "Sucess, Added a Product to the Cart." })
  }

  if (!user) {
    return (
      <Button className="rounded-full p-0 h-8 w-8" onClick={guestAddProduct}>
        <Icons.basket className="h-5 w-5 md:h-4 md:w-4" />
      </Button>
    )
  } else {
    return (
      <Suspense>
        <UserCartButton user={user} productId={productId} quantity={quantity} />
      </Suspense>
    )
  }
}

export default AddToCartButton

const UserCartButton = ({
  user,
  quantity,
  productId,
}: {
  user: User
  productId: string
  quantity: number
}) => {
  const { authAddOrUpdateProduct } = useCartActions(user, productId)

  return (
    <Button
      className="rounded-full p-0 h-8 w-8"
      onClick={() => authAddOrUpdateProduct(quantity)}
    >
      <Icons.basket className="h-5 w-5 md:h-4 md:w-4" />
    </Button>
  )
}
