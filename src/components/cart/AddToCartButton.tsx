"use client"
import React from "react"
import type { CartItem } from "./useCartStore"
import { Button, ButtonProps } from "../ui/button"
import { Icons } from "../icons"
import { nanoid } from "nanoid"
import useCartStore from "./useCartStore"
import { useMutation } from "@urql/next"
import { AddProductToCart } from "../products/AddProductForm"
import { useAuth } from "@/lib/providers/AuthProvider"
import { useToast } from "../ui/use-toast"

interface AddToCartButtonProps extends ButtonProps {
  productId: number
  quantity?: number
}

function AddToCartButton({ productId, quantity = 1 }: AddToCartButtonProps) {
  const addItem = useCartStore((s) => s.addItem)
  const { toast } = useToast()
  const [cartResult, addToCart] = useMutation(AddProductToCart)
  const { user } = useAuth()

  const onClickHandler = () => {
    if (user) {
      console.log("We got a user", user)
      addToCart({
        productId: productId,
        quantity: quantity,
        userId: user.id,
      })
    }

    addItem({
      id: nanoid(),
      productId,
      quantity,
      userId: null,
      createdAt: Date.now().toString(),
    })

    toast({ title: "Sucess, Added a Product to the Cart." })
  }

  return (
    <Button className="rounded-full p-0 h-8 w-8" onClick={onClickHandler}>
      <Icons.basket className="h-5 w-5 md:h-4 md:w-4" />
    </Button>
  )
}

export default AddToCartButton
