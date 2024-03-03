import { gql } from "@/gql";

export const createCartMutation = gql(/* GraphQL */ `
  mutation createCartMutation(
    $productId: String
    $userId: UUID
    $quantity: Int
  ) {
    insertIntocartsCollection(
      objects: { user_id: $userId, product_id: $productId, quantity: $quantity }
    ) {
      affectedCount
      records {
        __typename
        product_id
        user_id
        quantity
        product: products {
          ...CartItemCardFragment
        }
      }
    }
  }
`);

export const RemoveCartsMutation = gql(/* GraphQL */ `
  mutation RemoveCartsMutation($productId: String!, $userId: UUID!) {
    deleteFromcartsCollection(
      filter: { product_id: { eq: $productId }, user_id: { eq: $userId } }
    ) {
      affectedCount
    }
  }
`);

export const updateCartsMutation = gql(/* GraphQL */ `
  mutation UpdateCartsMutation(
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
        __typename
        nodeId
        product_id
        user_id
        quantity
        product: products {
          ...CartItemCardFragment
        }
      }
    }
  }
`);

export const ListCartQuery = gql(/* GraphQL */ `
  query ListCartQuery($userId: UUID) {
    cartsCollection(filter: { user_id: { eq: $userId } }) {
      edges {
        node {
          __typename
          quantity
          user_id
          product_id
        }
      }
    }
  }
`);
