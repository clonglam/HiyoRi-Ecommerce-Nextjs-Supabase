"use client"
import { DocumentType, gql } from "@/gql"

import Image from "next/image"
import React, { useState } from "react"
import { Icons } from "../icons"
import { QuantityInput } from "../products/QuantityInput"
import { Button } from "../ui/button"

import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import { UseQueryExecute, useMutation } from "@urql/next"
import Link from "next/link"
import { RemoveCartsProduct, UpdateCartsProduct } from "./query"
import { keytoUrl } from "@/lib/utils"

export const CartItemCardFragment = gql(/* GraphQL */ `
  fragment CartItemCardFragment on carts {
    id
    quantity
    product {
      id
      slug
      name
      price
      description
      featuredImage: medias {
        id
        key
        alt
      }
    }
  }
`)

type CartItemCardProps = React.ComponentProps<typeof Card> & {
  item: DocumentType<typeof CartItemCardFragment>
  userId?: string
  refetch: UseQueryExecute
}

function CartItemCard({ item, userId, refetch }: CartItemCardProps) {
  const { id, quantity, product } = item
  const [productQuantity, setProductQuantity] = useState(quantity)
  const [_, removeCartProduct] = useMutation(RemoveCartsProduct)
  const [updateCartProductResponse, updateCartProduct] =
    useMutation(UpdateCartsProduct)

  const addOneHandler = () => {
    if (productQuantity < 8) {
      setProductQuantity(productQuantity + 1)
      updateCartProduct({ id, newQuantity: productQuantity + 1 })
    }
  }
  const onChangeHandler = (value: number) => {
    if (value < 8 && value > 1) setProductQuantity(value)
    updateCartProduct({ id, newQuantity: value })
  }

  const minusOneHandler = () => {
    if (quantity > 1) {
      setProductQuantity(productQuantity - 1)
      updateCartProduct({ id, newQuantity: quantity - 1 })
    }
  }

  const removeItemHandler = async () => {
    const response = await removeCartProduct({ cartId: id })
    if (response.data?.deleteFromcartsCollection.affectedCount) {
      refetch({ requestPolicy: "network-only" })
    }
  }
  return (
    <Card className="flex items-center justify-between gap-x-6 gap-y-8 px-5 py-3 shadow-none border-0 border-b">
      <CardContent className="relative p-0 mb-5 overflow-hidden ">
        <Image
          src={keytoUrl(product.featuredImage.key)}
          alt={product.featuredImage.alt}
          width={150}
          height={150}
          className="aspect-square object-cover"
        />
      </CardContent>

      <CardHeader className="p-0 mb-3 md:mb-5 grow max-w-lg">
        <CardTitle>
          <Link href={`/shop/${product.slug}`} className="hover:underline">
            {product.name}
          </Link>
        </CardTitle>

        <CardDescription className="grow line-clamp-2">
          {product.description}
        </CardDescription>

        <QuantityInput
          className=""
          value={productQuantity}
          onChange={onChangeHandler}
          addOneHandler={addOneHandler}
          minusOneHandler={minusOneHandler}
        />
      </CardHeader>

      <CardFooter className="gap-x-2 md:gap-x-5 p-0 ">
        {/* <QuantityInput
          className=""
          value={productQuantity}
          onChange={onChangeHandler}
          addOneHandler={addOneHandler}
          minusOneHandler={minusOneHandler}
        /> */}

        <p>$ {product.price}</p>

        <Button
          className=""
          aria-label="Remove Item"
          variant="ghost"
          onClick={removeItemHandler}
        >
          <Icons.close size={20} />
        </Button>
      </CardFooter>
    </Card>
  )
}

export default CartItemCard
