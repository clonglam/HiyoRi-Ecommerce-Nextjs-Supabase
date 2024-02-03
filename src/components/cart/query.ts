import { gql } from "@/gql"

export const AddCartProduct = gql(/* GraphQL */ `
  mutation AddCartProduct($productId: Int, $userId: UUID, $quantity: Int) {
    insertIntocartCollection(
      objects: { userId: $userId, productId: $productId, quantity: $quantity }
    ) {
      affectedCount
      records {
        id
        userId
        productId
      }
    }
  }
`)

export const RemoveCartProduct = gql(/* GraphQL */ `
  mutation RemoveCartProduct($cartId: Int) {
    deleteFromcartCollection(filter: { id: { eq: $cartId } }) {
      affectedCount
    }
  }
`)
export const UpdateCartProduct = gql(/* GraphQL */ `
  mutation updateCartsCollection($id: Int, $newQuantity: Int) {
    updatecartCollection(
      filter: { id: { eq: $id } }
      set: { quantity: $newQuantity }
    ) {
      affectedCount
      records {
        id
        quantity
      }
    }
  }
`)
