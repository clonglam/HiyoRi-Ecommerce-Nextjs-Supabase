/* eslint-disable */
import * as types from "./graphql";
import { TypedDocumentNode as DocumentNode } from "@graphql-typed-document-node/core";

/**
 * Map of all GraphQL operations in the project.
 *
 * This map has several performance disadvantages:
 * 1. It is not tree-shakeable, so it will include all operations in the project.
 * 2. It is not minifiable, so the string of a GraphQL query will be multiple times inside the bundle.
 * 3. It does not support dead code elimination, so it will add unused operations.
 *
 * Therefore it is highly recommended to use the babel or swc plugin for production.
 */
const documents = {
  "\n    query AdminProductsPageQuery {\n      productsCollection(orderBy: [{ created_at: DescNullsLast }]) {\n        edges {\n          node {\n            id\n            ...ProductColumnFragment\n          }\n        }\n      }\n    }\n  ":
    types.AdminProductsPageQueryDocument,
  "\n    query CollectionRouteQuery($collectionSlug: String) {\n      collectionsCollection(\n        filter: { slug: { eq: $collectionSlug } }\n        orderBy: [{ order: DescNullsLast }]\n      ) {\n        edges {\n          node {\n            ...CollectionBannerFragment\n            productsCollection(orderBy: [{ created_at: DescNullsLast }]) {\n              pageInfo {\n                hasNextPage\n              }\n              edges {\n                node {\n                  id\n                  ...ProductCardFragment\n                }\n              }\n            }\n          }\n        }\n      }\n    }\n  ":
    types.CollectionRouteQueryDocument,
  "\n  query OrderPageQuery($first: Int!, $userId: UUID) {\n    shop_ordersCollection(\n      first: $first\n      orderBy: [{ created_at: DescNullsLast }]\n      filter: { userId: { eq: $userId } }\n    ) {\n      __typename\n      edges {\n        ...OrdersListFragment\n      }\n    }\n  }\n":
    types.OrderPageQueryDocument,
  "\n    query LandingRouteQuery {\n      products: productsCollection(\n        filter: { featured: { eq: true } }\n        first: 4\n        orderBy: [{ created_at: DescNullsLast }]\n      ) {\n        edges {\n          node {\n            id\n            ...ProductCardFragment\n          }\n        }\n      }\n      collectionScrollCards: collectionsCollection(\n        first: 4\n        orderBy: [{ order: DescNullsLast }]\n      ) {\n        edges {\n          node {\n            id\n            ...CollectionCardFragment\n          }\n        }\n      }\n    }\n  ":
    types.LandingRouteQueryDocument,
  "\n    query ProductDetailPageQuery($productSlug: String) {\n      productsCollection(filter: { slug: { eq: $productSlug } }) {\n        edges {\n          node {\n            id\n            name\n            description\n            rating\n            price\n            totalComments\n            ...ProductImageShowcaseFragment\n            commentsCollection(first: 5) {\n              edges {\n                node {\n                  ...ProductCommentsFragment\n                }\n              }\n            }\n            collections {\n              id\n              label\n              slug\n            }\n          }\n        }\n      }\n      recommendations: productsCollection(\n        filter: { slug: { neq: $productSlug } }\n        first: 5\n      ) {\n        edges {\n          node {\n            id\n            ...ProductCardFragment\n          }\n        }\n      }\n    }\n  ":
    types.ProductDetailPageQueryDocument,
  "\n  query FetchMediaGridQuery($first: Int, $after: Cursor) {\n    mediasCollection(first: $first, after: $after) {\n      __typename\n      edges {\n        ...MediaGridFragment\n      }\n    }\n  }\n":
    types.FetchMediaGridQueryDocument,
  "\n  fragment MediaGridFragment on mediasEdge {\n    cursor\n    node {\n      id\n      alt\n      key\n    }\n  }\n":
    types.MediaGridFragmentFragmentDoc,
  "\n  query FetchMediaQuery($mediaId: String) {\n    mediasCollection(filter: { id: { eq: $mediaId } }) {\n      edges {\n        node {\n          id\n          alt\n          key\n        }\n      }\n    }\n  }\n":
    types.FetchMediaQueryDocument,
  "\n  fragment ProductColumnFragment on products {\n    id\n    name\n    description\n    rating\n    slug\n    badge\n    price\n    badge\n    featured\n    featuredImage: medias {\n      id\n      key\n      alt\n    }\n    collections {\n      id\n      label\n      slug\n    }\n  }\n":
    types.ProductColumnFragmentFragmentDoc,
  "\n  fragment CartItemCardFragment on products {\n    id\n    slug\n    name\n    price\n    description\n    featuredImage: medias {\n      id\n      key\n      alt\n    }\n  }\n":
    types.CartItemCardFragmentFragmentDoc,
  "\n  query GetCartCountQuery {\n    cartsCollection {\n      edges {\n        node {\n          id\n          quantity\n        }\n      }\n    }\n  }\n":
    types.GetCartCountQueryDocument,
  "\n  query FetchGuestCartQuery(\n    $cartItems: [String!]\n    $first: Int\n    $after: Cursor\n  ) {\n    productsCollection(\n      first: $first\n      after: $after\n      filter: { id: { in: $cartItems } }\n    ) {\n      edges {\n        node {\n          id\n          ...CartItemCardFragment\n        }\n      }\n    }\n  }\n":
    types.FetchGuestCartQueryDocument,
  "\n  query FetchCartQuery($userId: UUID, $first: Int, $after: Cursor) {\n    cartsCollection(\n      first: $first\n      filter: { user_id: { eq: $userId } }\n      after: $after\n    ) {\n      edges {\n        node {\n          id\n          quantity\n          product {\n            ...CartItemCardFragment\n          }\n        }\n      }\n    }\n  }\n":
    types.FetchCartQueryDocument,
  "\n  mutation AddCartsProduct($productId: String, $userId: UUID, $quantity: Int) {\n    insertIntocartsCollection(\n      objects: { user_id: $userId, productId: $productId, quantity: $quantity }\n    ) {\n      affectedCount\n      records {\n        id\n        user_id\n        productId\n      }\n    }\n  }\n":
    types.AddCartsProductDocument,
  "\n  mutation RemoveCartsMutation($cartId: String) {\n    deleteFromcartsCollection(filter: { id: { eq: $cartId } }) {\n      affectedCount\n    }\n  }\n":
    types.RemoveCartsMutationDocument,
  "\n  mutation updateCartsCollection($id: String, $newQuantity: Int) {\n    updatecartsCollection(\n      filter: { id: { eq: $id } }\n      set: { quantity: $newQuantity }\n    ) {\n      affectedCount\n      records {\n        id\n        quantity\n      }\n    }\n  }\n":
    types.UpdateCartsCollectionDocument,
  "\n  query ListCartQuery($userId: UUID) {\n    cartsCollection(filter: { user_id: { eq: $userId } }) {\n      edges {\n        node {\n          id\n          quantity\n          productId\n        }\n      }\n    }\n  }\n":
    types.ListCartQueryDocument,
  "\n  fragment CollectionBannerFragment on collections {\n    id\n    label\n    slug\n    featuredImage: medias {\n      id\n      key\n      alt\n    }\n  }\n":
    types.CollectionBannerFragmentFragmentDoc,
  "\n  fragment CollectionCardFragment on collections {\n    label\n    slug\n    featuredImage: medias {\n      key\n      alt\n    }\n  }\n":
    types.CollectionCardFragmentFragmentDoc,
  "\n  fragment OrdersListFragment on shop_ordersEdge {\n    node {\n      id\n      amount_subtotal\n      amount_total\n      payment_status\n      payment_method_types\n      created_at\n      item: order_linesCollection {\n        edges {\n          node {\n            id\n            products {\n              id\n              featured\n              price\n              name\n              slug\n              description\n              featuredImage: medias {\n                id\n                key\n                alt\n              }\n            }\n          }\n        }\n      }\n    }\n  }\n":
    types.OrdersListFragmentFragmentDoc,
  "\n  mutation AddProductToCart(\n    $id: String\n    $productId: String\n    $userId: UUID!\n    $quantity: Int\n  ) {\n    insertIntocartsCollection(\n      objects: {\n        id: $id\n        productId: $productId\n        user_id: $userId\n        quantity: $quantity\n      }\n    ) {\n      affectedCount\n      records {\n        id\n        user_id\n      }\n    }\n  }\n":
    types.AddProductToCartDocument,
  "\n  fragment ProductCardFragment on products {\n    id\n    name\n    description\n    rating\n    slug\n    badge\n    price\n    featuredImage: medias {\n      id\n      key\n      alt\n    }\n    collections {\n      id\n      label\n      slug\n    }\n    cartsCollection {\n      edges {\n        node {\n          id\n          productId\n          quantity\n          user_id\n        }\n      }\n    }\n    user_wishlistCollection {\n      edges {\n        node {\n          id\n          productId\n        }\n      }\n    }\n  }\n":
    types.ProductCardFragmentFragmentDoc,
  "\n  fragment ProductCommentsFragment on comments {\n    id\n    comment\n    profile {\n      name\n    }\n  }\n":
    types.ProductCommentsFragmentFragmentDoc,
  "\n  fragment ProductImageShowcaseFragment on products {\n    id\n    featuredImage: medias {\n      id\n      key\n      alt\n    }\n    images: product_mediasCollection(orderBy: [{ priority: DescNullsLast }]) {\n      edges {\n        node {\n          media {\n            id\n            key\n            alt\n          }\n        }\n      }\n    }\n  }\n":
    types.ProductImageShowcaseFragmentFragmentDoc,
  "\n  fragment CarouselImagesFragment on product_mediasEdge {\n    node {\n      id\n      media {\n        key\n        alt\n      }\n    }\n  }\n":
    types.CarouselImagesFragmentFragmentDoc,
  "\n  query RecomendationProductsQuery($first: Int!) {\n    recommendations: productsCollection(first: $first) {\n      edges {\n        node {\n          id\n          ...ProductCardFragment\n        }\n      }\n    }\n  }\n":
    types.RecomendationProductsQueryDocument,
  "\n  query FetchSearchProductsQuery($productIds: [String!], $first: Int) {\n    productsCollection(first: $first, filter: { id: { in: $productIds } }) {\n      edges {\n        node {\n          id\n          ...ProductCardFragment\n        }\n      }\n    }\n  }\n":
    types.FetchSearchProductsQueryDocument,
  "\n  query ListProductsByFeaturedQuery($first: Int, $after: Cursor) {\n    productsCollection(first: $first, after: $after) {\n      edges {\n        node {\n          id\n          ...ProductCardFragment\n        }\n      }\n    }\n  }\n":
    types.ListProductsByFeaturedQueryDocument,
  "\n    mutation AddProductToWishList($productId: String, $userId: UUID) {\n      insertIntouser_wishlistCollection(\n        objects: { userId: $userId, productId: $productId }\n      ) {\n        affectedCount\n        records {\n          id\n          userId\n          productId\n        }\n      }\n    }\n  ":
    types.AddProductToWishListDocument,
};

