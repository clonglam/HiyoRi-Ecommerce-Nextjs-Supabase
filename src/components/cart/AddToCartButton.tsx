"use client"
import React from "react"
import type { CartItem } from "./useCartStore"
import { Button, ButtonProps } from "../ui/button"
import { Icons } from "../icons"
import { nanoid } from "nanoid"
import useCartStore from "./useCartStore"
import { cacheExchange, useClient, useMutation } from "@urql/next"
import { AddProductToCart } from "../products/AddProductForm"
import { useAuth } from "@/lib/providers/AuthProvider"

import { UpdateCartsProduct } from "./query"
import { gql } from "@/gql"
import { carts } from "@/lib/supabase/schema"
import { useToast } from "../ui/use-toast"

interface AddToCartButtonProps extends ButtonProps {
  productId: string
  productCartId?: string
  quantity?: number
}

function AddToCartButton({
  productId,
  productCartId,
  quantity = 1,
}: AddToCartButtonProps) {
  const client = useClient() // Get the urql client
  const addItem = useCartStore((s) => s.addItem)
  const { toast } = useToast()

  const [cartResult, addToCart] = useMutation(AddProductToCart)
  const [updateCartResult, updateCart] = useMutation(UpdateCartsProduct)
  const { user } = useAuth()

  const onClickHandler = () => {
    if (user) {
      if (productCartId) {
        updateCart({ id: productCartId, newQuantity: quantity })
      } else {
        addToCart({
          productId: productId,
          quantity: quantity,
          userId: user.id,
        })
      }
    }

    // client.

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
