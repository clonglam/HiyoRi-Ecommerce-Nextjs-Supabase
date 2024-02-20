"use client"

import { useAuth } from "@/lib/providers/AuthProvider"
import { useMutation } from "@urql/next"
import { Icons } from "../icons"
import { AddProductToCart } from "../products/AddProductForm"
import { Button, ButtonProps } from "../ui/button"

import { nanoid } from "nanoid"
import { useToast } from "../ui/use-toast"
import { UpdateCartsProduct } from "./query"
import useCartStore from "./useCartStore"

interface AddToCartButtonProps extends ButtonProps {
  productId: string
  quantity?: number
  cartId?: string
}

function AddToCartButton({
  productId,
  quantity = 1,
  cartId,
}: AddToCartButtonProps) {
  const { user } = useAuth()
  const { toast } = useToast()

  const [, addToCart] = useMutation(AddProductToCart)
  const [, updateCart] = useMutation(UpdateCartsProduct)

  const addProductToCart = useCartStore((s) => s.addProductToCart)

  const userAddProduct = async () => {
    console.log("User is Logined so we add Product with mutation")
    try {
      if (!cartId) {
        const res = await addToCart({
          id: nanoid(),
          productId: productId,
          userId: user.id,
          quantity: quantity,
        })

        if (res) toast({ title: "Sucess, Added a Product to the Cart." })
      } else {
        const res = await updateCart({
          id: cartId,
          newQuantity: quantity,
        })

        if (res) toast({ title: "Sucess, Added a Product to the Cart." })
      }
    } catch (err) {
      toast({ title: "Error, Unexpected Error occurred." })
    }
  }

  const guestAddProduct = () => {
    addProductToCart(productId, 1)
    toast({ title: "Sucess, Added a Product to the Cart." })
  }

  return (
    <Button
      className="rounded-full p-0 h-8 w-8"
      onClick={user ? userAddProduct : guestAddProduct}
    >
      <Icons.basket className="h-5 w-5 md:h-4 md:w-4" />
    </Button>
  )
}

export default AddToCartButton
