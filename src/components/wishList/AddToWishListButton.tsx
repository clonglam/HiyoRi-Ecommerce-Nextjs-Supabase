import React from "react"
import { Button } from "../ui/button"
import { Icons } from "../icons"
import { gql } from "@/gql"

type Props = {}

function AddToWishListButton({}: Props) {
  const AddProductToWishList = gql(/* GraphQL */ `
    mutation AddProductToWishList($productId: String, $userId: UUID) {
      insertIntouser_wishlistCollection(
        objects: { user_id: $userId, product_id: $productId }
      ) {
        affectedCount
        records {
          user_id
          product_id
        }
      }
    }
  `)
  return (
    <Button className="rounded-full p-3" variant="ghost">
      <Icons.heart className="w-4 h-4" />
    </Button>
  )
}

export default AddToWishListButton
