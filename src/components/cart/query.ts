import { gql } from "@/gql"

export const AddCartProduct = gql(/* GraphQL */ `
  mutation AddCartsProduct($productId: Int, $userId: UUID, $quantity: Int) {
    insertIntocartsCollection(
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

export const RemoveCartsProduct = gql(/* GraphQL */ `
  mutation RemoveCartsProduct($cartId: Int) {
    deleteFromcartsCollection(filter: { id: { eq: $cartId } }) {
      affectedCount
    }
  }
`)
export const UpdateCartsProduct = gql(/* GraphQL */ `
  mutation updateCartsCollection($id: Int, $newQuantity: Int) {
    updatecartsCollection(
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
