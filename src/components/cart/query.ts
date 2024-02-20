import { gql } from "@/gql"

export const AddCartProduct = gql(/* GraphQL */ `
  mutation AddCartsProduct($productId: String, $userId: UUID, $quantity: Int) {
    insertIntocartsCollection(
      objects: { user_id: $userId, productId: $productId, quantity: $quantity }
    ) {
      affectedCount
      records {
        id
        user_id
        productId
      }
    }
  }
`)

export const RemoveCartsMutation = gql(/* GraphQL */ `
  mutation RemoveCartsMutation($cartId: String) {
    deleteFromcartsCollection(filter: { id: { eq: $cartId } }) {
      affectedCount
    }
  }
`)
export const UpdateCartsProduct = gql(/* GraphQL */ `
  mutation updateCartsCollection($id: String, $newQuantity: Int) {
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

export const ListCartQuery = gql(/* GraphQL */ `
  query ListCartQuery($userId: UUID) {
    cartsCollection(filter: { user_id: { eq: $userId } }) {
      edges {
        node {
          id
          quantity
          productId
        }
      }
    }
  }
`)
