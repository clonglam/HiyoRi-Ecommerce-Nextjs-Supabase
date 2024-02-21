import { gql } from "@/gql"

export const AddCartProduct = gql(/* GraphQL */ `
  mutation AddCartsProduct($productId: String, $userId: UUID, $quantity: Int) {
    insertIntocartsCollection(
      objects: { user_id: $userId, product_id: $productId, quantity: $quantity }
    ) {
      affectedCount
      records {
        quantity
        user_id
        product_id
      }
    }
  }
`)

export const RemoveCartsMutation = gql(/* GraphQL */ `
  mutation RemoveCartsMutation($productId: String!, $userId: UUID!) {
    deleteFromcartsCollection(
      filter: { product_id: { eq: $productId }, user_id: { eq: $userId } }
    ) {
      affectedCount
    }
  }
`)

export const UpdateCartsProduct = gql(/* GraphQL */ `
  mutation updateCartsCollection(
    $userId: UUID
    $productId: String
    $newQuantity: Int
  ) {
    updatecartsCollection(
      filter: { product_id: { eq: $productId }, user_id: { eq: $userId } }
      set: { quantity: $newQuantity }
    ) {
      affectedCount
      records {
        user_id
        product_id
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
          quantity
          user_id
          product_id
        }
      }
    }
  }
`)
