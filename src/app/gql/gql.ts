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
  "\n    query AdminProductsPageQuery {\n      productsCollection(orderBy: [{ created_at: DescNullsLast }]) {\n        edges {\n          node {\n            id\n            ...ProductsTableFragment\n          }\n        }\n      }\n    }\n  ":
    types.AdminProductsPageQueryDocument,
  "\n    query CartPageQuery($first: Int!, $userId: UUID) {\n      recommendations: productsCollection(first: $first) {\n        edges {\n          node {\n            id\n            ...ProductCardFragment\n          }\n        }\n      }\n      cartsCollection(filter: { userId: { eq: $userId } }, first: 15) {\n        __typename\n        edges {\n          node {\n            ...CartItemCardFragment\n          }\n        }\n        pageInfo {\n          hasNextPage\n        }\n      }\n    }\n  ":
    types.CartPageQueryDocument,
  "\n    query CollectionRouteQuery($collectionSlug: String) {\n      collectionsCollection(\n        filter: { slug: { eq: $collectionSlug } }\n        orderBy: [{ order: DescNullsLast }]\n      ) {\n        edges {\n          node {\n            ...CollectionBannerFragment\n            productsCollection(orderBy: [{ created_at: DescNullsLast }]) {\n              pageInfo {\n                hasNextPage\n              }\n              edges {\n                node {\n                  id\n                  ...ProductCardFragment\n                }\n              }\n            }\n          }\n        }\n      }\n    }\n  ":
    types.CollectionRouteQueryDocument,
  "\n    query LandingRouteQuery {\n      products: productsCollection(\n        filter: { featured: { eq: true } }\n        first: 4\n        orderBy: [{ created_at: DescNullsLast }]\n      ) {\n        edges {\n          node {\n            id\n            ...ProductCardFragment\n          }\n        }\n      }\n      collectionScrollCards: collectionsCollection(\n        first: 4\n        orderBy: [{ order: DescNullsLast }]\n      ) {\n        edges {\n          node {\n            id\n            ...CollectionCardFragment\n          }\n        }\n      }\n    }\n  ":
    types.LandingRouteQueryDocument,
  "\n    query ProductDetailPageQuery($productSlug: String) {\n      productsCollection(filter: { slug: { eq: $productSlug } }) {\n        edges {\n          node {\n            id\n            name\n            description\n            rating\n            price\n            totalComments\n            ...ProductImageShowcaseFragment\n            commentsCollection(first: 5) {\n              edges {\n                node {\n                  ...ProductCommentsFragment\n                }\n              }\n            }\n            collections {\n              id\n              label\n              slug\n            }\n          }\n        }\n      }\n      recommendations: productsCollection(\n        filter: { slug: { neq: $productSlug } }\n        first: 5\n      ) {\n        edges {\n          node {\n            id\n            ...ProductCardFragment\n          }\n        }\n      }\n    }\n  ":
    types.ProductDetailPageQueryDocument,
  "\n    query ProductsPageQuery($searchWord: String) {\n      productsCollection(\n        filter: { slug: { eq: $searchWord } }\n        orderBy: [{ created_at: DescNullsLast }]\n      ) {\n        edges {\n          node {\n            id\n            ...ProductCardFragment\n          }\n        }\n      }\n    }\n  ":
    types.ProductsPageQueryDocument,
  "\n  fragment ProductsTableFragment on products {\n    id\n    name\n    description\n    rating\n    slug\n    badge\n    price\n    featuredImage: medias {\n      id\n      key\n      alt\n    }\n    collections {\n      id\n      label\n      slug\n    }\n  }\n":
    types.ProductsTableFragmentFragmentDoc,
  "\n  fragment CartItemCardFragment on carts {\n    id\n    quantity\n    product {\n      id\n      slug\n      name\n      price\n      description\n      featuredImage: medias {\n        id\n        key\n        alt\n      }\n    }\n  }\n":
    types.CartItemCardFragmentFragmentDoc,
  "\n  query FetchCartQuery($userId: UUID, $first: Int, $after: Cursor) {\n    cartsCollection(\n      first: $first\n      filter: { userId: { eq: $userId } }\n      after: $after\n    ) {\n      edges {\n        node {\n          id\n          ...CartItemCardFragment\n        }\n      }\n    }\n  }\n":
    types.FetchCartQueryDocument,
  "\n  mutation AddCartsProduct($productId: Int, $userId: UUID, $quantity: Int) {\n    insertIntocartsCollection(\n      objects: { userId: $userId, productId: $productId, quantity: $quantity }\n    ) {\n      affectedCount\n      records {\n        id\n        userId\n        productId\n      }\n    }\n  }\n":
    types.AddCartsProductDocument,
  "\n  mutation RemoveCartsProduct($cartId: Int) {\n    deleteFromcartsCollection(filter: { id: { eq: $cartId } }) {\n      affectedCount\n    }\n  }\n":
    types.RemoveCartsProductDocument,
  "\n  mutation updateCartsCollection($id: Int, $newQuantity: Int) {\n    updatecartsCollection(\n      filter: { id: { eq: $id } }\n      set: { quantity: $newQuantity }\n    ) {\n      affectedCount\n      records {\n        id\n        quantity\n      }\n    }\n  }\n":
    types.UpdateCartsCollectionDocument,
  "\n  fragment CollectionBannerFragment on collections {\n    id\n    label\n    slug\n    featuredImage: medias {\n      id\n      key\n      alt\n    }\n  }\n":
    types.CollectionBannerFragmentFragmentDoc,
  "\n  fragment CollectionCardFragment on collections {\n    label\n    slug\n    featuredImage: medias {\n      key\n      alt\n    }\n  }\n":
    types.CollectionCardFragmentFragmentDoc,
  "\n  mutation AddProductToCart($productId: Int, $userId: UUID, $quantity: Int) {\n    insertIntocartsCollection(\n      objects: { userId: $userId, productId: $productId, quantity: $quantity }\n    ) {\n      affectedCount\n      records {\n        id\n        userId\n        productId\n      }\n    }\n  }\n":
    types.AddProductToCartDocument,
  "\n  fragment ProductCardFragment on products {\n    id\n    name\n    description\n    rating\n    slug\n    badge\n    price\n    featuredImage: medias {\n      id\n      key\n      alt\n    }\n    collections {\n      id\n      label\n      slug\n    }\n    cartsCollection {\n      edges {\n        node {\n          id\n          productId\n          quantity\n        }\n      }\n    }\n    user_wishlistCollection {\n      edges {\n        node {\n          id\n          productId\n        }\n      }\n    }\n  }\n":
    types.ProductCardFragmentFragmentDoc,
  "\n  fragment ProductCommentsFragment on comments {\n    id\n    comment\n    profile {\n      name\n    }\n  }\n":
    types.ProductCommentsFragmentFragmentDoc,
  "\n  fragment ProductImageShowcaseFragment on products {\n    id\n    featuredImage: medias {\n      id\n      key\n      alt\n    }\n    images: product_mediasCollection(orderBy: [{ priority: DescNullsLast }]) {\n      edges {\n        node {\n          media {\n            id\n            key\n            alt\n          }\n        }\n      }\n    }\n  }\n":
    types.ProductImageShowcaseFragmentFragmentDoc,
  "\n  fragment CarouselImagesFragment on product_mediasEdge {\n    node {\n      id\n      media {\n        key\n        alt\n      }\n    }\n  }\n":
    types.CarouselImagesFragmentFragmentDoc,
  "\n    mutation AddProductToWishList($productId: Int, $userId: UUID) {\n      insertIntouser_wishlistCollection(\n        objects: { userId: $userId, productId: $productId }\n      ) {\n        affectedCount\n        records {\n          id\n          userId\n          productId\n        }\n      }\n    }\n  ":
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
  source: "\n    query AdminProductsPageQuery {\n      productsCollection(orderBy: [{ created_at: DescNullsLast }]) {\n        edges {\n          node {\n            id\n            ...ProductsTableFragment\n          }\n        }\n      }\n    }\n  ",
): (typeof documents)["\n    query AdminProductsPageQuery {\n      productsCollection(orderBy: [{ created_at: DescNullsLast }]) {\n        edges {\n          node {\n            id\n            ...ProductsTableFragment\n          }\n        }\n      }\n    }\n  "];
/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function gql(
  source: "\n    query CartPageQuery($first: Int!, $userId: UUID) {\n      recommendations: productsCollection(first: $first) {\n        edges {\n          node {\n            id\n            ...ProductCardFragment\n          }\n        }\n      }\n      cartsCollection(filter: { userId: { eq: $userId } }, first: 15) {\n        __typename\n        edges {\n          node {\n            ...CartItemCardFragment\n          }\n        }\n        pageInfo {\n          hasNextPage\n        }\n      }\n    }\n  ",
): (typeof documents)["\n    query CartPageQuery($first: Int!, $userId: UUID) {\n      recommendations: productsCollection(first: $first) {\n        edges {\n          node {\n            id\n            ...ProductCardFragment\n          }\n        }\n      }\n      cartsCollection(filter: { userId: { eq: $userId } }, first: 15) {\n        __typename\n        edges {\n          node {\n            ...CartItemCardFragment\n          }\n        }\n        pageInfo {\n          hasNextPage\n        }\n      }\n    }\n  "];
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
  source: "\n    query ProductsPageQuery($searchWord: String) {\n      productsCollection(\n        filter: { slug: { eq: $searchWord } }\n        orderBy: [{ created_at: DescNullsLast }]\n      ) {\n        edges {\n          node {\n            id\n            ...ProductCardFragment\n          }\n        }\n      }\n    }\n  ",
): (typeof documents)["\n    query ProductsPageQuery($searchWord: String) {\n      productsCollection(\n        filter: { slug: { eq: $searchWord } }\n        orderBy: [{ created_at: DescNullsLast }]\n      ) {\n        edges {\n          node {\n            id\n            ...ProductCardFragment\n          }\n        }\n      }\n    }\n  "];
/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function gql(
  source: "\n  fragment ProductsTableFragment on products {\n    id\n    name\n    description\n    rating\n    slug\n    badge\n    price\n    featuredImage: medias {\n      id\n      key\n      alt\n    }\n    collections {\n      id\n      label\n      slug\n    }\n  }\n",
): (typeof documents)["\n  fragment ProductsTableFragment on products {\n    id\n    name\n    description\n    rating\n    slug\n    badge\n    price\n    featuredImage: medias {\n      id\n      key\n      alt\n    }\n    collections {\n      id\n      label\n      slug\n    }\n  }\n"];
/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function gql(
  source: "\n  fragment CartItemCardFragment on carts {\n    id\n    quantity\n    product {\n      id\n      slug\n      name\n      price\n      description\n      featuredImage: medias {\n        id\n        key\n        alt\n      }\n    }\n  }\n",
): (typeof documents)["\n  fragment CartItemCardFragment on carts {\n    id\n    quantity\n    product {\n      id\n      slug\n      name\n      price\n      description\n      featuredImage: medias {\n        id\n        key\n        alt\n      }\n    }\n  }\n"];
/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function gql(
  source: "\n  query FetchCartQuery($userId: UUID, $first: Int, $after: Cursor) {\n    cartsCollection(\n      first: $first\n      filter: { userId: { eq: $userId } }\n      after: $after\n    ) {\n      edges {\n        node {\n          id\n          ...CartItemCardFragment\n        }\n      }\n    }\n  }\n",
): (typeof documents)["\n  query FetchCartQuery($userId: UUID, $first: Int, $after: Cursor) {\n    cartsCollection(\n      first: $first\n      filter: { userId: { eq: $userId } }\n      after: $after\n    ) {\n      edges {\n        node {\n          id\n          ...CartItemCardFragment\n        }\n      }\n    }\n  }\n"];
/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function gql(
  source: "\n  mutation AddCartsProduct($productId: Int, $userId: UUID, $quantity: Int) {\n    insertIntocartsCollection(\n      objects: { userId: $userId, productId: $productId, quantity: $quantity }\n    ) {\n      affectedCount\n      records {\n        id\n        userId\n        productId\n      }\n    }\n  }\n",
): (typeof documents)["\n  mutation AddCartsProduct($productId: Int, $userId: UUID, $quantity: Int) {\n    insertIntocartsCollection(\n      objects: { userId: $userId, productId: $productId, quantity: $quantity }\n    ) {\n      affectedCount\n      records {\n        id\n        userId\n        productId\n      }\n    }\n  }\n"];
/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function gql(
  source: "\n  mutation RemoveCartsProduct($cartId: Int) {\n    deleteFromcartsCollection(filter: { id: { eq: $cartId } }) {\n      affectedCount\n    }\n  }\n",
): (typeof documents)["\n  mutation RemoveCartsProduct($cartId: Int) {\n    deleteFromcartsCollection(filter: { id: { eq: $cartId } }) {\n      affectedCount\n    }\n  }\n"];
/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function gql(
  source: "\n  mutation updateCartsCollection($id: Int, $newQuantity: Int) {\n    updatecartsCollection(\n      filter: { id: { eq: $id } }\n      set: { quantity: $newQuantity }\n    ) {\n      affectedCount\n      records {\n        id\n        quantity\n      }\n    }\n  }\n",
): (typeof documents)["\n  mutation updateCartsCollection($id: Int, $newQuantity: Int) {\n    updatecartsCollection(\n      filter: { id: { eq: $id } }\n      set: { quantity: $newQuantity }\n    ) {\n      affectedCount\n      records {\n        id\n        quantity\n      }\n    }\n  }\n"];
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
  source: "\n  mutation AddProductToCart($productId: Int, $userId: UUID, $quantity: Int) {\n    insertIntocartsCollection(\n      objects: { userId: $userId, productId: $productId, quantity: $quantity }\n    ) {\n      affectedCount\n      records {\n        id\n        userId\n        productId\n      }\n    }\n  }\n",
): (typeof documents)["\n  mutation AddProductToCart($productId: Int, $userId: UUID, $quantity: Int) {\n    insertIntocartsCollection(\n      objects: { userId: $userId, productId: $productId, quantity: $quantity }\n    ) {\n      affectedCount\n      records {\n        id\n        userId\n        productId\n      }\n    }\n  }\n"];
/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function gql(
  source: "\n  fragment ProductCardFragment on products {\n    id\n    name\n    description\n    rating\n    slug\n    badge\n    price\n    featuredImage: medias {\n      id\n      key\n      alt\n    }\n    collections {\n      id\n      label\n      slug\n    }\n    cartsCollection {\n      edges {\n        node {\n          id\n          productId\n          quantity\n        }\n      }\n    }\n    user_wishlistCollection {\n      edges {\n        node {\n          id\n          productId\n        }\n      }\n    }\n  }\n",
): (typeof documents)["\n  fragment ProductCardFragment on products {\n    id\n    name\n    description\n    rating\n    slug\n    badge\n    price\n    featuredImage: medias {\n      id\n      key\n      alt\n    }\n    collections {\n      id\n      label\n      slug\n    }\n    cartsCollection {\n      edges {\n        node {\n          id\n          productId\n          quantity\n        }\n      }\n    }\n    user_wishlistCollection {\n      edges {\n        node {\n          id\n          productId\n        }\n      }\n    }\n  }\n"];
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
  source: "\n    mutation AddProductToWishList($productId: Int, $userId: UUID) {\n      insertIntouser_wishlistCollection(\n        objects: { userId: $userId, productId: $productId }\n      ) {\n        affectedCount\n        records {\n          id\n          userId\n          productId\n        }\n      }\n    }\n  ",
): (typeof documents)["\n    mutation AddProductToWishList($productId: Int, $userId: UUID) {\n      insertIntouser_wishlistCollection(\n        objects: { userId: $userId, productId: $productId }\n      ) {\n        affectedCount\n        records {\n          id\n          userId\n          productId\n        }\n      }\n    }\n  "];

export function gql(source: string) {
  return (documents as any)[source] ?? {};
}

export type DocumentType<TDocumentNode extends DocumentNode<any, any>> =
  TDocumentNode extends DocumentNode<infer TType, any> ? TType : never;