/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 *
 *
 * @example
 * ```ts
 * const query = gql(`query GetUser($id: ID!) { user(id: $id) { name } }`);
 * ```
 *
 * The query argument is unknown!
 * Please regenerate the types.
 */
export function gql(source: string): unknown;

/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function gql(
  source: "\n    query AdminProductsPageQuery {\n      productsCollection(orderBy: [{ created_at: DescNullsLast }]) {\n        edges {\n          node {\n            id\n            ...ProductColumnFragment\n          }\n        }\n      }\n    }\n  ",
): (typeof documents)["\n    query AdminProductsPageQuery {\n      productsCollection(orderBy: [{ created_at: DescNullsLast }]) {\n        edges {\n          node {\n            id\n            ...ProductColumnFragment\n          }\n        }\n      }\n    }\n  "];
/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function gql(
  source: "\n    query CollectionRouteQuery($collectionSlug: String) {\n      collectionsCollection(\n        filter: { slug: { eq: $collectionSlug } }\n        orderBy: [{ order: DescNullsLast }]\n      ) {\n        edges {\n          node {\n            ...CollectionBannerFragment\n            productsCollection(orderBy: [{ created_at: DescNullsLast }]) {\n              pageInfo {\n                hasNextPage\n              }\n              edges {\n                node {\n                  id\n                  ...ProductCardFragment\n                }\n              }\n            }\n          }\n        }\n      }\n    }\n  ",
): (typeof documents)["\n    query CollectionRouteQuery($collectionSlug: String) {\n      collectionsCollection(\n        filter: { slug: { eq: $collectionSlug } }\n        orderBy: [{ order: DescNullsLast }]\n      ) {\n        edges {\n          node {\n            ...CollectionBannerFragment\n            productsCollection(orderBy: [{ created_at: DescNullsLast }]) {\n              pageInfo {\n                hasNextPage\n              }\n              edges {\n                node {\n                  id\n                  ...ProductCardFragment\n                }\n              }\n            }\n          }\n        }\n      }\n    }\n  "];
/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function gql(
  source: "\n  query OrderPageQuery($first: Int!, $userId: UUID) {\n    shop_ordersCollection(\n      first: $first\n      orderBy: [{ created_at: DescNullsLast }]\n      filter: { userId: { eq: $userId } }\n    ) {\n      __typename\n      edges {\n        ...OrdersListFragment\n      }\n    }\n  }\n",
): (typeof documents)["\n  query OrderPageQuery($first: Int!, $userId: UUID) {\n    shop_ordersCollection(\n      first: $first\n      orderBy: [{ created_at: DescNullsLast }]\n      filter: { userId: { eq: $userId } }\n    ) {\n      __typename\n      edges {\n        ...OrdersListFragment\n      }\n    }\n  }\n"];
/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function gql(
  source: "\n    query LandingRouteQuery {\n      products: productsCollection(\n        filter: { featured: { eq: true } }\n        first: 4\n        orderBy: [{ created_at: DescNullsLast }]\n      ) {\n        edges {\n          node {\n            id\n            ...ProductCardFragment\n          }\n        }\n      }\n      collectionScrollCards: collectionsCollection(\n        first: 4\n        orderBy: [{ order: DescNullsLast }]\n      ) {\n        edges {\n          node {\n            id\n            ...CollectionCardFragment\n          }\n        }\n      }\n    }\n  ",
): (typeof documents)["\n    query LandingRouteQuery {\n      products: productsCollection(\n        filter: { featured: { eq: true } }\n        first: 4\n        orderBy: [{ created_at: DescNullsLast }]\n      ) {\n        edges {\n          node {\n            id\n            ...ProductCardFragment\n          }\n        }\n      }\n      collectionScrollCards: collectionsCollection(\n        first: 4\n        orderBy: [{ order: DescNullsLast }]\n      ) {\n        edges {\n          node {\n            id\n            ...CollectionCardFragment\n          }\n        }\n      }\n    }\n  "];
/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function gql(
  source: "\n    query ProductDetailPageQuery($productSlug: String) {\n      productsCollection(filter: { slug: { eq: $productSlug } }) {\n        edges {\n          node {\n            id\n            name\n            description\n            rating\n            price\n            totalComments\n            ...ProductImageShowcaseFragment\n            commentsCollection(first: 5) {\n              edges {\n                node {\n                  ...ProductCommentsFragment\n                }\n              }\n            }\n            collections {\n              id\n              label\n              slug\n            }\n          }\n        }\n      }\n      recommendations: productsCollection(\n        filter: { slug: { neq: $productSlug } }\n        first: 5\n      ) {\n        edges {\n          node {\n            id\n            ...ProductCardFragment\n          }\n        }\n      }\n    }\n  ",
): (typeof documents)["\n    query ProductDetailPageQuery($productSlug: String) {\n      productsCollection(filter: { slug: { eq: $productSlug } }) {\n        edges {\n          node {\n            id\n            name\n            description\n            rating\n            price\n            totalComments\n            ...ProductImageShowcaseFragment\n            commentsCollection(first: 5) {\n              edges {\n                node {\n                  ...ProductCommentsFragment\n                }\n              }\n            }\n            collections {\n              id\n              label\n              slug\n            }\n          }\n        }\n      }\n      recommendations: productsCollection(\n        filter: { slug: { neq: $productSlug } }\n        first: 5\n      ) {\n        edges {\n          node {\n            id\n            ...ProductCardFragment\n          }\n        }\n      }\n    }\n  "];
/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function gql(
  source: "\n  query FetchMediaGridQuery($first: Int, $after: Cursor) {\n    mediasCollection(first: $first, after: $after) {\n      __typename\n      edges {\n        ...MediaGridFragment\n      }\n    }\n  }\n",
): (typeof documents)["\n  query FetchMediaGridQuery($first: Int, $after: Cursor) {\n    mediasCollection(first: $first, after: $after) {\n      __typename\n      edges {\n        ...MediaGridFragment\n      }\n    }\n  }\n"];
/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function gql(
  source: "\n  fragment MediaGridFragment on mediasEdge {\n    cursor\n    node {\n      id\n      alt\n      key\n    }\n  }\n",
): (typeof documents)["\n  fragment MediaGridFragment on mediasEdge {\n    cursor\n    node {\n      id\n      alt\n      key\n    }\n  }\n"];
/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function gql(
  source: "\n  query FetchMediaQuery($mediaId: String) {\n    mediasCollection(filter: { id: { eq: $mediaId } }) {\n      edges {\n        node {\n          id\n          alt\n          key\n        }\n      }\n    }\n  }\n",
): (typeof documents)["\n  query FetchMediaQuery($mediaId: String) {\n    mediasCollection(filter: { id: { eq: $mediaId } }) {\n      edges {\n        node {\n          id\n          alt\n          key\n        }\n      }\n    }\n  }\n"];
/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function gql(
  source: "\n  fragment ProductColumnFragment on products {\n    id\n    name\n    description\n    rating\n    slug\n    badge\n    price\n    badge\n    featured\n    featuredImage: medias {\n      id\n      key\n      alt\n    }\n    collections {\n      id\n      label\n      slug\n    }\n  }\n",
): (typeof documents)["\n  fragment ProductColumnFragment on products {\n    id\n    name\n    description\n    rating\n    slug\n    badge\n    price\n    badge\n    featured\n    featuredImage: medias {\n      id\n      key\n      alt\n    }\n    collections {\n      id\n      label\n      slug\n    }\n  }\n"];
/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function gql(
  source: "\n  fragment CartItemCardFragment on products {\n    id\n    slug\n    name\n    price\n    description\n    featuredImage: medias {\n      id\n      key\n      alt\n    }\n  }\n",
): (typeof documents)["\n  fragment CartItemCardFragment on products {\n    id\n    slug\n    name\n    price\n    description\n    featuredImage: medias {\n      id\n      key\n      alt\n    }\n  }\n"];
/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function gql(
  source: "\n  query GetCartCountQuery {\n    cartsCollection {\n      edges {\n        node {\n          id\n          quantity\n        }\n      }\n    }\n  }\n",
): (typeof documents)["\n  query GetCartCountQuery {\n    cartsCollection {\n      edges {\n        node {\n          id\n          quantity\n        }\n      }\n    }\n  }\n"];
/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function gql(
  source: "\n  query FetchGuestCartQuery(\n    $cartItems: [String!]\n    $first: Int\n    $after: Cursor\n  ) {\n    productsCollection(\n      first: $first\n      after: $after\n      filter: { id: { in: $cartItems } }\n    ) {\n      edges {\n        node {\n          id\n          ...CartItemCardFragment\n        }\n      }\n    }\n  }\n",
): (typeof documents)["\n  query FetchGuestCartQuery(\n    $cartItems: [String!]\n    $first: Int\n    $after: Cursor\n  ) {\n    productsCollection(\n      first: $first\n      after: $after\n      filter: { id: { in: $cartItems } }\n    ) {\n      edges {\n        node {\n          id\n          ...CartItemCardFragment\n        }\n      }\n    }\n  }\n"];
/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function gql(
  source: "\n  query FetchCartQuery($userId: UUID, $first: Int, $after: Cursor) {\n    cartsCollection(\n      first: $first\n      filter: { user_id: { eq: $userId } }\n      after: $after\n    ) {\n      edges {\n        node {\n          id\n          quantity\n          product {\n            ...CartItemCardFragment\n          }\n        }\n      }\n    }\n  }\n",
): (typeof documents)["\n  query FetchCartQuery($userId: UUID, $first: Int, $after: Cursor) {\n    cartsCollection(\n      first: $first\n      filter: { user_id: { eq: $userId } }\n      after: $after\n    ) {\n      edges {\n        node {\n          id\n          quantity\n          product {\n            ...CartItemCardFragment\n          }\n        }\n      }\n    }\n  }\n"];
/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function gql(
  source: "\n  mutation AddCartsProduct($productId: String, $userId: UUID, $quantity: Int) {\n    insertIntocartsCollection(\n      objects: { user_id: $userId, productId: $productId, quantity: $quantity }\n    ) {\n      affectedCount\n      records {\n        id\n        user_id\n        productId\n      }\n    }\n  }\n",
): (typeof documents)["\n  mutation AddCartsProduct($productId: String, $userId: UUID, $quantity: Int) {\n    insertIntocartsCollection(\n      objects: { user_id: $userId, productId: $productId, quantity: $quantity }\n    ) {\n      affectedCount\n      records {\n        id\n        user_id\n        productId\n      }\n    }\n  }\n"];
/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function gql(
  source: "\n  mutation RemoveCartsMutation($cartId: String) {\n    deleteFromcartsCollection(filter: { id: { eq: $cartId } }) {\n      affectedCount\n    }\n  }\n",
): (typeof documents)["\n  mutation RemoveCartsMutation($cartId: String) {\n    deleteFromcartsCollection(filter: { id: { eq: $cartId } }) {\n      affectedCount\n    }\n  }\n"];
/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function gql(
  source: "\n  mutation updateCartsCollection($id: String, $newQuantity: Int) {\n    updatecartsCollection(\n      filter: { id: { eq: $id } }\n      set: { quantity: $newQuantity }\n    ) {\n      affectedCount\n      records {\n        id\n        quantity\n      }\n    }\n  }\n",
): (typeof documents)["\n  mutation updateCartsCollection($id: String, $newQuantity: Int) {\n    updatecartsCollection(\n      filter: { id: { eq: $id } }\n      set: { quantity: $newQuantity }\n    ) {\n      affectedCount\n      records {\n        id\n        quantity\n      }\n    }\n  }\n"];
/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function gql(
  source: "\n  query ListCartQuery($userId: UUID) {\n    cartsCollection(filter: { user_id: { eq: $userId } }) {\n      edges {\n        node {\n          id\n          quantity\n          productId\n        }\n      }\n    }\n  }\n",
): (typeof documents)["\n  query ListCartQuery($userId: UUID) {\n    cartsCollection(filter: { user_id: { eq: $userId } }) {\n      edges {\n        node {\n          id\n          quantity\n          productId\n        }\n      }\n    }\n  }\n"];
/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function gql(
  source: "\n  fragment CollectionBannerFragment on collections {\n    id\n    label\n    slug\n    featuredImage: medias {\n      id\n      key\n      alt\n    }\n  }\n",
): (typeof documents)["\n  fragment CollectionBannerFragment on collections {\n    id\n    label\n    slug\n    featuredImage: medias {\n      id\n      key\n      alt\n    }\n  }\n"];
/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function gql(
  source: "\n  fragment CollectionCardFragment on collections {\n    label\n    slug\n    featuredImage: medias {\n      key\n      alt\n    }\n  }\n",
): (typeof documents)["\n  fragment CollectionCardFragment on collections {\n    label\n    slug\n    featuredImage: medias {\n      key\n      alt\n    }\n  }\n"];
/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function gql(
  source: "\n  fragment OrdersListFragment on shop_ordersEdge {\n    node {\n      id\n      amount_subtotal\n      amount_total\n      payment_status\n      payment_method_types\n      created_at\n      item: order_linesCollection {\n        edges {\n          node {\n            id\n            products {\n              id\n              featured\n              price\n              name\n              slug\n              description\n              featuredImage: medias {\n                id\n                key\n                alt\n              }\n            }\n          }\n        }\n      }\n    }\n  }\n",
): (typeof documents)["\n  fragment OrdersListFragment on shop_ordersEdge {\n    node {\n      id\n      amount_subtotal\n      amount_total\n      payment_status\n      payment_method_types\n      created_at\n      item: order_linesCollection {\n        edges {\n          node {\n            id\n            products {\n              id\n              featured\n              price\n              name\n              slug\n              description\n              featuredImage: medias {\n                id\n                key\n                alt\n              }\n            }\n          }\n        }\n      }\n    }\n  }\n"];
/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function gql(
  source: "\n  mutation AddProductToCart(\n    $id: String\n    $productId: String\n    $userId: UUID!\n    $quantity: Int\n  ) {\n    insertIntocartsCollection(\n      objects: {\n        id: $id\n        productId: $productId\n        user_id: $userId\n        quantity: $quantity\n      }\n    ) {\n      affectedCount\n      records {\n        id\n        user_id\n      }\n    }\n  }\n",
): (typeof documents)["\n  mutation AddProductToCart(\n    $id: String\n    $productId: String\n    $userId: UUID!\n    $quantity: Int\n  ) {\n    insertIntocartsCollection(\n      objects: {\n        id: $id\n        productId: $productId\n        user_id: $userId\n        quantity: $quantity\n      }\n    ) {\n      affectedCount\n      records {\n        id\n        user_id\n      }\n    }\n  }\n"];
/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function gql(
  source: "\n  fragment ProductCardFragment on products {\n    id\n    name\n    description\n    rating\n    slug\n    badge\n    price\n    featuredImage: medias {\n      id\n      key\n      alt\n    }\n    collections {\n      id\n      label\n      slug\n    }\n    cartsCollection {\n      edges {\n        node {\n          id\n          productId\n          quantity\n          user_id\n        }\n      }\n    }\n    user_wishlistCollection {\n      edges {\n        node {\n          id\n          productId\n        }\n      }\n    }\n  }\n",
): (typeof documents)["\n  fragment ProductCardFragment on products {\n    id\n    name\n    description\n    rating\n    slug\n    badge\n    price\n    featuredImage: medias {\n      id\n      key\n      alt\n    }\n    collections {\n      id\n      label\n      slug\n    }\n    cartsCollection {\n      edges {\n        node {\n          id\n          productId\n          quantity\n          user_id\n        }\n      }\n    }\n    user_wishlistCollection {\n      edges {\n        node {\n          id\n          productId\n        }\n      }\n    }\n  }\n"];
/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function gql(
  source: "\n  fragment ProductCommentsFragment on comments {\n    id\n    comment\n    profile {\n      name\n    }\n  }\n",
): (typeof documents)["\n  fragment ProductCommentsFragment on comments {\n    id\n    comment\n    profile {\n      name\n    }\n  }\n"];
/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function gql(
  source: "\n  fragment ProductImageShowcaseFragment on products {\n    id\n    featuredImage: medias {\n      id\n      key\n      alt\n    }\n    images: product_mediasCollection(orderBy: [{ priority: DescNullsLast }]) {\n      edges {\n        node {\n          media {\n            id\n            key\n            alt\n          }\n        }\n      }\n    }\n  }\n",
): (typeof documents)["\n  fragment ProductImageShowcaseFragment on products {\n    id\n    featuredImage: medias {\n      id\n      key\n      alt\n    }\n    images: product_mediasCollection(orderBy: [{ priority: DescNullsLast }]) {\n      edges {\n        node {\n          media {\n            id\n            key\n            alt\n          }\n        }\n      }\n    }\n  }\n"];
/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function gql(
  source: "\n  fragment CarouselImagesFragment on product_mediasEdge {\n    node {\n      id\n      media {\n        key\n        alt\n      }\n    }\n  }\n",
): (typeof documents)["\n  fragment CarouselImagesFragment on product_mediasEdge {\n    node {\n      id\n      media {\n        key\n        alt\n      }\n    }\n  }\n"];
/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function gql(
  source: "\n  query RecomendationProductsQuery($first: Int!) {\n    recommendations: productsCollection(first: $first) {\n      edges {\n        node {\n          id\n          ...ProductCardFragment\n        }\n      }\n    }\n  }\n",
): (typeof documents)["\n  query RecomendationProductsQuery($first: Int!) {\n    recommendations: productsCollection(first: $first) {\n      edges {\n        node {\n          id\n          ...ProductCardFragment\n        }\n      }\n    }\n  }\n"];
/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function gql(
  source: "\n  query FetchSearchProductsQuery($productIds: [String!], $first: Int) {\n    productsCollection(first: $first, filter: { id: { in: $productIds } }) {\n      edges {\n        node {\n          id\n          ...ProductCardFragment\n        }\n      }\n    }\n  }\n",
): (typeof documents)["\n  query FetchSearchProductsQuery($productIds: [String!], $first: Int) {\n    productsCollection(first: $first, filter: { id: { in: $productIds } }) {\n      edges {\n        node {\n          id\n          ...ProductCardFragment\n        }\n      }\n    }\n  }\n"];
/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function gql(
  source: "\n  query ListProductsByFeaturedQuery($first: Int, $after: Cursor) {\n    productsCollection(first: $first, after: $after) {\n      edges {\n        node {\n          id\n          ...ProductCardFragment\n        }\n      }\n    }\n  }\n",
): (typeof documents)["\n  query ListProductsByFeaturedQuery($first: Int, $after: Cursor) {\n    productsCollection(first: $first, after: $after) {\n      edges {\n        node {\n          id\n          ...ProductCardFragment\n        }\n      }\n    }\n  }\n"];
/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function gql(
  source: "\n    mutation AddProductToWishList($productId: String, $userId: UUID) {\n      insertIntouser_wishlistCollection(\n        objects: { userId: $userId, productId: $productId }\n      ) {\n        affectedCount\n        records {\n          id\n          userId\n          productId\n        }\n      }\n    }\n  ",
): (typeof documents)["\n    mutation AddProductToWishList($productId: String, $userId: UUID) {\n      insertIntouser_wishlistCollection(\n        objects: { userId: $userId, productId: $productId }\n      ) {\n        affectedCount\n        records {\n          id\n          userId\n          productId\n        }\n      }\n    }\n  "];

export function gql(source: string) {
  return (documents as any)[source] ?? {};
}

export type DocumentType<TDocumentNode extends DocumentNode<any, any>> =
  TDocumentNode extends DocumentNode<infer TType, any> ? TType : never;
