import { gql } from "@/gql";

export const UpdateCollectionMutation = gql(/* GraphQL */ `
  mutation UpdateCollectionMutation(
    $id: String
    $slug: String
    $label: String
    $description: String
    $title: String
    $featuredImageId: String
  ) {
    updatecollectionsCollection(
      filter: { id: { eq: $id } }
      set: {
        slug: $slug
        featured_image_id: $featuredImageId
        label: $label
        description: $description
        title: $title
      }
    ) {
      affectedCount
      records {
        __typename
        nodeId
      }
    }
  }
`);

export const CreateCollectionMutation = gql(/* GraphQL */ `
  mutation CreateCollectionMutation(
    $id: String
    $slug: String
    $label: String
    $description: String
    $title: String
    $featuredImageId: String
  ) {
    insertIntocollectionsCollection(
      objects: {
        id: $id
        slug: $slug
        featured_image_id: $featuredImageId
        label: $label
        description: $description
        title: $title
      }
    ) {
      affectedCount
      records {
        __typename
      }
    }
  }
`);
