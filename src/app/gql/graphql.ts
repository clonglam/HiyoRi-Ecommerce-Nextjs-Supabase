/* eslint-disable */
import { TypedDocumentNode as DocumentNode } from "@graphql-typed-document-node/core";
export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = {
  [K in keyof T]: T[K];
};
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & {
  [SubKey in K]?: Maybe<T[SubKey]>;
};
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & {
  [SubKey in K]: Maybe<T[SubKey]>;
};
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string;
  String: string;
  Boolean: boolean;
  Int: number;
  Float: number;
  /** A high precision floating point value represented as a string */
  BigFloat: any;
  /** An arbitrary size integer represented as a string */
  BigInt: any;
  /** An opaque string using for tracking a position in results during pagination */
  Cursor: any;
  /** A date wihout time information */
  Date: any;
  /** A date and time */
  Datetime: any;
  /** A Javascript Object Notation value serialized as a string */
  JSON: any;
  /** Any type not handled by the type system */
  Opaque: any;
  /** A time without date information */
  Time: any;
  /** A universally unique identifier */
  UUID: any;
};

/** Boolean expression comparing fields on type "BigFloat" */
export type BigFloatFilter = {
  eq?: InputMaybe<Scalars["BigFloat"]>;
  gt?: InputMaybe<Scalars["BigFloat"]>;
  gte?: InputMaybe<Scalars["BigFloat"]>;
  in?: InputMaybe<Array<Scalars["BigFloat"]>>;
  is?: InputMaybe<FilterIs>;
  lt?: InputMaybe<Scalars["BigFloat"]>;
  lte?: InputMaybe<Scalars["BigFloat"]>;
  neq?: InputMaybe<Scalars["BigFloat"]>;
};

/** Boolean expression comparing fields on type "BigInt" */
export type BigIntFilter = {
  eq?: InputMaybe<Scalars["BigInt"]>;
  gt?: InputMaybe<Scalars["BigInt"]>;
  gte?: InputMaybe<Scalars["BigInt"]>;
  in?: InputMaybe<Array<Scalars["BigInt"]>>;
  is?: InputMaybe<FilterIs>;
  lt?: InputMaybe<Scalars["BigInt"]>;
  lte?: InputMaybe<Scalars["BigInt"]>;
  neq?: InputMaybe<Scalars["BigInt"]>;
};

/** Boolean expression comparing fields on type "Boolean" */
export type BooleanFilter = {
  eq?: InputMaybe<Scalars["Boolean"]>;
  is?: InputMaybe<FilterIs>;
};

/** Boolean expression comparing fields on type "Date" */
export type DateFilter = {
  eq?: InputMaybe<Scalars["Date"]>;
  gt?: InputMaybe<Scalars["Date"]>;
  gte?: InputMaybe<Scalars["Date"]>;
  in?: InputMaybe<Array<Scalars["Date"]>>;
  is?: InputMaybe<FilterIs>;
  lt?: InputMaybe<Scalars["Date"]>;
  lte?: InputMaybe<Scalars["Date"]>;
  neq?: InputMaybe<Scalars["Date"]>;
};

/** Boolean expression comparing fields on type "Datetime" */
export type DatetimeFilter = {
  eq?: InputMaybe<Scalars["Datetime"]>;
  gt?: InputMaybe<Scalars["Datetime"]>;
  gte?: InputMaybe<Scalars["Datetime"]>;
  in?: InputMaybe<Array<Scalars["Datetime"]>>;
  is?: InputMaybe<FilterIs>;
  lt?: InputMaybe<Scalars["Datetime"]>;
  lte?: InputMaybe<Scalars["Datetime"]>;
  neq?: InputMaybe<Scalars["Datetime"]>;
};

export enum FilterIs {
  NotNull = "NOT_NULL",
  Null = "NULL",
}

/** Boolean expression comparing fields on type "Float" */
export type FloatFilter = {
  eq?: InputMaybe<Scalars["Float"]>;
  gt?: InputMaybe<Scalars["Float"]>;
  gte?: InputMaybe<Scalars["Float"]>;
  in?: InputMaybe<Array<Scalars["Float"]>>;
  is?: InputMaybe<FilterIs>;
  lt?: InputMaybe<Scalars["Float"]>;
  lte?: InputMaybe<Scalars["Float"]>;
  neq?: InputMaybe<Scalars["Float"]>;
};

/** Boolean expression comparing fields on type "ID" */
export type IdFilter = {
  eq?: InputMaybe<Scalars["ID"]>;
};

/** Boolean expression comparing fields on type "Int" */
export type IntFilter = {
  eq?: InputMaybe<Scalars["Int"]>;
  gt?: InputMaybe<Scalars["Int"]>;
  gte?: InputMaybe<Scalars["Int"]>;
  in?: InputMaybe<Array<Scalars["Int"]>>;
  is?: InputMaybe<FilterIs>;
  lt?: InputMaybe<Scalars["Int"]>;
  lte?: InputMaybe<Scalars["Int"]>;
  neq?: InputMaybe<Scalars["Int"]>;
};

/** The root type for creating and mutating data */
export type Mutation = {
  __typename?: "Mutation";
  /** Deletes zero or more records from the `address` collection */
  deleteFromaddressCollection: AddressDeleteResponse;
  /** Deletes zero or more records from the `carts` collection */
  deleteFromcartsCollection: CartsDeleteResponse;
  /** Deletes zero or more records from the `collections` collection */
  deleteFromcollectionsCollection: CollectionsDeleteResponse;
  /** Deletes zero or more records from the `comments` collection */
  deleteFromcommentsCollection: CommentsDeleteResponse;
  /** Deletes zero or more records from the `medias` collection */
  deleteFrommediasCollection: MediasDeleteResponse;
  /** Deletes zero or more records from the `orders` collection */
  deleteFromordersCollection: OrdersDeleteResponse;
  /** Deletes zero or more records from the `product_medias` collection */
  deleteFromproduct_mediasCollection: Product_MediasDeleteResponse;
  /** Deletes zero or more records from the `products` collection */
  deleteFromproductsCollection: ProductsDeleteResponse;
  /** Deletes zero or more records from the `profiles` collection */
  deleteFromprofilesCollection: ProfilesDeleteResponse;
  /** Deletes zero or more records from the `user_wishlist` collection */
  deleteFromuser_wishlistCollection: User_WishlistDeleteResponse;
  /** Adds one or more `address` records to the collection */
  insertIntoaddressCollection?: Maybe<AddressInsertResponse>;
  /** Adds one or more `carts` records to the collection */
  insertIntocartsCollection?: Maybe<CartsInsertResponse>;
  /** Adds one or more `collections` records to the collection */
  insertIntocollectionsCollection?: Maybe<CollectionsInsertResponse>;
  /** Adds one or more `comments` records to the collection */
  insertIntocommentsCollection?: Maybe<CommentsInsertResponse>;
  /** Adds one or more `medias` records to the collection */
  insertIntomediasCollection?: Maybe<MediasInsertResponse>;
  /** Adds one or more `orders` records to the collection */
  insertIntoordersCollection?: Maybe<OrdersInsertResponse>;
  /** Adds one or more `product_medias` records to the collection */
  insertIntoproduct_mediasCollection?: Maybe<Product_MediasInsertResponse>;
  /** Adds one or more `products` records to the collection */
  insertIntoproductsCollection?: Maybe<ProductsInsertResponse>;
  /** Adds one or more `profiles` records to the collection */
  insertIntoprofilesCollection?: Maybe<ProfilesInsertResponse>;
  /** Adds one or more `user_wishlist` records to the collection */
  insertIntouser_wishlistCollection?: Maybe<User_WishlistInsertResponse>;
  /** Updates zero or more records in the `address` collection */
  updateaddressCollection: AddressUpdateResponse;
  /** Updates zero or more records in the `carts` collection */
  updatecartsCollection: CartsUpdateResponse;
  /** Updates zero or more records in the `collections` collection */
  updatecollectionsCollection: CollectionsUpdateResponse;
  /** Updates zero or more records in the `comments` collection */
  updatecommentsCollection: CommentsUpdateResponse;
  /** Updates zero or more records in the `medias` collection */
  updatemediasCollection: MediasUpdateResponse;
  /** Updates zero or more records in the `orders` collection */
  updateordersCollection: OrdersUpdateResponse;
  /** Updates zero or more records in the `product_medias` collection */
  updateproduct_mediasCollection: Product_MediasUpdateResponse;
  /** Updates zero or more records in the `products` collection */
  updateproductsCollection: ProductsUpdateResponse;
  /** Updates zero or more records in the `profiles` collection */
  updateprofilesCollection: ProfilesUpdateResponse;
  /** Updates zero or more records in the `user_wishlist` collection */
  updateuser_wishlistCollection: User_WishlistUpdateResponse;
};

/** The root type for creating and mutating data */
export type MutationDeleteFromaddressCollectionArgs = {
  atMost?: Scalars["Int"];
  filter?: InputMaybe<AddressFilter>;
};

/** The root type for creating and mutating data */
export type MutationDeleteFromcartsCollectionArgs = {
  atMost?: Scalars["Int"];
  filter?: InputMaybe<CartsFilter>;
};

/** The root type for creating and mutating data */
export type MutationDeleteFromcollectionsCollectionArgs = {
  atMost?: Scalars["Int"];
  filter?: InputMaybe<CollectionsFilter>;
};

/** The root type for creating and mutating data */
export type MutationDeleteFromcommentsCollectionArgs = {
  atMost?: Scalars["Int"];
  filter?: InputMaybe<CommentsFilter>;
};

/** The root type for creating and mutating data */
export type MutationDeleteFrommediasCollectionArgs = {
  atMost?: Scalars["Int"];
  filter?: InputMaybe<MediasFilter>;
};

/** The root type for creating and mutating data */
export type MutationDeleteFromordersCollectionArgs = {
  atMost?: Scalars["Int"];
  filter?: InputMaybe<OrdersFilter>;
};

/** The root type for creating and mutating data */
export type MutationDeleteFromproduct_MediasCollectionArgs = {
  atMost?: Scalars["Int"];
  filter?: InputMaybe<Product_MediasFilter>;
};

/** The root type for creating and mutating data */
export type MutationDeleteFromproductsCollectionArgs = {
  atMost?: Scalars["Int"];
  filter?: InputMaybe<ProductsFilter>;
};

/** The root type for creating and mutating data */
export type MutationDeleteFromprofilesCollectionArgs = {
  atMost?: Scalars["Int"];
  filter?: InputMaybe<ProfilesFilter>;
};

/** The root type for creating and mutating data */
export type MutationDeleteFromuser_WishlistCollectionArgs = {
  atMost?: Scalars["Int"];
  filter?: InputMaybe<User_WishlistFilter>;
};

/** The root type for creating and mutating data */
export type MutationInsertIntoaddressCollectionArgs = {
  objects: Array<AddressInsertInput>;
};

/** The root type for creating and mutating data */
export type MutationInsertIntocartsCollectionArgs = {
  objects: Array<CartsInsertInput>;
};

/** The root type for creating and mutating data */
export type MutationInsertIntocollectionsCollectionArgs = {
  objects: Array<CollectionsInsertInput>;
};

/** The root type for creating and mutating data */
export type MutationInsertIntocommentsCollectionArgs = {
  objects: Array<CommentsInsertInput>;
};

/** The root type for creating and mutating data */
export type MutationInsertIntomediasCollectionArgs = {
  objects: Array<MediasInsertInput>;
};

/** The root type for creating and mutating data */
export type MutationInsertIntoordersCollectionArgs = {
  objects: Array<OrdersInsertInput>;
};

/** The root type for creating and mutating data */
export type MutationInsertIntoproduct_MediasCollectionArgs = {
  objects: Array<Product_MediasInsertInput>;
};

/** The root type for creating and mutating data */
export type MutationInsertIntoproductsCollectionArgs = {
  objects: Array<ProductsInsertInput>;
};

/** The root type for creating and mutating data */
export type MutationInsertIntoprofilesCollectionArgs = {
  objects: Array<ProfilesInsertInput>;
};

/** The root type for creating and mutating data */
export type MutationInsertIntouser_WishlistCollectionArgs = {
  objects: Array<User_WishlistInsertInput>;
};

/** The root type for creating and mutating data */
export type MutationUpdateaddressCollectionArgs = {
  atMost?: Scalars["Int"];
  filter?: InputMaybe<AddressFilter>;
  set: AddressUpdateInput;
};

/** The root type for creating and mutating data */
export type MutationUpdatecartsCollectionArgs = {
  atMost?: Scalars["Int"];
  filter?: InputMaybe<CartsFilter>;
  set: CartsUpdateInput;
};

/** The root type for creating and mutating data */
export type MutationUpdatecollectionsCollectionArgs = {
  atMost?: Scalars["Int"];
  filter?: InputMaybe<CollectionsFilter>;
  set: CollectionsUpdateInput;
};

/** The root type for creating and mutating data */
export type MutationUpdatecommentsCollectionArgs = {
  atMost?: Scalars["Int"];
  filter?: InputMaybe<CommentsFilter>;
  set: CommentsUpdateInput;
};

/** The root type for creating and mutating data */
export type MutationUpdatemediasCollectionArgs = {
  atMost?: Scalars["Int"];
  filter?: InputMaybe<MediasFilter>;
  set: MediasUpdateInput;
};

/** The root type for creating and mutating data */
export type MutationUpdateordersCollectionArgs = {
  atMost?: Scalars["Int"];
  filter?: InputMaybe<OrdersFilter>;
  set: OrdersUpdateInput;
};

/** The root type for creating and mutating data */
export type MutationUpdateproduct_MediasCollectionArgs = {
  atMost?: Scalars["Int"];
  filter?: InputMaybe<Product_MediasFilter>;
  set: Product_MediasUpdateInput;
};

/** The root type for creating and mutating data */
export type MutationUpdateproductsCollectionArgs = {
  atMost?: Scalars["Int"];
  filter?: InputMaybe<ProductsFilter>;
  set: ProductsUpdateInput;
};

/** The root type for creating and mutating data */
export type MutationUpdateprofilesCollectionArgs = {
  atMost?: Scalars["Int"];
  filter?: InputMaybe<ProfilesFilter>;
  set: ProfilesUpdateInput;
};

/** The root type for creating and mutating data */
export type MutationUpdateuser_WishlistCollectionArgs = {
  atMost?: Scalars["Int"];
  filter?: InputMaybe<User_WishlistFilter>;
  set: User_WishlistUpdateInput;
};

export type Node = {
  /** Retrieves a record by `ID` */
  nodeId: Scalars["ID"];
};

/** Boolean expression comparing fields on type "Opaque" */
export type OpaqueFilter = {
  eq?: InputMaybe<Scalars["Opaque"]>;
  is?: InputMaybe<FilterIs>;
};

/** Defines a per-field sorting order */
export enum OrderByDirection {
  /** Ascending order, nulls first */
  AscNullsFirst = "AscNullsFirst",
  /** Ascending order, nulls last */
  AscNullsLast = "AscNullsLast",
  /** Descending order, nulls first */
  DescNullsFirst = "DescNullsFirst",
  /** Descending order, nulls last */
  DescNullsLast = "DescNullsLast",
}

export type PageInfo = {
  __typename?: "PageInfo";
  endCursor?: Maybe<Scalars["String"]>;
  hasNextPage: Scalars["Boolean"];
  hasPreviousPage: Scalars["Boolean"];
  startCursor?: Maybe<Scalars["String"]>;
};

/** The root type for querying data */
export type Query = {
  __typename?: "Query";
  /** A pagable collection of type `address` */
  addressCollection?: Maybe<AddressConnection>;
  /** A pagable collection of type `carts` */
  cartsCollection?: Maybe<CartsConnection>;
  /** A pagable collection of type `collections` */
  collectionsCollection?: Maybe<CollectionsConnection>;
  /** A pagable collection of type `comments` */
  commentsCollection?: Maybe<CommentsConnection>;
  /** A pagable collection of type `medias` */
  mediasCollection?: Maybe<MediasConnection>;
  /** Retrieve a record by its `ID` */
  node?: Maybe<Node>;
  /** A pagable collection of type `orders` */
  ordersCollection?: Maybe<OrdersConnection>;
  /** A pagable collection of type `product_medias` */
  product_mediasCollection?: Maybe<Product_MediasConnection>;
  /** A pagable collection of type `products` */
  productsCollection?: Maybe<ProductsConnection>;
  /** A pagable collection of type `profiles` */
  profilesCollection?: Maybe<ProfilesConnection>;
  /** A pagable collection of type `user_wishlist` */
  user_wishlistCollection?: Maybe<User_WishlistConnection>;
};

/** The root type for querying data */
export type QueryAddressCollectionArgs = {
  after?: InputMaybe<Scalars["Cursor"]>;
  before?: InputMaybe<Scalars["Cursor"]>;
  filter?: InputMaybe<AddressFilter>;
  first?: InputMaybe<Scalars["Int"]>;
  last?: InputMaybe<Scalars["Int"]>;
  orderBy?: InputMaybe<Array<AddressOrderBy>>;
};

/** The root type for querying data */
export type QueryCartsCollectionArgs = {
  after?: InputMaybe<Scalars["Cursor"]>;
  before?: InputMaybe<Scalars["Cursor"]>;
  filter?: InputMaybe<CartsFilter>;
  first?: InputMaybe<Scalars["Int"]>;
  last?: InputMaybe<Scalars["Int"]>;
  orderBy?: InputMaybe<Array<CartsOrderBy>>;
};

/** The root type for querying data */
export type QueryCollectionsCollectionArgs = {
  after?: InputMaybe<Scalars["Cursor"]>;
  before?: InputMaybe<Scalars["Cursor"]>;
  filter?: InputMaybe<CollectionsFilter>;
  first?: InputMaybe<Scalars["Int"]>;
  last?: InputMaybe<Scalars["Int"]>;
  orderBy?: InputMaybe<Array<CollectionsOrderBy>>;
};

/** The root type for querying data */
export type QueryCommentsCollectionArgs = {
  after?: InputMaybe<Scalars["Cursor"]>;
  before?: InputMaybe<Scalars["Cursor"]>;
  filter?: InputMaybe<CommentsFilter>;
  first?: InputMaybe<Scalars["Int"]>;
  last?: InputMaybe<Scalars["Int"]>;
  orderBy?: InputMaybe<Array<CommentsOrderBy>>;
};

/** The root type for querying data */
export type QueryMediasCollectionArgs = {
  after?: InputMaybe<Scalars["Cursor"]>;
  before?: InputMaybe<Scalars["Cursor"]>;
  filter?: InputMaybe<MediasFilter>;
  first?: InputMaybe<Scalars["Int"]>;
  last?: InputMaybe<Scalars["Int"]>;
  orderBy?: InputMaybe<Array<MediasOrderBy>>;
};

/** The root type for querying data */
export type QueryNodeArgs = {
  nodeId: Scalars["ID"];
};

/** The root type for querying data */
export type QueryOrdersCollectionArgs = {
  after?: InputMaybe<Scalars["Cursor"]>;
  before?: InputMaybe<Scalars["Cursor"]>;
  filter?: InputMaybe<OrdersFilter>;
  first?: InputMaybe<Scalars["Int"]>;
  last?: InputMaybe<Scalars["Int"]>;
  orderBy?: InputMaybe<Array<OrdersOrderBy>>;
};

/** The root type for querying data */
export type QueryProduct_MediasCollectionArgs = {
  after?: InputMaybe<Scalars["Cursor"]>;
  before?: InputMaybe<Scalars["Cursor"]>;
  filter?: InputMaybe<Product_MediasFilter>;
  first?: InputMaybe<Scalars["Int"]>;
  last?: InputMaybe<Scalars["Int"]>;
  orderBy?: InputMaybe<Array<Product_MediasOrderBy>>;
};

/** The root type for querying data */
export type QueryProductsCollectionArgs = {
  after?: InputMaybe<Scalars["Cursor"]>;
  before?: InputMaybe<Scalars["Cursor"]>;
  filter?: InputMaybe<ProductsFilter>;
  first?: InputMaybe<Scalars["Int"]>;
  last?: InputMaybe<Scalars["Int"]>;
  orderBy?: InputMaybe<Array<ProductsOrderBy>>;
};

/** The root type for querying data */
export type QueryProfilesCollectionArgs = {
  after?: InputMaybe<Scalars["Cursor"]>;
  before?: InputMaybe<Scalars["Cursor"]>;
  filter?: InputMaybe<ProfilesFilter>;
  first?: InputMaybe<Scalars["Int"]>;
  last?: InputMaybe<Scalars["Int"]>;
  orderBy?: InputMaybe<Array<ProfilesOrderBy>>;
};

/** The root type for querying data */
export type QueryUser_WishlistCollectionArgs = {
  after?: InputMaybe<Scalars["Cursor"]>;
  before?: InputMaybe<Scalars["Cursor"]>;
  filter?: InputMaybe<User_WishlistFilter>;
  first?: InputMaybe<Scalars["Int"]>;
  last?: InputMaybe<Scalars["Int"]>;
  orderBy?: InputMaybe<Array<User_WishlistOrderBy>>;
};

/** Boolean expression comparing fields on type "String" */
export type StringFilter = {
  eq?: InputMaybe<Scalars["String"]>;
  gt?: InputMaybe<Scalars["String"]>;
  gte?: InputMaybe<Scalars["String"]>;
  ilike?: InputMaybe<Scalars["String"]>;
  in?: InputMaybe<Array<Scalars["String"]>>;
  iregex?: InputMaybe<Scalars["String"]>;
  is?: InputMaybe<FilterIs>;
  like?: InputMaybe<Scalars["String"]>;
  lt?: InputMaybe<Scalars["String"]>;
  lte?: InputMaybe<Scalars["String"]>;
  neq?: InputMaybe<Scalars["String"]>;
  regex?: InputMaybe<Scalars["String"]>;
  startsWith?: InputMaybe<Scalars["String"]>;
};

/** Boolean expression comparing fields on type "Time" */
export type TimeFilter = {
  eq?: InputMaybe<Scalars["Time"]>;
  gt?: InputMaybe<Scalars["Time"]>;
  gte?: InputMaybe<Scalars["Time"]>;
  in?: InputMaybe<Array<Scalars["Time"]>>;
  is?: InputMaybe<FilterIs>;
  lt?: InputMaybe<Scalars["Time"]>;
  lte?: InputMaybe<Scalars["Time"]>;
  neq?: InputMaybe<Scalars["Time"]>;
};

/** Boolean expression comparing fields on type "UUID" */
export type UuidFilter = {
  eq?: InputMaybe<Scalars["UUID"]>;
  in?: InputMaybe<Array<Scalars["UUID"]>>;
  is?: InputMaybe<FilterIs>;
  neq?: InputMaybe<Scalars["UUID"]>;
};

export type Address = Node & {
  __typename?: "address";
  city: Scalars["String"];
  country: Scalars["String"];
  id: Scalars["Int"];
  line1: Scalars["String"];
  line2: Scalars["String"];
  /** Globally Unique Record Identifier */
  nodeId: Scalars["ID"];
  order?: Maybe<Orders>;
  orderId?: Maybe<Scalars["String"]>;
  postal_code: Scalars["String"];
  state: Scalars["String"];
  userProfile?: Maybe<Profiles>;
  userProfileId?: Maybe<Scalars["Int"]>;
};

export type AddressConnection = {
  __typename?: "addressConnection";
  edges: Array<AddressEdge>;
  pageInfo: PageInfo;
};

export type AddressDeleteResponse = {
  __typename?: "addressDeleteResponse";
  /** Count of the records impacted by the mutation */
  affectedCount: Scalars["Int"];
  /** Array of records impacted by the mutation */
  records: Array<Address>;
};

export type AddressEdge = {
  __typename?: "addressEdge";
  cursor: Scalars["String"];
  node: Address;
};

export type AddressFilter = {
  /** Returns true only if all its inner filters are true, otherwise returns false */
  and?: InputMaybe<Array<AddressFilter>>;
  city?: InputMaybe<StringFilter>;
  country?: InputMaybe<StringFilter>;
  id?: InputMaybe<IntFilter>;
  line1?: InputMaybe<StringFilter>;
  line2?: InputMaybe<StringFilter>;
  nodeId?: InputMaybe<IdFilter>;
  /** Negates a filter */
  not?: InputMaybe<AddressFilter>;
  /** Returns true if at least one of its inner filters is true, otherwise returns false */
  or?: InputMaybe<Array<AddressFilter>>;
  orderId?: InputMaybe<StringFilter>;
  postal_code?: InputMaybe<StringFilter>;
  state?: InputMaybe<StringFilter>;
  userProfileId?: InputMaybe<IntFilter>;
};

export type AddressInsertInput = {
  city?: InputMaybe<Scalars["String"]>;
  country?: InputMaybe<Scalars["String"]>;
  line1?: InputMaybe<Scalars["String"]>;
  line2?: InputMaybe<Scalars["String"]>;
  orderId?: InputMaybe<Scalars["String"]>;
  postal_code?: InputMaybe<Scalars["String"]>;
  state?: InputMaybe<Scalars["String"]>;
  userProfileId?: InputMaybe<Scalars["Int"]>;
};

export type AddressInsertResponse = {
  __typename?: "addressInsertResponse";
  /** Count of the records impacted by the mutation */
  affectedCount: Scalars["Int"];
  /** Array of records impacted by the mutation */
  records: Array<Address>;
};

export type AddressOrderBy = {
  city?: InputMaybe<OrderByDirection>;
  country?: InputMaybe<OrderByDirection>;
  id?: InputMaybe<OrderByDirection>;
  line1?: InputMaybe<OrderByDirection>;
  line2?: InputMaybe<OrderByDirection>;
  orderId?: InputMaybe<OrderByDirection>;
  postal_code?: InputMaybe<OrderByDirection>;
  state?: InputMaybe<OrderByDirection>;
  userProfileId?: InputMaybe<OrderByDirection>;
};

export type AddressUpdateInput = {
  city?: InputMaybe<Scalars["String"]>;
  country?: InputMaybe<Scalars["String"]>;
  line1?: InputMaybe<Scalars["String"]>;
  line2?: InputMaybe<Scalars["String"]>;
  orderId?: InputMaybe<Scalars["String"]>;
  postal_code?: InputMaybe<Scalars["String"]>;
  state?: InputMaybe<Scalars["String"]>;
  userProfileId?: InputMaybe<Scalars["Int"]>;
};

export type AddressUpdateResponse = {
  __typename?: "addressUpdateResponse";
  /** Count of the records impacted by the mutation */
  affectedCount: Scalars["Int"];
  /** Array of records impacted by the mutation */
  records: Array<Address>;
};

export type Carts = Node & {
  __typename?: "carts";
  created_at: Scalars["Datetime"];
  id: Scalars["Int"];
  /** Globally Unique Record Identifier */
  nodeId: Scalars["ID"];
  product: Products;
  productId: Scalars["Int"];
  quantity: Scalars["Int"];
  userId: Scalars["UUID"];
};

export type CartsConnection = {
  __typename?: "cartsConnection";
  edges: Array<CartsEdge>;
  pageInfo: PageInfo;
};

export type CartsDeleteResponse = {
  __typename?: "cartsDeleteResponse";
  /** Count of the records impacted by the mutation */
  affectedCount: Scalars["Int"];
  /** Array of records impacted by the mutation */
  records: Array<Carts>;
};

export type CartsEdge = {
  __typename?: "cartsEdge";
  cursor: Scalars["String"];
  node: Carts;
};

export type CartsFilter = {
  /** Returns true only if all its inner filters are true, otherwise returns false */
  and?: InputMaybe<Array<CartsFilter>>;
  created_at?: InputMaybe<DatetimeFilter>;
  id?: InputMaybe<IntFilter>;
  nodeId?: InputMaybe<IdFilter>;
  /** Negates a filter */
  not?: InputMaybe<CartsFilter>;
  /** Returns true if at least one of its inner filters is true, otherwise returns false */
  or?: InputMaybe<Array<CartsFilter>>;
  productId?: InputMaybe<IntFilter>;
  quantity?: InputMaybe<IntFilter>;
  userId?: InputMaybe<UuidFilter>;
};

export type CartsInsertInput = {
  created_at?: InputMaybe<Scalars["Datetime"]>;
  productId?: InputMaybe<Scalars["Int"]>;
  quantity?: InputMaybe<Scalars["Int"]>;
  userId?: InputMaybe<Scalars["UUID"]>;
};

export type CartsInsertResponse = {
  __typename?: "cartsInsertResponse";
  /** Count of the records impacted by the mutation */
  affectedCount: Scalars["Int"];
  /** Array of records impacted by the mutation */
  records: Array<Carts>;
};

export type CartsOrderBy = {
  created_at?: InputMaybe<OrderByDirection>;
  id?: InputMaybe<OrderByDirection>;
  productId?: InputMaybe<OrderByDirection>;
  quantity?: InputMaybe<OrderByDirection>;
  userId?: InputMaybe<OrderByDirection>;
};

export type CartsUpdateInput = {
  created_at?: InputMaybe<Scalars["Datetime"]>;
  productId?: InputMaybe<Scalars["Int"]>;
  quantity?: InputMaybe<Scalars["Int"]>;
  userId?: InputMaybe<Scalars["UUID"]>;
};

export type CartsUpdateResponse = {
  __typename?: "cartsUpdateResponse";
  /** Count of the records impacted by the mutation */
  affectedCount: Scalars["Int"];
  /** Array of records impacted by the mutation */
  records: Array<Carts>;
};

export type Collections = Node & {
  __typename?: "collections";
  featured_image_id: Scalars["Int"];
  id: Scalars["Int"];
  label: Scalars["String"];
  medias: Medias;
  /** Globally Unique Record Identifier */
  nodeId: Scalars["ID"];
  order?: Maybe<Scalars["Int"]>;
  productsCollection?: Maybe<ProductsConnection>;
  slug: Scalars["String"];
};

export type CollectionsProductsCollectionArgs = {
  after?: InputMaybe<Scalars["Cursor"]>;
  before?: InputMaybe<Scalars["Cursor"]>;
  filter?: InputMaybe<ProductsFilter>;
  first?: InputMaybe<Scalars["Int"]>;
  last?: InputMaybe<Scalars["Int"]>;
  orderBy?: InputMaybe<Array<ProductsOrderBy>>;
};

export type CollectionsConnection = {
  __typename?: "collectionsConnection";
  edges: Array<CollectionsEdge>;
  pageInfo: PageInfo;
};

export type CollectionsDeleteResponse = {
  __typename?: "collectionsDeleteResponse";
  /** Count of the records impacted by the mutation */
  affectedCount: Scalars["Int"];
  /** Array of records impacted by the mutation */
  records: Array<Collections>;
};

export type CollectionsEdge = {
  __typename?: "collectionsEdge";
  cursor: Scalars["String"];
  node: Collections;
};

export type CollectionsFilter = {
  /** Returns true only if all its inner filters are true, otherwise returns false */
  and?: InputMaybe<Array<CollectionsFilter>>;
  featured_image_id?: InputMaybe<IntFilter>;
  id?: InputMaybe<IntFilter>;
  label?: InputMaybe<StringFilter>;
  nodeId?: InputMaybe<IdFilter>;
  /** Negates a filter */
  not?: InputMaybe<CollectionsFilter>;
  /** Returns true if at least one of its inner filters is true, otherwise returns false */
  or?: InputMaybe<Array<CollectionsFilter>>;
  order?: InputMaybe<IntFilter>;
  slug?: InputMaybe<StringFilter>;
};

export type CollectionsInsertInput = {
  featured_image_id?: InputMaybe<Scalars["Int"]>;
  label?: InputMaybe<Scalars["String"]>;
  order?: InputMaybe<Scalars["Int"]>;
  slug?: InputMaybe<Scalars["String"]>;
};

export type CollectionsInsertResponse = {
  __typename?: "collectionsInsertResponse";
  /** Count of the records impacted by the mutation */
  affectedCount: Scalars["Int"];
  /** Array of records impacted by the mutation */
  records: Array<Collections>;
};

export type CollectionsOrderBy = {
  featured_image_id?: InputMaybe<OrderByDirection>;
  id?: InputMaybe<OrderByDirection>;
  label?: InputMaybe<OrderByDirection>;
  order?: InputMaybe<OrderByDirection>;
  slug?: InputMaybe<OrderByDirection>;
};

export type CollectionsUpdateInput = {
  featured_image_id?: InputMaybe<Scalars["Int"]>;
  label?: InputMaybe<Scalars["String"]>;
  order?: InputMaybe<Scalars["Int"]>;
  slug?: InputMaybe<Scalars["String"]>;
};

export type CollectionsUpdateResponse = {
  __typename?: "collectionsUpdateResponse";
  /** Count of the records impacted by the mutation */
  affectedCount: Scalars["Int"];
  /** Array of records impacted by the mutation */
  records: Array<Collections>;
};

export type Comments = Node & {
  __typename?: "comments";
  comment: Scalars["String"];
  created_at: Scalars["Datetime"];
  id: Scalars["Int"];
  /** Globally Unique Record Identifier */
  nodeId: Scalars["ID"];
  product: Products;
  productId: Scalars["Int"];
  profile: Profiles;
  profileId: Scalars["Int"];
};

export type CommentsConnection = {
  __typename?: "commentsConnection";
  edges: Array<CommentsEdge>;
  pageInfo: PageInfo;
};

export type CommentsDeleteResponse = {
  __typename?: "commentsDeleteResponse";
  /** Count of the records impacted by the mutation */
  affectedCount: Scalars["Int"];
  /** Array of records impacted by the mutation */
  records: Array<Comments>;
};

export type CommentsEdge = {
  __typename?: "commentsEdge";
  cursor: Scalars["String"];
  node: Comments;
};

export type CommentsFilter = {
  /** Returns true only if all its inner filters are true, otherwise returns false */
  and?: InputMaybe<Array<CommentsFilter>>;
  comment?: InputMaybe<StringFilter>;
  created_at?: InputMaybe<DatetimeFilter>;
  id?: InputMaybe<IntFilter>;
  nodeId?: InputMaybe<IdFilter>;
  /** Negates a filter */
  not?: InputMaybe<CommentsFilter>;
  /** Returns true if at least one of its inner filters is true, otherwise returns false */
  or?: InputMaybe<Array<CommentsFilter>>;
  productId?: InputMaybe<IntFilter>;
  profileId?: InputMaybe<IntFilter>;
};

export type CommentsInsertInput = {
  comment?: InputMaybe<Scalars["String"]>;
  created_at?: InputMaybe<Scalars["Datetime"]>;
  productId?: InputMaybe<Scalars["Int"]>;
  profileId?: InputMaybe<Scalars["Int"]>;
};

export type CommentsInsertResponse = {
  __typename?: "commentsInsertResponse";
  /** Count of the records impacted by the mutation */
  affectedCount: Scalars["Int"];
  /** Array of records impacted by the mutation */
  records: Array<Comments>;
};

export type CommentsOrderBy = {
  comment?: InputMaybe<OrderByDirection>;
  created_at?: InputMaybe<OrderByDirection>;
  id?: InputMaybe<OrderByDirection>;
  productId?: InputMaybe<OrderByDirection>;
  profileId?: InputMaybe<OrderByDirection>;
};

export type CommentsUpdateInput = {
  comment?: InputMaybe<Scalars["String"]>;
  created_at?: InputMaybe<Scalars["Datetime"]>;
  productId?: InputMaybe<Scalars["Int"]>;
  profileId?: InputMaybe<Scalars["Int"]>;
};

export type CommentsUpdateResponse = {
  __typename?: "commentsUpdateResponse";
  /** Count of the records impacted by the mutation */
  affectedCount: Scalars["Int"];
  /** Array of records impacted by the mutation */
  records: Array<Comments>;
};

export type Medias = Node & {
  __typename?: "medias";
  alt: Scalars["String"];
  collectionsCollection?: Maybe<CollectionsConnection>;
  created_at?: Maybe<Scalars["Datetime"]>;
  id: Scalars["Int"];
  key: Scalars["String"];
  /** Globally Unique Record Identifier */
  nodeId: Scalars["ID"];
  product_mediasCollection?: Maybe<Product_MediasConnection>;
  productsCollection?: Maybe<ProductsConnection>;
  updated_at?: Maybe<Scalars["Datetime"]>;
};

export type MediasCollectionsCollectionArgs = {
  after?: InputMaybe<Scalars["Cursor"]>;
  before?: InputMaybe<Scalars["Cursor"]>;
  filter?: InputMaybe<CollectionsFilter>;
  first?: InputMaybe<Scalars["Int"]>;
  last?: InputMaybe<Scalars["Int"]>;
  orderBy?: InputMaybe<Array<CollectionsOrderBy>>;
};

export type MediasProduct_MediasCollectionArgs = {
  after?: InputMaybe<Scalars["Cursor"]>;
  before?: InputMaybe<Scalars["Cursor"]>;
  filter?: InputMaybe<Product_MediasFilter>;
  first?: InputMaybe<Scalars["Int"]>;
  last?: InputMaybe<Scalars["Int"]>;
  orderBy?: InputMaybe<Array<Product_MediasOrderBy>>;
};

export type MediasProductsCollectionArgs = {
  after?: InputMaybe<Scalars["Cursor"]>;
  before?: InputMaybe<Scalars["Cursor"]>;
  filter?: InputMaybe<ProductsFilter>;
  first?: InputMaybe<Scalars["Int"]>;
  last?: InputMaybe<Scalars["Int"]>;
  orderBy?: InputMaybe<Array<ProductsOrderBy>>;
};

export type MediasConnection = {
  __typename?: "mediasConnection";
  edges: Array<MediasEdge>;
  pageInfo: PageInfo;
};

export type MediasDeleteResponse = {
  __typename?: "mediasDeleteResponse";
  /** Count of the records impacted by the mutation */
  affectedCount: Scalars["Int"];
  /** Array of records impacted by the mutation */
  records: Array<Medias>;
};

export type MediasEdge = {
  __typename?: "mediasEdge";
  cursor: Scalars["String"];
  node: Medias;
};

export type MediasFilter = {
  alt?: InputMaybe<StringFilter>;
  /** Returns true only if all its inner filters are true, otherwise returns false */
  and?: InputMaybe<Array<MediasFilter>>;
  created_at?: InputMaybe<DatetimeFilter>;
  id?: InputMaybe<IntFilter>;
  key?: InputMaybe<StringFilter>;
  nodeId?: InputMaybe<IdFilter>;
  /** Negates a filter */
  not?: InputMaybe<MediasFilter>;
  /** Returns true if at least one of its inner filters is true, otherwise returns false */
  or?: InputMaybe<Array<MediasFilter>>;
  updated_at?: InputMaybe<DatetimeFilter>;
};

export type MediasInsertInput = {
  alt?: InputMaybe<Scalars["String"]>;
  created_at?: InputMaybe<Scalars["Datetime"]>;
  key?: InputMaybe<Scalars["String"]>;
  updated_at?: InputMaybe<Scalars["Datetime"]>;
};

export type MediasInsertResponse = {
  __typename?: "mediasInsertResponse";
  /** Count of the records impacted by the mutation */
  affectedCount: Scalars["Int"];
  /** Array of records impacted by the mutation */
  records: Array<Medias>;
};

export type MediasOrderBy = {
  alt?: InputMaybe<OrderByDirection>;
  created_at?: InputMaybe<OrderByDirection>;
  id?: InputMaybe<OrderByDirection>;
  key?: InputMaybe<OrderByDirection>;
  updated_at?: InputMaybe<OrderByDirection>;
};

export type MediasUpdateInput = {
  alt?: InputMaybe<Scalars["String"]>;
  created_at?: InputMaybe<Scalars["Datetime"]>;
  key?: InputMaybe<Scalars["String"]>;
  updated_at?: InputMaybe<Scalars["Datetime"]>;
};

export type MediasUpdateResponse = {
  __typename?: "mediasUpdateResponse";
  /** Count of the records impacted by the mutation */
  affectedCount: Scalars["Int"];
  /** Array of records impacted by the mutation */
  records: Array<Medias>;
};

export type Orders = Node & {
  __typename?: "orders";
  addressCollection?: Maybe<AddressConnection>;
  amount_subtotal: Scalars["Int"];
  amount_total: Scalars["Int"];
  created_at: Scalars["Datetime"];
  email?: Maybe<Scalars["String"]>;
  id: Scalars["String"];
  name: Scalars["String"];
  /** Globally Unique Record Identifier */
  nodeId: Scalars["ID"];
  payment_method_types: Scalars["String"];
  payment_status: Scalars["String"];
  userId: Scalars["UUID"];
};

export type OrdersAddressCollectionArgs = {
  after?: InputMaybe<Scalars["Cursor"]>;
  before?: InputMaybe<Scalars["Cursor"]>;
  filter?: InputMaybe<AddressFilter>;
  first?: InputMaybe<Scalars["Int"]>;
  last?: InputMaybe<Scalars["Int"]>;
  orderBy?: InputMaybe<Array<AddressOrderBy>>;
};

export type OrdersConnection = {
  __typename?: "ordersConnection";
  edges: Array<OrdersEdge>;
  pageInfo: PageInfo;
};

export type OrdersDeleteResponse = {
  __typename?: "ordersDeleteResponse";
  /** Count of the records impacted by the mutation */
  affectedCount: Scalars["Int"];
  /** Array of records impacted by the mutation */
  records: Array<Orders>;
};

export type OrdersEdge = {
  __typename?: "ordersEdge";
  cursor: Scalars["String"];
  node: Orders;
};

export type OrdersFilter = {
  amount_subtotal?: InputMaybe<IntFilter>;
  amount_total?: InputMaybe<IntFilter>;
  /** Returns true only if all its inner filters are true, otherwise returns false */
  and?: InputMaybe<Array<OrdersFilter>>;
  created_at?: InputMaybe<DatetimeFilter>;
  email?: InputMaybe<StringFilter>;
  id?: InputMaybe<StringFilter>;
  name?: InputMaybe<StringFilter>;
  nodeId?: InputMaybe<IdFilter>;
  /** Negates a filter */
  not?: InputMaybe<OrdersFilter>;
  /** Returns true if at least one of its inner filters is true, otherwise returns false */
  or?: InputMaybe<Array<OrdersFilter>>;
  payment_method_types?: InputMaybe<StringFilter>;
  payment_status?: InputMaybe<StringFilter>;
  userId?: InputMaybe<UuidFilter>;
};

export type OrdersInsertInput = {
  amount_subtotal?: InputMaybe<Scalars["Int"]>;
  amount_total?: InputMaybe<Scalars["Int"]>;
  created_at?: InputMaybe<Scalars["Datetime"]>;
  email?: InputMaybe<Scalars["String"]>;
  id?: InputMaybe<Scalars["String"]>;
  name?: InputMaybe<Scalars["String"]>;
  payment_method_types?: InputMaybe<Scalars["String"]>;
  payment_status?: InputMaybe<Scalars["String"]>;
  userId?: InputMaybe<Scalars["UUID"]>;
};

export type OrdersInsertResponse = {
  __typename?: "ordersInsertResponse";
  /** Count of the records impacted by the mutation */
  affectedCount: Scalars["Int"];
  /** Array of records impacted by the mutation */
  records: Array<Orders>;
};

export type OrdersOrderBy = {
  amount_subtotal?: InputMaybe<OrderByDirection>;
  amount_total?: InputMaybe<OrderByDirection>;
  created_at?: InputMaybe<OrderByDirection>;
  email?: InputMaybe<OrderByDirection>;
  id?: InputMaybe<OrderByDirection>;
  name?: InputMaybe<OrderByDirection>;
  payment_method_types?: InputMaybe<OrderByDirection>;
  payment_status?: InputMaybe<OrderByDirection>;
  userId?: InputMaybe<OrderByDirection>;
};

export type OrdersUpdateInput = {
  amount_subtotal?: InputMaybe<Scalars["Int"]>;
  amount_total?: InputMaybe<Scalars["Int"]>;
  created_at?: InputMaybe<Scalars["Datetime"]>;
  email?: InputMaybe<Scalars["String"]>;
  id?: InputMaybe<Scalars["String"]>;
  name?: InputMaybe<Scalars["String"]>;
  payment_method_types?: InputMaybe<Scalars["String"]>;
  payment_status?: InputMaybe<Scalars["String"]>;
  userId?: InputMaybe<Scalars["UUID"]>;
};

export type OrdersUpdateResponse = {
  __typename?: "ordersUpdateResponse";
  /** Count of the records impacted by the mutation */
  affectedCount: Scalars["Int"];
  /** Array of records impacted by the mutation */
  records: Array<Orders>;
};

export type Product_Medias = Node & {
  __typename?: "product_medias";
  id: Scalars["Int"];
  media: Medias;
  mediaId: Scalars["Int"];
  /** Globally Unique Record Identifier */
  nodeId: Scalars["ID"];
  priority?: Maybe<Scalars["Int"]>;
  product: Products;
  productId: Scalars["Int"];
};

export type Product_MediasConnection = {
  __typename?: "product_mediasConnection";
  edges: Array<Product_MediasEdge>;
  pageInfo: PageInfo;
};

export type Product_MediasDeleteResponse = {
  __typename?: "product_mediasDeleteResponse";
  /** Count of the records impacted by the mutation */
  affectedCount: Scalars["Int"];
  /** Array of records impacted by the mutation */
  records: Array<Product_Medias>;
};

export type Product_MediasEdge = {
  __typename?: "product_mediasEdge";
  cursor: Scalars["String"];
  node: Product_Medias;
};

export type Product_MediasFilter = {
  /** Returns true only if all its inner filters are true, otherwise returns false */
  and?: InputMaybe<Array<Product_MediasFilter>>;
  id?: InputMaybe<IntFilter>;
  mediaId?: InputMaybe<IntFilter>;
  nodeId?: InputMaybe<IdFilter>;
  /** Negates a filter */
  not?: InputMaybe<Product_MediasFilter>;
  /** Returns true if at least one of its inner filters is true, otherwise returns false */
  or?: InputMaybe<Array<Product_MediasFilter>>;
  priority?: InputMaybe<IntFilter>;
  productId?: InputMaybe<IntFilter>;
};

export type Product_MediasInsertInput = {
  mediaId?: InputMaybe<Scalars["Int"]>;
  priority?: InputMaybe<Scalars["Int"]>;
  productId?: InputMaybe<Scalars["Int"]>;
};

export type Product_MediasInsertResponse = {
  __typename?: "product_mediasInsertResponse";
  /** Count of the records impacted by the mutation */
  affectedCount: Scalars["Int"];
  /** Array of records impacted by the mutation */
  records: Array<Product_Medias>;
};

export type Product_MediasOrderBy = {
  id?: InputMaybe<OrderByDirection>;
  mediaId?: InputMaybe<OrderByDirection>;
  priority?: InputMaybe<OrderByDirection>;
  productId?: InputMaybe<OrderByDirection>;
};

export type Product_MediasUpdateInput = {
  mediaId?: InputMaybe<Scalars["Int"]>;
  priority?: InputMaybe<Scalars["Int"]>;
  productId?: InputMaybe<Scalars["Int"]>;
};

export type Product_MediasUpdateResponse = {
  __typename?: "product_mediasUpdateResponse";
  /** Count of the records impacted by the mutation */
  affectedCount: Scalars["Int"];
  /** Array of records impacted by the mutation */
  records: Array<Product_Medias>;
};

export type Products = Node & {
  __typename?: "products";
  badge?: Maybe<Scalars["String"]>;
  cartsCollection?: Maybe<CartsConnection>;
  collection_id?: Maybe<Scalars["Int"]>;
  collections?: Maybe<Collections>;
  commentsCollection?: Maybe<CommentsConnection>;
  created_at: Scalars["Datetime"];
  description?: Maybe<Scalars["String"]>;
  featured?: Maybe<Scalars["Boolean"]>;
  featured_image_id: Scalars["Int"];
  id: Scalars["Int"];
  medias: Medias;
  name: Scalars["String"];
  /** Globally Unique Record Identifier */
  nodeId: Scalars["ID"];
  price: Scalars["BigFloat"];
  product_mediasCollection?: Maybe<Product_MediasConnection>;
  rating: Scalars["BigFloat"];
  slug: Scalars["String"];
  storeId?: Maybe<Scalars["Int"]>;
  tags: Scalars["JSON"];
  totalComments: Scalars["Int"];
  user_wishlistCollection?: Maybe<User_WishlistConnection>;
};

export type ProductsCartsCollectionArgs = {
  after?: InputMaybe<Scalars["Cursor"]>;
  before?: InputMaybe<Scalars["Cursor"]>;
  filter?: InputMaybe<CartsFilter>;
  first?: InputMaybe<Scalars["Int"]>;
  last?: InputMaybe<Scalars["Int"]>;
  orderBy?: InputMaybe<Array<CartsOrderBy>>;
};

export type ProductsCommentsCollectionArgs = {
  after?: InputMaybe<Scalars["Cursor"]>;
  before?: InputMaybe<Scalars["Cursor"]>;
  filter?: InputMaybe<CommentsFilter>;
  first?: InputMaybe<Scalars["Int"]>;
  last?: InputMaybe<Scalars["Int"]>;
  orderBy?: InputMaybe<Array<CommentsOrderBy>>;
};

export type ProductsProduct_MediasCollectionArgs = {
  after?: InputMaybe<Scalars["Cursor"]>;
  before?: InputMaybe<Scalars["Cursor"]>;
  filter?: InputMaybe<Product_MediasFilter>;
  first?: InputMaybe<Scalars["Int"]>;
  last?: InputMaybe<Scalars["Int"]>;
  orderBy?: InputMaybe<Array<Product_MediasOrderBy>>;
};

export type ProductsUser_WishlistCollectionArgs = {
  after?: InputMaybe<Scalars["Cursor"]>;
  before?: InputMaybe<Scalars["Cursor"]>;
  filter?: InputMaybe<User_WishlistFilter>;
  first?: InputMaybe<Scalars["Int"]>;
  last?: InputMaybe<Scalars["Int"]>;
  orderBy?: InputMaybe<Array<User_WishlistOrderBy>>;
};

export type ProductsConnection = {
  __typename?: "productsConnection";
  edges: Array<ProductsEdge>;
  pageInfo: PageInfo;
};

export type ProductsDeleteResponse = {
  __typename?: "productsDeleteResponse";
  /** Count of the records impacted by the mutation */
  affectedCount: Scalars["Int"];
  /** Array of records impacted by the mutation */
  records: Array<Products>;
};

export type ProductsEdge = {
  __typename?: "productsEdge";
  cursor: Scalars["String"];
  node: Products;
};

export type ProductsFilter = {
  /** Returns true only if all its inner filters are true, otherwise returns false */
  and?: InputMaybe<Array<ProductsFilter>>;
  badge?: InputMaybe<StringFilter>;
  collection_id?: InputMaybe<IntFilter>;
  created_at?: InputMaybe<DatetimeFilter>;
  description?: InputMaybe<StringFilter>;
  featured?: InputMaybe<BooleanFilter>;
  featured_image_id?: InputMaybe<IntFilter>;
  id?: InputMaybe<IntFilter>;
  name?: InputMaybe<StringFilter>;
  nodeId?: InputMaybe<IdFilter>;
  /** Negates a filter */
  not?: InputMaybe<ProductsFilter>;
  /** Returns true if at least one of its inner filters is true, otherwise returns false */
  or?: InputMaybe<Array<ProductsFilter>>;
  price?: InputMaybe<BigFloatFilter>;
  rating?: InputMaybe<BigFloatFilter>;
  slug?: InputMaybe<StringFilter>;
  storeId?: InputMaybe<IntFilter>;
  totalComments?: InputMaybe<IntFilter>;
};

export type ProductsInsertInput = {
  badge?: InputMaybe<Scalars["String"]>;
  collection_id?: InputMaybe<Scalars["Int"]>;
  created_at?: InputMaybe<Scalars["Datetime"]>;
  description?: InputMaybe<Scalars["String"]>;
  featured?: InputMaybe<Scalars["Boolean"]>;
  featured_image_id?: InputMaybe<Scalars["Int"]>;
  name?: InputMaybe<Scalars["String"]>;
  price?: InputMaybe<Scalars["BigFloat"]>;
  rating?: InputMaybe<Scalars["BigFloat"]>;
  slug?: InputMaybe<Scalars["String"]>;
  storeId?: InputMaybe<Scalars["Int"]>;
  tags?: InputMaybe<Scalars["JSON"]>;
  totalComments?: InputMaybe<Scalars["Int"]>;
};

export type ProductsInsertResponse = {
  __typename?: "productsInsertResponse";
  /** Count of the records impacted by the mutation */
  affectedCount: Scalars["Int"];
  /** Array of records impacted by the mutation */
  records: Array<Products>;
};

export type ProductsOrderBy = {
  badge?: InputMaybe<OrderByDirection>;
  collection_id?: InputMaybe<OrderByDirection>;
  created_at?: InputMaybe<OrderByDirection>;
  description?: InputMaybe<OrderByDirection>;
  featured?: InputMaybe<OrderByDirection>;
  featured_image_id?: InputMaybe<OrderByDirection>;
  id?: InputMaybe<OrderByDirection>;
  name?: InputMaybe<OrderByDirection>;
  price?: InputMaybe<OrderByDirection>;
  rating?: InputMaybe<OrderByDirection>;
  slug?: InputMaybe<OrderByDirection>;
  storeId?: InputMaybe<OrderByDirection>;
  totalComments?: InputMaybe<OrderByDirection>;
};

export type ProductsUpdateInput = {
  badge?: InputMaybe<Scalars["String"]>;
  collection_id?: InputMaybe<Scalars["Int"]>;
  created_at?: InputMaybe<Scalars["Datetime"]>;
  description?: InputMaybe<Scalars["String"]>;
  featured?: InputMaybe<Scalars["Boolean"]>;
  featured_image_id?: InputMaybe<Scalars["Int"]>;
  name?: InputMaybe<Scalars["String"]>;
  price?: InputMaybe<Scalars["BigFloat"]>;
  rating?: InputMaybe<Scalars["BigFloat"]>;
  slug?: InputMaybe<Scalars["String"]>;
  storeId?: InputMaybe<Scalars["Int"]>;
  tags?: InputMaybe<Scalars["JSON"]>;
  totalComments?: InputMaybe<Scalars["Int"]>;
};

export type ProductsUpdateResponse = {
  __typename?: "productsUpdateResponse";
  /** Count of the records impacted by the mutation */
  affectedCount: Scalars["Int"];
  /** Array of records impacted by the mutation */
  records: Array<Products>;
};

export type Profiles = Node & {
  __typename?: "profiles";
  addressCollection?: Maybe<AddressConnection>;
  commentsCollection?: Maybe<CommentsConnection>;
  created_at: Scalars["Datetime"];
  email?: Maybe<Scalars["String"]>;
  id: Scalars["Int"];
  name?: Maybe<Scalars["String"]>;
  /** Globally Unique Record Identifier */
  nodeId: Scalars["ID"];
  role?: Maybe<Scalars["String"]>;
  userId?: Maybe<Scalars["UUID"]>;
};

export type ProfilesAddressCollectionArgs = {
  after?: InputMaybe<Scalars["Cursor"]>;
  before?: InputMaybe<Scalars["Cursor"]>;
  filter?: InputMaybe<AddressFilter>;
  first?: InputMaybe<Scalars["Int"]>;
  last?: InputMaybe<Scalars["Int"]>;
  orderBy?: InputMaybe<Array<AddressOrderBy>>;
};

export type ProfilesCommentsCollectionArgs = {
  after?: InputMaybe<Scalars["Cursor"]>;
  before?: InputMaybe<Scalars["Cursor"]>;
  filter?: InputMaybe<CommentsFilter>;
  first?: InputMaybe<Scalars["Int"]>;
  last?: InputMaybe<Scalars["Int"]>;
  orderBy?: InputMaybe<Array<CommentsOrderBy>>;
};

export type ProfilesConnection = {
  __typename?: "profilesConnection";
  edges: Array<ProfilesEdge>;
  pageInfo: PageInfo;
};

export type ProfilesDeleteResponse = {
  __typename?: "profilesDeleteResponse";
  /** Count of the records impacted by the mutation */
  affectedCount: Scalars["Int"];
  /** Array of records impacted by the mutation */
  records: Array<Profiles>;
};

export type ProfilesEdge = {
  __typename?: "profilesEdge";
  cursor: Scalars["String"];
  node: Profiles;
};

export type ProfilesFilter = {
  /** Returns true only if all its inner filters are true, otherwise returns false */
  and?: InputMaybe<Array<ProfilesFilter>>;
  created_at?: InputMaybe<DatetimeFilter>;
  email?: InputMaybe<StringFilter>;
  id?: InputMaybe<IntFilter>;
  name?: InputMaybe<StringFilter>;
  nodeId?: InputMaybe<IdFilter>;
  /** Negates a filter */
  not?: InputMaybe<ProfilesFilter>;
  /** Returns true if at least one of its inner filters is true, otherwise returns false */
  or?: InputMaybe<Array<ProfilesFilter>>;
  role?: InputMaybe<StringFilter>;
  userId?: InputMaybe<UuidFilter>;
};

export type ProfilesInsertInput = {
  created_at?: InputMaybe<Scalars["Datetime"]>;
  email?: InputMaybe<Scalars["String"]>;
  name?: InputMaybe<Scalars["String"]>;
  role?: InputMaybe<Scalars["String"]>;
  userId?: InputMaybe<Scalars["UUID"]>;
};

export type ProfilesInsertResponse = {
  __typename?: "profilesInsertResponse";
  /** Count of the records impacted by the mutation */
  affectedCount: Scalars["Int"];
  /** Array of records impacted by the mutation */
  records: Array<Profiles>;
};

export type ProfilesOrderBy = {
  created_at?: InputMaybe<OrderByDirection>;
  email?: InputMaybe<OrderByDirection>;
  id?: InputMaybe<OrderByDirection>;
  name?: InputMaybe<OrderByDirection>;
  role?: InputMaybe<OrderByDirection>;
  userId?: InputMaybe<OrderByDirection>;
};

export type ProfilesUpdateInput = {
  created_at?: InputMaybe<Scalars["Datetime"]>;
  email?: InputMaybe<Scalars["String"]>;
  name?: InputMaybe<Scalars["String"]>;
  role?: InputMaybe<Scalars["String"]>;
  userId?: InputMaybe<Scalars["UUID"]>;
};

export type ProfilesUpdateResponse = {
  __typename?: "profilesUpdateResponse";
  /** Count of the records impacted by the mutation */
  affectedCount: Scalars["Int"];
  /** Array of records impacted by the mutation */
  records: Array<Profiles>;
};

export type User_Wishlist = Node & {
  __typename?: "user_wishlist";
  created_at: Scalars["Datetime"];
  id: Scalars["Int"];
  /** Globally Unique Record Identifier */
  nodeId: Scalars["ID"];
  product: Products;
  productId: Scalars["Int"];
  userId: Scalars["UUID"];
};

export type User_WishlistConnection = {
  __typename?: "user_wishlistConnection";
  edges: Array<User_WishlistEdge>;
  pageInfo: PageInfo;
};

export type User_WishlistDeleteResponse = {
  __typename?: "user_wishlistDeleteResponse";
  /** Count of the records impacted by the mutation */
  affectedCount: Scalars["Int"];
  /** Array of records impacted by the mutation */
  records: Array<User_Wishlist>;
};

export type User_WishlistEdge = {
  __typename?: "user_wishlistEdge";
  cursor: Scalars["String"];
  node: User_Wishlist;
};

export type User_WishlistFilter = {
  /** Returns true only if all its inner filters are true, otherwise returns false */
  and?: InputMaybe<Array<User_WishlistFilter>>;
  created_at?: InputMaybe<DatetimeFilter>;
  id?: InputMaybe<IntFilter>;
  nodeId?: InputMaybe<IdFilter>;
  /** Negates a filter */
  not?: InputMaybe<User_WishlistFilter>;
  /** Returns true if at least one of its inner filters is true, otherwise returns false */
  or?: InputMaybe<Array<User_WishlistFilter>>;
  productId?: InputMaybe<IntFilter>;
  userId?: InputMaybe<UuidFilter>;
};

export type User_WishlistInsertInput = {
  created_at?: InputMaybe<Scalars["Datetime"]>;
  productId?: InputMaybe<Scalars["Int"]>;
  userId?: InputMaybe<Scalars["UUID"]>;
};

export type User_WishlistInsertResponse = {
  __typename?: "user_wishlistInsertResponse";
  /** Count of the records impacted by the mutation */
  affectedCount: Scalars["Int"];
  /** Array of records impacted by the mutation */
  records: Array<User_Wishlist>;
};

export type User_WishlistOrderBy = {
  created_at?: InputMaybe<OrderByDirection>;
  id?: InputMaybe<OrderByDirection>;
  productId?: InputMaybe<OrderByDirection>;
  userId?: InputMaybe<OrderByDirection>;
};

export type User_WishlistUpdateInput = {
  created_at?: InputMaybe<Scalars["Datetime"]>;
  productId?: InputMaybe<Scalars["Int"]>;
  userId?: InputMaybe<Scalars["UUID"]>;
};

export type User_WishlistUpdateResponse = {
  __typename?: "user_wishlistUpdateResponse";
  /** Count of the records impacted by the mutation */
  affectedCount: Scalars["Int"];
  /** Array of records impacted by the mutation */
  records: Array<User_Wishlist>;
};

export type AdminProductsPageQueryQueryVariables = Exact<{
  [key: string]: never;
}>;

export type AdminProductsPageQueryQuery = {
  __typename?: "Query";
  productsCollection?: {
    __typename?: "productsConnection";
    edges: Array<{
      __typename?: "productsEdge";
      node: {
        __typename?: "products";
        id: number;
        name: string;
        description?: string | null;
        rating: any;
        slug: string;
        badge?: string | null;
        price: any;
        featuredImage: {
          __typename?: "medias";
          id: number;
          key: string;
          alt: string;
        };
        collections?: {
          __typename?: "collections";
          id: number;
          label: string;
          slug: string;
        } | null;
      };
    }>;
  } | null;
};

export type CartPageQueryQueryVariables = Exact<{
  first: Scalars["Int"];
  userId?: InputMaybe<Scalars["UUID"]>;
}>;

export type CartPageQueryQuery = {
  __typename?: "Query";
  recommendations?: {
    __typename?: "productsConnection";
    edges: Array<{
      __typename?: "productsEdge";
      node: {
        __typename?: "products";
        id: number;
        name: string;
        description?: string | null;
        rating: any;
        slug: string;
        badge?: string | null;
        price: any;
        featuredImage: {
          __typename?: "medias";
          id: number;
          key: string;
          alt: string;
        };
        collections?: {
          __typename?: "collections";
          id: number;
          label: string;
          slug: string;
        } | null;
        cartsCollection?: {
          __typename?: "cartsConnection";
          edges: Array<{
            __typename?: "cartsEdge";
            node: {
              __typename?: "carts";
              id: number;
              productId: number;
              quantity: number;
            };
          }>;
        } | null;
        user_wishlistCollection?: {
          __typename?: "user_wishlistConnection";
          edges: Array<{
            __typename?: "user_wishlistEdge";
            node: {
              __typename?: "user_wishlist";
              id: number;
              productId: number;
            };
          }>;
        } | null;
      };
    }>;
  } | null;
  cartsCollection?: {
    __typename: "cartsConnection";
    edges: Array<{
      __typename?: "cartsEdge";
      node: {
        __typename?: "carts";
        id: number;
        quantity: number;
        product: {
          __typename?: "products";
          id: number;
          slug: string;
          name: string;
          price: any;
          description?: string | null;
          featuredImage: {
            __typename?: "medias";
            id: number;
            key: string;
            alt: string;
          };
        };
      };
    }>;
    pageInfo: { __typename?: "PageInfo"; hasNextPage: boolean };
  } | null;
};

export type CollectionRouteQueryQueryVariables = Exact<{
  collectionSlug?: InputMaybe<Scalars["String"]>;
}>;

export type CollectionRouteQueryQuery = {
  __typename?: "Query";
  collectionsCollection?: {
    __typename?: "collectionsConnection";
    edges: Array<{
      __typename?: "collectionsEdge";
      node: {
        __typename?: "collections";
        id: number;
        label: string;
        slug: string;
        productsCollection?: {
          __typename?: "productsConnection";
          pageInfo: { __typename?: "PageInfo"; hasNextPage: boolean };
          edges: Array<{
            __typename?: "productsEdge";
            node: {
              __typename?: "products";
              id: number;
              name: string;
              description?: string | null;
              rating: any;
              slug: string;
              badge?: string | null;
              price: any;
              featuredImage: {
                __typename?: "medias";
                id: number;
                key: string;
                alt: string;
              };
              collections?: {
                __typename?: "collections";
                id: number;
                label: string;
                slug: string;
              } | null;
              cartsCollection?: {
                __typename?: "cartsConnection";
                edges: Array<{
                  __typename?: "cartsEdge";
                  node: {
                    __typename?: "carts";
                    id: number;
                    productId: number;
                    quantity: number;
                  };
                }>;
              } | null;
              user_wishlistCollection?: {
                __typename?: "user_wishlistConnection";
                edges: Array<{
                  __typename?: "user_wishlistEdge";
                  node: {
                    __typename?: "user_wishlist";
                    id: number;
                    productId: number;
                  };
                }>;
              } | null;
            };
          }>;
        } | null;
        featuredImage: {
          __typename?: "medias";
          id: number;
          key: string;
          alt: string;
        };
      };
    }>;
  } | null;
};

export type LandingRouteQueryQueryVariables = Exact<{ [key: string]: never }>;

export type LandingRouteQueryQuery = {
  __typename?: "Query";
  products?: {
    __typename?: "productsConnection";
    edges: Array<{
      __typename?: "productsEdge";
      node: {
        __typename?: "products";
        id: number;
        name: string;
        description?: string | null;
        rating: any;
        slug: string;
        badge?: string | null;
        price: any;
        featuredImage: {
          __typename?: "medias";
          id: number;
          key: string;
          alt: string;
        };
        collections?: {
          __typename?: "collections";
          id: number;
          label: string;
          slug: string;
        } | null;
        cartsCollection?: {
          __typename?: "cartsConnection";
          edges: Array<{
            __typename?: "cartsEdge";
            node: {
              __typename?: "carts";
              id: number;
              productId: number;
              quantity: number;
            };
          }>;
        } | null;
        user_wishlistCollection?: {
          __typename?: "user_wishlistConnection";
          edges: Array<{
            __typename?: "user_wishlistEdge";
            node: {
              __typename?: "user_wishlist";
              id: number;
              productId: number;
            };
          }>;
        } | null;
      };
    }>;
  } | null;
  collectionScrollCards?: {
    __typename?: "collectionsConnection";
    edges: Array<{
      __typename?: "collectionsEdge";
      node: {
        __typename?: "collections";
        id: number;
        label: string;
        slug: string;
        featuredImage: { __typename?: "medias"; key: string; alt: string };
      };
    }>;
  } | null;
};

export type ProductDetailPageQueryQueryVariables = Exact<{
  productSlug?: InputMaybe<Scalars["String"]>;
}>;

export type ProductDetailPageQueryQuery = {
  __typename?: "Query";
  productsCollection?: {
    __typename?: "productsConnection";
    edges: Array<{
      __typename?: "productsEdge";
      node: {
        __typename?: "products";
        id: number;
        name: string;
        description?: string | null;
        rating: any;
        price: any;
        totalComments: number;
        commentsCollection?: {
          __typename?: "commentsConnection";
          edges: Array<{
            __typename?: "commentsEdge";
            node: {
              __typename?: "comments";
              id: number;
              comment: string;
              profile: { __typename?: "profiles"; name?: string | null };
            };
          }>;
        } | null;
        collections?: {
          __typename?: "collections";
          id: number;
          label: string;
          slug: string;
        } | null;
        featuredImage: {
          __typename?: "medias";
          id: number;
          key: string;
          alt: string;
        };
        images?: {
          __typename?: "product_mediasConnection";
          edges: Array<{
            __typename?: "product_mediasEdge";
            node: {
              __typename?: "product_medias";
              media: {
                __typename?: "medias";
                id: number;
                key: string;
                alt: string;
              };
            };
          }>;
        } | null;
      };
    }>;
  } | null;
  recommendations?: {
    __typename?: "productsConnection";
    edges: Array<{
      __typename?: "productsEdge";
      node: {
        __typename?: "products";
        id: number;
        name: string;
        description?: string | null;
        rating: any;
        slug: string;
        badge?: string | null;
        price: any;
        featuredImage: {
          __typename?: "medias";
          id: number;
          key: string;
          alt: string;
        };
        collections?: {
          __typename?: "collections";
          id: number;
          label: string;
          slug: string;
        } | null;
        cartsCollection?: {
          __typename?: "cartsConnection";
          edges: Array<{
            __typename?: "cartsEdge";
            node: {
              __typename?: "carts";
              id: number;
              productId: number;
              quantity: number;
            };
          }>;
        } | null;
        user_wishlistCollection?: {
          __typename?: "user_wishlistConnection";
          edges: Array<{
            __typename?: "user_wishlistEdge";
            node: {
              __typename?: "user_wishlist";
              id: number;
              productId: number;
            };
          }>;
        } | null;
      };
    }>;
  } | null;
};

export type ProductsPageQueryQueryVariables = Exact<{
  searchWord?: InputMaybe<Scalars["String"]>;
}>;

export type ProductsPageQueryQuery = {
  __typename?: "Query";
  productsCollection?: {
    __typename?: "productsConnection";
    edges: Array<{
      __typename?: "productsEdge";
      node: {
        __typename?: "products";
        id: number;
        name: string;
        description?: string | null;
        rating: any;
        slug: string;
        badge?: string | null;
        price: any;
        featuredImage: {
          __typename?: "medias";
          id: number;
          key: string;
          alt: string;
        };
        collections?: {
          __typename?: "collections";
          id: number;
          label: string;
          slug: string;
        } | null;
        cartsCollection?: {
          __typename?: "cartsConnection";
          edges: Array<{
            __typename?: "cartsEdge";
            node: {
              __typename?: "carts";
              id: number;
              productId: number;
              quantity: number;
            };
          }>;
        } | null;
        user_wishlistCollection?: {
          __typename?: "user_wishlistConnection";
          edges: Array<{
            __typename?: "user_wishlistEdge";
            node: {
              __typename?: "user_wishlist";
              id: number;
              productId: number;
            };
          }>;
        } | null;
      };
    }>;
  } | null;
};

export type ProductsTableFragmentFragment = {
  __typename?: "products";
  id: number;
  name: string;
  description?: string | null;
  rating: any;
  slug: string;
  badge?: string | null;
  price: any;
  featuredImage: {
    __typename?: "medias";
    id: number;
    key: string;
    alt: string;
  };
  collections?: {
    __typename?: "collections";
    id: number;
    label: string;
    slug: string;
  } | null;
};

export type CartItemCardFragmentFragment = {
  __typename?: "carts";
  id: number;
  quantity: number;
  product: {
    __typename?: "products";
    id: number;
    slug: string;
    name: string;
    price: any;
    description?: string | null;
    featuredImage: {
      __typename?: "medias";
      id: number;
      key: string;
      alt: string;
    };
  };
};

export type FetchCartQueryQueryVariables = Exact<{
  userId?: InputMaybe<Scalars["UUID"]>;
  first?: InputMaybe<Scalars["Int"]>;
  after?: InputMaybe<Scalars["Cursor"]>;
}>;

export type FetchCartQueryQuery = {
  __typename?: "Query";
  cartsCollection?: {
    __typename?: "cartsConnection";
    edges: Array<{
      __typename?: "cartsEdge";
      node: {
        __typename?: "carts";
        id: number;
        quantity: number;
        product: {
          __typename?: "products";
          id: number;
          slug: string;
          name: string;
          price: any;
          description?: string | null;
          featuredImage: {
            __typename?: "medias";
            id: number;
            key: string;
            alt: string;
          };
        };
      };
    }>;
  } | null;
};

export type AddCartsProductMutationVariables = Exact<{
  productId?: InputMaybe<Scalars["Int"]>;
  userId?: InputMaybe<Scalars["UUID"]>;
  quantity?: InputMaybe<Scalars["Int"]>;
}>;

export type AddCartsProductMutation = {
  __typename?: "Mutation";
  insertIntocartsCollection?: {
    __typename?: "cartsInsertResponse";
    affectedCount: number;
    records: Array<{
      __typename?: "carts";
      id: number;
      userId: any;
      productId: number;
    }>;
  } | null;
};

export type RemoveCartsProductMutationVariables = Exact<{
  cartId?: InputMaybe<Scalars["Int"]>;
}>;

export type RemoveCartsProductMutation = {
  __typename?: "Mutation";
  deleteFromcartsCollection: {
    __typename?: "cartsDeleteResponse";
    affectedCount: number;
  };
};

export type UpdateCartsCollectionMutationVariables = Exact<{
  id?: InputMaybe<Scalars["Int"]>;
  newQuantity?: InputMaybe<Scalars["Int"]>;
}>;

export type UpdateCartsCollectionMutation = {
  __typename?: "Mutation";
  updatecartsCollection: {
    __typename?: "cartsUpdateResponse";
    affectedCount: number;
    records: Array<{ __typename?: "carts"; id: number; quantity: number }>;
  };
};

export type CollectionBannerFragmentFragment = {
  __typename?: "collections";
  id: number;
  label: string;
  slug: string;
  featuredImage: {
    __typename?: "medias";
    id: number;
    key: string;
    alt: string;
  };
};

export type CollectionCardFragmentFragment = {
  __typename?: "collections";
  label: string;
  slug: string;
  featuredImage: { __typename?: "medias"; key: string; alt: string };
};

export type AddProductToCartMutationVariables = Exact<{
  productId?: InputMaybe<Scalars["Int"]>;
  userId?: InputMaybe<Scalars["UUID"]>;
  quantity?: InputMaybe<Scalars["Int"]>;
}>;

export type AddProductToCartMutation = {
  __typename?: "Mutation";
  insertIntocartsCollection?: {
    __typename?: "cartsInsertResponse";
    affectedCount: number;
    records: Array<{
      __typename?: "carts";
      id: number;
      userId: any;
      productId: number;
    }>;
  } | null;
};

export type ProductCardFragmentFragment = {
  __typename?: "products";
  id: number;
  name: string;
  description?: string | null;
  rating: any;
  slug: string;
  badge?: string | null;
  price: any;
  featuredImage: {
    __typename?: "medias";
    id: number;
    key: string;
    alt: string;
  };
  collections?: {
    __typename?: "collections";
    id: number;
    label: string;
    slug: string;
  } | null;
  cartsCollection?: {
    __typename?: "cartsConnection";
    edges: Array<{
      __typename?: "cartsEdge";
      node: {
        __typename?: "carts";
        id: number;
        productId: number;
        quantity: number;
      };
    }>;
  } | null;
  user_wishlistCollection?: {
    __typename?: "user_wishlistConnection";
    edges: Array<{
      __typename?: "user_wishlistEdge";
      node: { __typename?: "user_wishlist"; id: number; productId: number };
    }>;
  } | null;
};

export type ProductCommentsFragmentFragment = {
  __typename?: "comments";
  id: number;
  comment: string;
  profile: { __typename?: "profiles"; name?: string | null };
};

export type ProductImageShowcaseFragmentFragment = {
  __typename?: "products";
  id: number;
  featuredImage: {
    __typename?: "medias";
    id: number;
    key: string;
    alt: string;
  };
  images?: {
    __typename?: "product_mediasConnection";
    edges: Array<{
      __typename?: "product_mediasEdge";
      node: {
        __typename?: "product_medias";
        media: { __typename?: "medias"; id: number; key: string; alt: string };
      };
    }>;
  } | null;
};

export type CarouselImagesFragmentFragment = {
  __typename?: "product_mediasEdge";
  node: {
    __typename?: "product_medias";
    id: number;
    media: { __typename?: "medias"; key: string; alt: string };
  };
};

export type AddProductToWishListMutationVariables = Exact<{
  productId?: InputMaybe<Scalars["Int"]>;
  userId?: InputMaybe<Scalars["UUID"]>;
}>;

export type AddProductToWishListMutation = {
  __typename?: "Mutation";
  insertIntouser_wishlistCollection?: {
    __typename?: "user_wishlistInsertResponse";
    affectedCount: number;
    records: Array<{
      __typename?: "user_wishlist";
      id: number;
      userId: any;
      productId: number;
    }>;
  } | null;
};

export const ProductsTableFragmentFragmentDoc = {
  kind: "Document",
  definitions: [
    {
      kind: "FragmentDefinition",
      name: { kind: "Name", value: "ProductsTableFragment" },
      typeCondition: {
        kind: "NamedType",
        name: { kind: "Name", value: "products" },
      },
      selectionSet: {
        kind: "SelectionSet",
        selections: [
          { kind: "Field", name: { kind: "Name", value: "id" } },
          { kind: "Field", name: { kind: "Name", value: "name" } },
          { kind: "Field", name: { kind: "Name", value: "description" } },
          { kind: "Field", name: { kind: "Name", value: "rating" } },
          { kind: "Field", name: { kind: "Name", value: "slug" } },
          { kind: "Field", name: { kind: "Name", value: "badge" } },
          { kind: "Field", name: { kind: "Name", value: "price" } },
          {
            kind: "Field",
            alias: { kind: "Name", value: "featuredImage" },
            name: { kind: "Name", value: "medias" },
            selectionSet: {
              kind: "SelectionSet",
              selections: [
                { kind: "Field", name: { kind: "Name", value: "id" } },
                { kind: "Field", name: { kind: "Name", value: "key" } },
                { kind: "Field", name: { kind: "Name", value: "alt" } },
              ],
            },
          },
          {
            kind: "Field",
            name: { kind: "Name", value: "collections" },
            selectionSet: {
              kind: "SelectionSet",
              selections: [
                { kind: "Field", name: { kind: "Name", value: "id" } },
                { kind: "Field", name: { kind: "Name", value: "label" } },
                { kind: "Field", name: { kind: "Name", value: "slug" } },
              ],
            },
          },
        ],
      },
    },
  ],
} as unknown as DocumentNode<ProductsTableFragmentFragment, unknown>;
export const CartItemCardFragmentFragmentDoc = {
  kind: "Document",
  definitions: [
    {
      kind: "FragmentDefinition",
      name: { kind: "Name", value: "CartItemCardFragment" },
      typeCondition: {
        kind: "NamedType",
        name: { kind: "Name", value: "carts" },
      },
      selectionSet: {
        kind: "SelectionSet",
        selections: [
          { kind: "Field", name: { kind: "Name", value: "id" } },
          { kind: "Field", name: { kind: "Name", value: "quantity" } },
          {
            kind: "Field",
            name: { kind: "Name", value: "product" },
            selectionSet: {
              kind: "SelectionSet",
              selections: [
                { kind: "Field", name: { kind: "Name", value: "id" } },
                { kind: "Field", name: { kind: "Name", value: "slug" } },
                { kind: "Field", name: { kind: "Name", value: "name" } },
                { kind: "Field", name: { kind: "Name", value: "price" } },
                { kind: "Field", name: { kind: "Name", value: "description" } },
                {
                  kind: "Field",
                  alias: { kind: "Name", value: "featuredImage" },
                  name: { kind: "Name", value: "medias" },
                  selectionSet: {
                    kind: "SelectionSet",
                    selections: [
                      { kind: "Field", name: { kind: "Name", value: "id" } },
                      { kind: "Field", name: { kind: "Name", value: "key" } },
                      { kind: "Field", name: { kind: "Name", value: "alt" } },
                    ],
                  },
                },
              ],
            },
          },
        ],
      },
    },
  ],
} as unknown as DocumentNode<CartItemCardFragmentFragment, unknown>;
export const CollectionBannerFragmentFragmentDoc = {
  kind: "Document",
  definitions: [
    {
      kind: "FragmentDefinition",
      name: { kind: "Name", value: "CollectionBannerFragment" },
      typeCondition: {
        kind: "NamedType",
        name: { kind: "Name", value: "collections" },
      },
      selectionSet: {
        kind: "SelectionSet",
        selections: [
          { kind: "Field", name: { kind: "Name", value: "id" } },
          { kind: "Field", name: { kind: "Name", value: "label" } },
          { kind: "Field", name: { kind: "Name", value: "slug" } },
          {
            kind: "Field",
            alias: { kind: "Name", value: "featuredImage" },
            name: { kind: "Name", value: "medias" },
            selectionSet: {
              kind: "SelectionSet",
              selections: [
                { kind: "Field", name: { kind: "Name", value: "id" } },
                { kind: "Field", name: { kind: "Name", value: "key" } },
                { kind: "Field", name: { kind: "Name", value: "alt" } },
              ],
            },
          },
        ],
      },
    },
  ],
} as unknown as DocumentNode<CollectionBannerFragmentFragment, unknown>;
export const CollectionCardFragmentFragmentDoc = {
  kind: "Document",
  definitions: [
    {
      kind: "FragmentDefinition",
      name: { kind: "Name", value: "CollectionCardFragment" },
      typeCondition: {
        kind: "NamedType",
        name: { kind: "Name", value: "collections" },
      },
      selectionSet: {
        kind: "SelectionSet",
        selections: [
          { kind: "Field", name: { kind: "Name", value: "label" } },
          { kind: "Field", name: { kind: "Name", value: "slug" } },
          {
            kind: "Field",
            alias: { kind: "Name", value: "featuredImage" },
            name: { kind: "Name", value: "medias" },
            selectionSet: {
              kind: "SelectionSet",
              selections: [
                { kind: "Field", name: { kind: "Name", value: "key" } },
                { kind: "Field", name: { kind: "Name", value: "alt" } },
              ],
            },
          },
        ],
      },
    },
  ],
} as unknown as DocumentNode<CollectionCardFragmentFragment, unknown>;
export const ProductCardFragmentFragmentDoc = {
  kind: "Document",
  definitions: [
    {
      kind: "FragmentDefinition",
      name: { kind: "Name", value: "ProductCardFragment" },
      typeCondition: {
        kind: "NamedType",
        name: { kind: "Name", value: "products" },
      },
      selectionSet: {
        kind: "SelectionSet",
        selections: [
          { kind: "Field", name: { kind: "Name", value: "id" } },
          { kind: "Field", name: { kind: "Name", value: "name" } },
          { kind: "Field", name: { kind: "Name", value: "description" } },
          { kind: "Field", name: { kind: "Name", value: "rating" } },
          { kind: "Field", name: { kind: "Name", value: "slug" } },
          { kind: "Field", name: { kind: "Name", value: "badge" } },
          { kind: "Field", name: { kind: "Name", value: "price" } },
          {
            kind: "Field",
            alias: { kind: "Name", value: "featuredImage" },
            name: { kind: "Name", value: "medias" },
            selectionSet: {
              kind: "SelectionSet",
              selections: [
                { kind: "Field", name: { kind: "Name", value: "id" } },
                { kind: "Field", name: { kind: "Name", value: "key" } },
                { kind: "Field", name: { kind: "Name", value: "alt" } },
              ],
            },
          },
          {
            kind: "Field",
            name: { kind: "Name", value: "collections" },
            selectionSet: {
              kind: "SelectionSet",
              selections: [
                { kind: "Field", name: { kind: "Name", value: "id" } },
                { kind: "Field", name: { kind: "Name", value: "label" } },
                { kind: "Field", name: { kind: "Name", value: "slug" } },
              ],
            },
          },
          {
            kind: "Field",
            name: { kind: "Name", value: "cartsCollection" },
            selectionSet: {
              kind: "SelectionSet",
              selections: [
                {
                  kind: "Field",
                  name: { kind: "Name", value: "edges" },
                  selectionSet: {
                    kind: "SelectionSet",
                    selections: [
                      {
                        kind: "Field",
                        name: { kind: "Name", value: "node" },
                        selectionSet: {
                          kind: "SelectionSet",
                          selections: [
                            {
                              kind: "Field",
                              name: { kind: "Name", value: "id" },
                            },
                            {
                              kind: "Field",
                              name: { kind: "Name", value: "productId" },
                            },
                            {
                              kind: "Field",
                              name: { kind: "Name", value: "quantity" },
                            },
                          ],
                        },
                      },
                    ],
                  },
                },
              ],
            },
          },
          {
            kind: "Field",
            name: { kind: "Name", value: "user_wishlistCollection" },
            selectionSet: {
              kind: "SelectionSet",
              selections: [
                {
                  kind: "Field",
                  name: { kind: "Name", value: "edges" },
                  selectionSet: {
                    kind: "SelectionSet",
                    selections: [
                      {
                        kind: "Field",
                        name: { kind: "Name", value: "node" },
                        selectionSet: {
                          kind: "SelectionSet",
                          selections: [
                            {
                              kind: "Field",
                              name: { kind: "Name", value: "id" },
                            },
                            {
                              kind: "Field",
                              name: { kind: "Name", value: "productId" },
                            },
                          ],
                        },
                      },
                    ],
                  },
                },
              ],
            },
          },
        ],
      },
    },
  ],
} as unknown as DocumentNode<ProductCardFragmentFragment, unknown>;
export const ProductCommentsFragmentFragmentDoc = {
  kind: "Document",
  definitions: [
    {
      kind: "FragmentDefinition",
      name: { kind: "Name", value: "ProductCommentsFragment" },
      typeCondition: {
        kind: "NamedType",
        name: { kind: "Name", value: "comments" },
      },
      selectionSet: {
        kind: "SelectionSet",
        selections: [
          { kind: "Field", name: { kind: "Name", value: "id" } },
          { kind: "Field", name: { kind: "Name", value: "comment" } },
          {
            kind: "Field",
            name: { kind: "Name", value: "profile" },
            selectionSet: {
              kind: "SelectionSet",
              selections: [
                { kind: "Field", name: { kind: "Name", value: "name" } },
              ],
            },
          },
        ],
      },
    },
  ],
} as unknown as DocumentNode<ProductCommentsFragmentFragment, unknown>;
export const ProductImageShowcaseFragmentFragmentDoc = {
  kind: "Document",
  definitions: [
    {
      kind: "FragmentDefinition",
      name: { kind: "Name", value: "ProductImageShowcaseFragment" },
      typeCondition: {
        kind: "NamedType",
        name: { kind: "Name", value: "products" },
      },
      selectionSet: {
        kind: "SelectionSet",
        selections: [
          { kind: "Field", name: { kind: "Name", value: "id" } },
          {
            kind: "Field",
            alias: { kind: "Name", value: "featuredImage" },
            name: { kind: "Name", value: "medias" },
            selectionSet: {
              kind: "SelectionSet",
              selections: [
                { kind: "Field", name: { kind: "Name", value: "id" } },
                { kind: "Field", name: { kind: "Name", value: "key" } },
                { kind: "Field", name: { kind: "Name", value: "alt" } },
              ],
            },
          },
          {
            kind: "Field",
            alias: { kind: "Name", value: "images" },
            name: { kind: "Name", value: "product_mediasCollection" },
            arguments: [
              {
                kind: "Argument",
                name: { kind: "Name", value: "orderBy" },
                value: {
                  kind: "ListValue",
                  values: [
                    {
                      kind: "ObjectValue",
                      fields: [
                        {
                          kind: "ObjectField",
                          name: { kind: "Name", value: "priority" },
                          value: { kind: "EnumValue", value: "DescNullsLast" },
                        },
                      ],
                    },
                  ],
                },
              },
            ],
            selectionSet: {
              kind: "SelectionSet",
              selections: [
                {
                  kind: "Field",
                  name: { kind: "Name", value: "edges" },
                  selectionSet: {
                    kind: "SelectionSet",
                    selections: [
                      {
                        kind: "Field",
                        name: { kind: "Name", value: "node" },
                        selectionSet: {
                          kind: "SelectionSet",
                          selections: [
                            {
                              kind: "Field",
                              name: { kind: "Name", value: "media" },
                              selectionSet: {
                                kind: "SelectionSet",
                                selections: [
                                  {
                                    kind: "Field",
                                    name: { kind: "Name", value: "id" },
                                  },
                                  {
                                    kind: "Field",
                                    name: { kind: "Name", value: "key" },
                                  },
                                  {
                                    kind: "Field",
                                    name: { kind: "Name", value: "alt" },
                                  },
                                ],
                              },
                            },
                          ],
                        },
                      },
                    ],
                  },
                },
              ],
            },
          },
        ],
      },
    },
  ],
} as unknown as DocumentNode<ProductImageShowcaseFragmentFragment, unknown>;
export const CarouselImagesFragmentFragmentDoc = {
  kind: "Document",
  definitions: [
    {
      kind: "FragmentDefinition",
      name: { kind: "Name", value: "CarouselImagesFragment" },
      typeCondition: {
        kind: "NamedType",
        name: { kind: "Name", value: "product_mediasEdge" },
      },
      selectionSet: {
        kind: "SelectionSet",
        selections: [
          {
            kind: "Field",
            name: { kind: "Name", value: "node" },
            selectionSet: {
              kind: "SelectionSet",
              selections: [
                { kind: "Field", name: { kind: "Name", value: "id" } },
                {
                  kind: "Field",
                  name: { kind: "Name", value: "media" },
                  selectionSet: {
                    kind: "SelectionSet",
                    selections: [
                      { kind: "Field", name: { kind: "Name", value: "key" } },
                      { kind: "Field", name: { kind: "Name", value: "alt" } },
                    ],
                  },
                },
              ],
            },
          },
        ],
      },
    },
  ],
} as unknown as DocumentNode<CarouselImagesFragmentFragment, unknown>;
export const AdminProductsPageQueryDocument = {
  kind: "Document",
  definitions: [
    {
      kind: "OperationDefinition",
      operation: "query",
      name: { kind: "Name", value: "AdminProductsPageQuery" },
      selectionSet: {
        kind: "SelectionSet",
        selections: [
          {
            kind: "Field",
            name: { kind: "Name", value: "productsCollection" },
            arguments: [
              {
                kind: "Argument",
                name: { kind: "Name", value: "orderBy" },
                value: {
                  kind: "ListValue",
                  values: [
                    {
                      kind: "ObjectValue",
                      fields: [
                        {
                          kind: "ObjectField",
                          name: { kind: "Name", value: "created_at" },
                          value: { kind: "EnumValue", value: "DescNullsLast" },
                        },
                      ],
                    },
                  ],
                },
              },
            ],
            selectionSet: {
              kind: "SelectionSet",
              selections: [
                {
                  kind: "Field",
                  name: { kind: "Name", value: "edges" },
                  selectionSet: {
                    kind: "SelectionSet",
                    selections: [
                      {
                        kind: "Field",
                        name: { kind: "Name", value: "node" },
                        selectionSet: {
                          kind: "SelectionSet",
                          selections: [
                            {
                              kind: "Field",
                              name: { kind: "Name", value: "id" },
                            },
                            {
                              kind: "FragmentSpread",
                              name: {
                                kind: "Name",
                                value: "ProductsTableFragment",
                              },
                            },
                          ],
                        },
                      },
                    ],
                  },
                },
              ],
            },
          },
        ],
      },
    },
    {
      kind: "FragmentDefinition",
      name: { kind: "Name", value: "ProductsTableFragment" },
      typeCondition: {
        kind: "NamedType",
        name: { kind: "Name", value: "products" },
      },
      selectionSet: {
        kind: "SelectionSet",
        selections: [
          { kind: "Field", name: { kind: "Name", value: "id" } },
          { kind: "Field", name: { kind: "Name", value: "name" } },
          { kind: "Field", name: { kind: "Name", value: "description" } },
          { kind: "Field", name: { kind: "Name", value: "rating" } },
          { kind: "Field", name: { kind: "Name", value: "slug" } },
          { kind: "Field", name: { kind: "Name", value: "badge" } },
          { kind: "Field", name: { kind: "Name", value: "price" } },
          {
            kind: "Field",
            alias: { kind: "Name", value: "featuredImage" },
            name: { kind: "Name", value: "medias" },
            selectionSet: {
              kind: "SelectionSet",
              selections: [
                { kind: "Field", name: { kind: "Name", value: "id" } },
                { kind: "Field", name: { kind: "Name", value: "key" } },
                { kind: "Field", name: { kind: "Name", value: "alt" } },
              ],
            },
          },
          {
            kind: "Field",
            name: { kind: "Name", value: "collections" },
            selectionSet: {
              kind: "SelectionSet",
              selections: [
                { kind: "Field", name: { kind: "Name", value: "id" } },
                { kind: "Field", name: { kind: "Name", value: "label" } },
                { kind: "Field", name: { kind: "Name", value: "slug" } },
              ],
            },
          },
        ],
      },
    },
  ],
} as unknown as DocumentNode<
  AdminProductsPageQueryQuery,
  AdminProductsPageQueryQueryVariables
>;
export const CartPageQueryDocument = {
  kind: "Document",
  definitions: [
    {
      kind: "OperationDefinition",
      operation: "query",
      name: { kind: "Name", value: "CartPageQuery" },
      variableDefinitions: [
        {
          kind: "VariableDefinition",
          variable: {
            kind: "Variable",
            name: { kind: "Name", value: "first" },
          },
          type: {
            kind: "NonNullType",
            type: { kind: "NamedType", name: { kind: "Name", value: "Int" } },
          },
        },
        {
          kind: "VariableDefinition",
          variable: {
            kind: "Variable",
            name: { kind: "Name", value: "userId" },
          },
          type: { kind: "NamedType", name: { kind: "Name", value: "UUID" } },
        },
      ],
      selectionSet: {
        kind: "SelectionSet",
        selections: [
          {
            kind: "Field",
            alias: { kind: "Name", value: "recommendations" },
            name: { kind: "Name", value: "productsCollection" },
            arguments: [
              {
                kind: "Argument",
                name: { kind: "Name", value: "first" },
                value: {
                  kind: "Variable",
                  name: { kind: "Name", value: "first" },
                },
              },
            ],
            selectionSet: {
              kind: "SelectionSet",
              selections: [
                {
                  kind: "Field",
                  name: { kind: "Name", value: "edges" },
                  selectionSet: {
                    kind: "SelectionSet",
                    selections: [
                      {
                        kind: "Field",
                        name: { kind: "Name", value: "node" },
                        selectionSet: {
                          kind: "SelectionSet",
                          selections: [
                            {
                              kind: "Field",
                              name: { kind: "Name", value: "id" },
                            },
                            {
                              kind: "FragmentSpread",
                              name: {
                                kind: "Name",
                                value: "ProductCardFragment",
                              },
                            },
                          ],
                        },
                      },
                    ],
                  },
                },
              ],
            },
          },
          {
            kind: "Field",
            name: { kind: "Name", value: "cartsCollection" },
            arguments: [
              {
                kind: "Argument",
                name: { kind: "Name", value: "filter" },
                value: {
                  kind: "ObjectValue",
                  fields: [
                    {
                      kind: "ObjectField",
                      name: { kind: "Name", value: "userId" },
                      value: {
                        kind: "ObjectValue",
                        fields: [
                          {
                            kind: "ObjectField",
                            name: { kind: "Name", value: "eq" },
                            value: {
                              kind: "Variable",
                              name: { kind: "Name", value: "userId" },
                            },
                          },
                        ],
                      },
                    },
                  ],
                },
              },
              {
                kind: "Argument",
                name: { kind: "Name", value: "first" },
                value: { kind: "IntValue", value: "15" },
              },
            ],
            selectionSet: {
              kind: "SelectionSet",
              selections: [
                { kind: "Field", name: { kind: "Name", value: "__typename" } },
                {
                  kind: "Field",
                  name: { kind: "Name", value: "edges" },
                  selectionSet: {
                    kind: "SelectionSet",
                    selections: [
                      {
                        kind: "Field",
                        name: { kind: "Name", value: "node" },
                        selectionSet: {
                          kind: "SelectionSet",
                          selections: [
                            {
                              kind: "FragmentSpread",
                              name: {
                                kind: "Name",
                                value: "CartItemCardFragment",
                              },
                            },
                          ],
                        },
                      },
                    ],
                  },
                },
                {
                  kind: "Field",
                  name: { kind: "Name", value: "pageInfo" },
                  selectionSet: {
                    kind: "SelectionSet",
                    selections: [
                      {
                        kind: "Field",
                        name: { kind: "Name", value: "hasNextPage" },
                      },
                    ],
                  },
                },
              ],
            },
          },
        ],
      },
    },
    {
      kind: "FragmentDefinition",
      name: { kind: "Name", value: "ProductCardFragment" },
      typeCondition: {
        kind: "NamedType",
        name: { kind: "Name", value: "products" },
      },
      selectionSet: {
        kind: "SelectionSet",
        selections: [
          { kind: "Field", name: { kind: "Name", value: "id" } },
          { kind: "Field", name: { kind: "Name", value: "name" } },
          { kind: "Field", name: { kind: "Name", value: "description" } },
          { kind: "Field", name: { kind: "Name", value: "rating" } },
          { kind: "Field", name: { kind: "Name", value: "slug" } },
          { kind: "Field", name: { kind: "Name", value: "badge" } },
          { kind: "Field", name: { kind: "Name", value: "price" } },
          {
            kind: "Field",
            alias: { kind: "Name", value: "featuredImage" },
            name: { kind: "Name", value: "medias" },
            selectionSet: {
              kind: "SelectionSet",
              selections: [
                { kind: "Field", name: { kind: "Name", value: "id" } },
                { kind: "Field", name: { kind: "Name", value: "key" } },
                { kind: "Field", name: { kind: "Name", value: "alt" } },
              ],
            },
          },
          {
            kind: "Field",
            name: { kind: "Name", value: "collections" },
            selectionSet: {
              kind: "SelectionSet",
              selections: [
                { kind: "Field", name: { kind: "Name", value: "id" } },
                { kind: "Field", name: { kind: "Name", value: "label" } },
                { kind: "Field", name: { kind: "Name", value: "slug" } },
              ],
            },
          },
          {
            kind: "Field",
            name: { kind: "Name", value: "cartsCollection" },
            selectionSet: {
              kind: "SelectionSet",
              selections: [
                {
                  kind: "Field",
                  name: { kind: "Name", value: "edges" },
                  selectionSet: {
                    kind: "SelectionSet",
                    selections: [
                      {
                        kind: "Field",
                        name: { kind: "Name", value: "node" },
                        selectionSet: {
                          kind: "SelectionSet",
                          selections: [
                            {
                              kind: "Field",
                              name: { kind: "Name", value: "id" },
                            },
                            {
                              kind: "Field",
                              name: { kind: "Name", value: "productId" },
                            },
                            {
                              kind: "Field",
                              name: { kind: "Name", value: "quantity" },
                            },
                          ],
                        },
                      },
                    ],
                  },
                },
              ],
            },
          },
          {
            kind: "Field",
            name: { kind: "Name", value: "user_wishlistCollection" },
            selectionSet: {
              kind: "SelectionSet",
              selections: [
                {
                  kind: "Field",
                  name: { kind: "Name", value: "edges" },
                  selectionSet: {
                    kind: "SelectionSet",
                    selections: [
                      {
                        kind: "Field",
                        name: { kind: "Name", value: "node" },
                        selectionSet: {
                          kind: "SelectionSet",
                          selections: [
                            {
                              kind: "Field",
                              name: { kind: "Name", value: "id" },
                            },
                            {
                              kind: "Field",
                              name: { kind: "Name", value: "productId" },
                            },
                          ],
                        },
                      },
                    ],
                  },
                },
              ],
            },
          },
        ],
      },
    },
    {
      kind: "FragmentDefinition",
      name: { kind: "Name", value: "CartItemCardFragment" },
      typeCondition: {
        kind: "NamedType",
        name: { kind: "Name", value: "carts" },
      },
      selectionSet: {
        kind: "SelectionSet",
        selections: [
          { kind: "Field", name: { kind: "Name", value: "id" } },
          { kind: "Field", name: { kind: "Name", value: "quantity" } },
          {
            kind: "Field",
            name: { kind: "Name", value: "product" },
            selectionSet: {
              kind: "SelectionSet",
              selections: [
                { kind: "Field", name: { kind: "Name", value: "id" } },
                { kind: "Field", name: { kind: "Name", value: "slug" } },
                { kind: "Field", name: { kind: "Name", value: "name" } },
                { kind: "Field", name: { kind: "Name", value: "price" } },
                { kind: "Field", name: { kind: "Name", value: "description" } },
                {
                  kind: "Field",
                  alias: { kind: "Name", value: "featuredImage" },
                  name: { kind: "Name", value: "medias" },
                  selectionSet: {
                    kind: "SelectionSet",
                    selections: [
                      { kind: "Field", name: { kind: "Name", value: "id" } },
                      { kind: "Field", name: { kind: "Name", value: "key" } },
                      { kind: "Field", name: { kind: "Name", value: "alt" } },
                    ],
                  },
                },
              ],
            },
          },
        ],
      },
    },
  ],
} as unknown as DocumentNode<CartPageQueryQuery, CartPageQueryQueryVariables>;
export const CollectionRouteQueryDocument = {
  kind: "Document",
  definitions: [
    {
      kind: "OperationDefinition",
      operation: "query",
      name: { kind: "Name", value: "CollectionRouteQuery" },
      variableDefinitions: [
        {
          kind: "VariableDefinition",
          variable: {
            kind: "Variable",
            name: { kind: "Name", value: "collectionSlug" },
          },
          type: { kind: "NamedType", name: { kind: "Name", value: "String" } },
        },
      ],
      selectionSet: {
        kind: "SelectionSet",
        selections: [
          {
            kind: "Field",
            name: { kind: "Name", value: "collectionsCollection" },
            arguments: [
              {
                kind: "Argument",
                name: { kind: "Name", value: "filter" },
                value: {
                  kind: "ObjectValue",
                  fields: [
                    {
                      kind: "ObjectField",
                      name: { kind: "Name", value: "slug" },
                      value: {
                        kind: "ObjectValue",
                        fields: [
                          {
                            kind: "ObjectField",
                            name: { kind: "Name", value: "eq" },
                            value: {
                              kind: "Variable",
                              name: { kind: "Name", value: "collectionSlug" },
                            },
                          },
                        ],
                      },
                    },
                  ],
                },
              },
              {
                kind: "Argument",
                name: { kind: "Name", value: "orderBy" },
                value: {
                  kind: "ListValue",
                  values: [
                    {
                      kind: "ObjectValue",
                      fields: [
                        {
                          kind: "ObjectField",
                          name: { kind: "Name", value: "order" },
                          value: { kind: "EnumValue", value: "DescNullsLast" },
                        },
                      ],
                    },
                  ],
                },
              },
            ],
            selectionSet: {
              kind: "SelectionSet",
              selections: [
                {
                  kind: "Field",
                  name: { kind: "Name", value: "edges" },
                  selectionSet: {
                    kind: "SelectionSet",
                    selections: [
                      {
                        kind: "Field",
                        name: { kind: "Name", value: "node" },
                        selectionSet: {
                          kind: "SelectionSet",
                          selections: [
                            {
                              kind: "FragmentSpread",
                              name: {
                                kind: "Name",
                                value: "CollectionBannerFragment",
                              },
                            },
                            {
                              kind: "Field",
                              name: {
                                kind: "Name",
                                value: "productsCollection",
                              },
                              arguments: [
                                {
                                  kind: "Argument",
                                  name: { kind: "Name", value: "orderBy" },
                                  value: {
                                    kind: "ListValue",
                                    values: [
                                      {
                                        kind: "ObjectValue",
                                        fields: [
                                          {
                                            kind: "ObjectField",
                                            name: {
                                              kind: "Name",
                                              value: "created_at",
                                            },
                                            value: {
                                              kind: "EnumValue",
                                              value: "DescNullsLast",
                                            },
                                          },
                                        ],
                                      },
                                    ],
                                  },
                                },
                              ],
                              selectionSet: {
                                kind: "SelectionSet",
                                selections: [
                                  {
                                    kind: "Field",
                                    name: { kind: "Name", value: "pageInfo" },
                                    selectionSet: {
                                      kind: "SelectionSet",
                                      selections: [
                                        {
                                          kind: "Field",
                                          name: {
                                            kind: "Name",
                                            value: "hasNextPage",
                                          },
                                        },
                                      ],
                                    },
                                  },
                                  {
                                    kind: "Field",
                                    name: { kind: "Name", value: "edges" },
                                    selectionSet: {
                                      kind: "SelectionSet",
                                      selections: [
                                        {
                                          kind: "Field",
                                          name: { kind: "Name", value: "node" },
                                          selectionSet: {
                                            kind: "SelectionSet",
                                            selections: [
                                              {
                                                kind: "Field",
                                                name: {
                                                  kind: "Name",
                                                  value: "id",
                                                },
                                              },
                                              {
                                                kind: "FragmentSpread",
                                                name: {
                                                  kind: "Name",
                                                  value: "ProductCardFragment",
                                                },
                                              },
                                            ],
                                          },
                                        },
                                      ],
                                    },
                                  },
                                ],
                              },
                            },
                          ],
                        },
                      },
                    ],
                  },
                },
              ],
            },
          },
        ],
      },
    },
    {
      kind: "FragmentDefinition",
      name: { kind: "Name", value: "CollectionBannerFragment" },
      typeCondition: {
        kind: "NamedType",
        name: { kind: "Name", value: "collections" },
      },
      selectionSet: {
        kind: "SelectionSet",
        selections: [
          { kind: "Field", name: { kind: "Name", value: "id" } },
          { kind: "Field", name: { kind: "Name", value: "label" } },
          { kind: "Field", name: { kind: "Name", value: "slug" } },
          {
            kind: "Field",
            alias: { kind: "Name", value: "featuredImage" },
            name: { kind: "Name", value: "medias" },
            selectionSet: {
              kind: "SelectionSet",
              selections: [
                { kind: "Field", name: { kind: "Name", value: "id" } },
                { kind: "Field", name: { kind: "Name", value: "key" } },
                { kind: "Field", name: { kind: "Name", value: "alt" } },
              ],
            },
          },
        ],
      },
    },
    {
      kind: "FragmentDefinition",
      name: { kind: "Name", value: "ProductCardFragment" },
      typeCondition: {
        kind: "NamedType",
        name: { kind: "Name", value: "products" },
      },
      selectionSet: {
        kind: "SelectionSet",
        selections: [
          { kind: "Field", name: { kind: "Name", value: "id" } },
          { kind: "Field", name: { kind: "Name", value: "name" } },
          { kind: "Field", name: { kind: "Name", value: "description" } },
          { kind: "Field", name: { kind: "Name", value: "rating" } },
          { kind: "Field", name: { kind: "Name", value: "slug" } },
          { kind: "Field", name: { kind: "Name", value: "badge" } },
          { kind: "Field", name: { kind: "Name", value: "price" } },
          {
            kind: "Field",
            alias: { kind: "Name", value: "featuredImage" },
            name: { kind: "Name", value: "medias" },
            selectionSet: {
              kind: "SelectionSet",
              selections: [
                { kind: "Field", name: { kind: "Name", value: "id" } },
                { kind: "Field", name: { kind: "Name", value: "key" } },
                { kind: "Field", name: { kind: "Name", value: "alt" } },
              ],
            },
          },
          {
            kind: "Field",
            name: { kind: "Name", value: "collections" },
            selectionSet: {
              kind: "SelectionSet",
              selections: [
                { kind: "Field", name: { kind: "Name", value: "id" } },
                { kind: "Field", name: { kind: "Name", value: "label" } },
                { kind: "Field", name: { kind: "Name", value: "slug" } },
              ],
            },
          },
          {
            kind: "Field",
            name: { kind: "Name", value: "cartsCollection" },
            selectionSet: {
              kind: "SelectionSet",
              selections: [
                {
                  kind: "Field",
                  name: { kind: "Name", value: "edges" },
                  selectionSet: {
                    kind: "SelectionSet",
                    selections: [
                      {
                        kind: "Field",
                        name: { kind: "Name", value: "node" },
                        selectionSet: {
                          kind: "SelectionSet",
                          selections: [
                            {
                              kind: "Field",
                              name: { kind: "Name", value: "id" },
                            },
                            {
                              kind: "Field",
                              name: { kind: "Name", value: "productId" },
                            },
                            {
                              kind: "Field",
                              name: { kind: "Name", value: "quantity" },
                            },
                          ],
                        },
                      },
                    ],
                  },
                },
              ],
            },
          },
          {
            kind: "Field",
            name: { kind: "Name", value: "user_wishlistCollection" },
            selectionSet: {
              kind: "SelectionSet",
              selections: [
                {
                  kind: "Field",
                  name: { kind: "Name", value: "edges" },
                  selectionSet: {
                    kind: "SelectionSet",
                    selections: [
                      {
                        kind: "Field",
                        name: { kind: "Name", value: "node" },
                        selectionSet: {
                          kind: "SelectionSet",
                          selections: [
                            {
                              kind: "Field",
                              name: { kind: "Name", value: "id" },
                            },
                            {
                              kind: "Field",
                              name: { kind: "Name", value: "productId" },
                            },
                          ],
                        },
                      },
                    ],
                  },
                },
              ],
            },
          },
        ],
      },
    },
  ],
} as unknown as DocumentNode<
  CollectionRouteQueryQuery,
  CollectionRouteQueryQueryVariables
>;
export const LandingRouteQueryDocument = {
  kind: "Document",
  definitions: [
    {
      kind: "OperationDefinition",
      operation: "query",
      name: { kind: "Name", value: "LandingRouteQuery" },
      selectionSet: {
        kind: "SelectionSet",
        selections: [
          {
            kind: "Field",
            alias: { kind: "Name", value: "products" },
            name: { kind: "Name", value: "productsCollection" },
            arguments: [
              {
                kind: "Argument",
                name: { kind: "Name", value: "filter" },
                value: {
                  kind: "ObjectValue",
                  fields: [
                    {
                      kind: "ObjectField",
                      name: { kind: "Name", value: "featured" },
                      value: {
                        kind: "ObjectValue",
                        fields: [
                          {
                            kind: "ObjectField",
                            name: { kind: "Name", value: "eq" },
                            value: { kind: "BooleanValue", value: true },
                          },
                        ],
                      },
                    },
                  ],
                },
              },
              {
                kind: "Argument",
                name: { kind: "Name", value: "first" },
                value: { kind: "IntValue", value: "4" },
              },
              {
                kind: "Argument",
                name: { kind: "Name", value: "orderBy" },
                value: {
                  kind: "ListValue",
                  values: [
                    {
                      kind: "ObjectValue",
                      fields: [
                        {
                          kind: "ObjectField",
                          name: { kind: "Name", value: "created_at" },
                          value: { kind: "EnumValue", value: "DescNullsLast" },
                        },
                      ],
                    },
                  ],
                },
              },
            ],
            selectionSet: {
              kind: "SelectionSet",
              selections: [
                {
                  kind: "Field",
                  name: { kind: "Name", value: "edges" },
                  selectionSet: {
                    kind: "SelectionSet",
                    selections: [
                      {
                        kind: "Field",
                        name: { kind: "Name", value: "node" },
                        selectionSet: {
                          kind: "SelectionSet",
                          selections: [
                            {
                              kind: "Field",
                              name: { kind: "Name", value: "id" },
                            },
                            {
                              kind: "FragmentSpread",
                              name: {
                                kind: "Name",
                                value: "ProductCardFragment",
                              },
                            },
                          ],
                        },
                      },
                    ],
                  },
                },
              ],
            },
          },
          {
            kind: "Field",
            alias: { kind: "Name", value: "collectionScrollCards" },
            name: { kind: "Name", value: "collectionsCollection" },
            arguments: [
              {
                kind: "Argument",
                name: { kind: "Name", value: "first" },
                value: { kind: "IntValue", value: "4" },
              },
              {
                kind: "Argument",
                name: { kind: "Name", value: "orderBy" },
                value: {
                  kind: "ListValue",
                  values: [
                    {
                      kind: "ObjectValue",
                      fields: [
                        {
                          kind: "ObjectField",
                          name: { kind: "Name", value: "order" },
                          value: { kind: "EnumValue", value: "DescNullsLast" },
                        },
                      ],
                    },
                  ],
                },
              },
            ],
            selectionSet: {
              kind: "SelectionSet",
              selections: [
                {
                  kind: "Field",
                  name: { kind: "Name", value: "edges" },
                  selectionSet: {
                    kind: "SelectionSet",
                    selections: [
                      {
                        kind: "Field",
                        name: { kind: "Name", value: "node" },
                        selectionSet: {
                          kind: "SelectionSet",
                          selections: [
                            {
                              kind: "Field",
                              name: { kind: "Name", value: "id" },
                            },
                            {
                              kind: "FragmentSpread",
                              name: {
                                kind: "Name",
                                value: "CollectionCardFragment",
                              },
                            },
                          ],
                        },
                      },
                    ],
                  },
                },
              ],
            },
          },
        ],
      },
    },
    {
      kind: "FragmentDefinition",
      name: { kind: "Name", value: "ProductCardFragment" },
      typeCondition: {
        kind: "NamedType",
        name: { kind: "Name", value: "products" },
      },
      selectionSet: {
        kind: "SelectionSet",
        selections: [
          { kind: "Field", name: { kind: "Name", value: "id" } },
          { kind: "Field", name: { kind: "Name", value: "name" } },
          { kind: "Field", name: { kind: "Name", value: "description" } },
          { kind: "Field", name: { kind: "Name", value: "rating" } },
          { kind: "Field", name: { kind: "Name", value: "slug" } },
          { kind: "Field", name: { kind: "Name", value: "badge" } },
          { kind: "Field", name: { kind: "Name", value: "price" } },
          {
            kind: "Field",
            alias: { kind: "Name", value: "featuredImage" },
            name: { kind: "Name", value: "medias" },
            selectionSet: {
              kind: "SelectionSet",
              selections: [
                { kind: "Field", name: { kind: "Name", value: "id" } },
                { kind: "Field", name: { kind: "Name", value: "key" } },
                { kind: "Field", name: { kind: "Name", value: "alt" } },
              ],
            },
          },
          {
            kind: "Field",
            name: { kind: "Name", value: "collections" },
            selectionSet: {
              kind: "SelectionSet",
              selections: [
                { kind: "Field", name: { kind: "Name", value: "id" } },
                { kind: "Field", name: { kind: "Name", value: "label" } },
                { kind: "Field", name: { kind: "Name", value: "slug" } },
              ],
            },
          },
          {
            kind: "Field",
            name: { kind: "Name", value: "cartsCollection" },
            selectionSet: {
              kind: "SelectionSet",
              selections: [
                {
                  kind: "Field",
                  name: { kind: "Name", value: "edges" },
                  selectionSet: {
                    kind: "SelectionSet",
                    selections: [
                      {
                        kind: "Field",
                        name: { kind: "Name", value: "node" },
                        selectionSet: {
                          kind: "SelectionSet",
                          selections: [
                            {
                              kind: "Field",
                              name: { kind: "Name", value: "id" },
                            },
                            {
                              kind: "Field",
                              name: { kind: "Name", value: "productId" },
                            },
                            {
                              kind: "Field",
                              name: { kind: "Name", value: "quantity" },
                            },
                          ],
                        },
                      },
                    ],
                  },
                },
              ],
            },
          },
          {
            kind: "Field",
            name: { kind: "Name", value: "user_wishlistCollection" },
            selectionSet: {
              kind: "SelectionSet",
              selections: [
                {
                  kind: "Field",
                  name: { kind: "Name", value: "edges" },
                  selectionSet: {
                    kind: "SelectionSet",
                    selections: [
                      {
                        kind: "Field",
                        name: { kind: "Name", value: "node" },
                        selectionSet: {
                          kind: "SelectionSet",
                          selections: [
                            {
                              kind: "Field",
                              name: { kind: "Name", value: "id" },
                            },
                            {
                              kind: "Field",
                              name: { kind: "Name", value: "productId" },
                            },
                          ],
                        },
                      },
                    ],
                  },
                },
              ],
            },
          },
        ],
      },
    },
    {
      kind: "FragmentDefinition",
      name: { kind: "Name", value: "CollectionCardFragment" },
      typeCondition: {
        kind: "NamedType",
        name: { kind: "Name", value: "collections" },
      },
      selectionSet: {
        kind: "SelectionSet",
        selections: [
          { kind: "Field", name: { kind: "Name", value: "label" } },
          { kind: "Field", name: { kind: "Name", value: "slug" } },
          {
            kind: "Field",
            alias: { kind: "Name", value: "featuredImage" },
            name: { kind: "Name", value: "medias" },
            selectionSet: {
              kind: "SelectionSet",
              selections: [
                { kind: "Field", name: { kind: "Name", value: "key" } },
                { kind: "Field", name: { kind: "Name", value: "alt" } },
              ],
            },
          },
        ],
      },
    },
  ],
} as unknown as DocumentNode<
  LandingRouteQueryQuery,
  LandingRouteQueryQueryVariables
>;
export const ProductDetailPageQueryDocument = {
  kind: "Document",
  definitions: [
    {
      kind: "OperationDefinition",
      operation: "query",
      name: { kind: "Name", value: "ProductDetailPageQuery" },
      variableDefinitions: [
        {
          kind: "VariableDefinition",
          variable: {
            kind: "Variable",
            name: { kind: "Name", value: "productSlug" },
          },
          type: { kind: "NamedType", name: { kind: "Name", value: "String" } },
        },
      ],
      selectionSet: {
        kind: "SelectionSet",
        selections: [
          {
            kind: "Field",
            name: { kind: "Name", value: "productsCollection" },
            arguments: [
              {
                kind: "Argument",
                name: { kind: "Name", value: "filter" },
                value: {
                  kind: "ObjectValue",
                  fields: [
                    {
                      kind: "ObjectField",
                      name: { kind: "Name", value: "slug" },
                      value: {
                        kind: "ObjectValue",
                        fields: [
                          {
                            kind: "ObjectField",
                            name: { kind: "Name", value: "eq" },
                            value: {
                              kind: "Variable",
                              name: { kind: "Name", value: "productSlug" },
                            },
                          },
                        ],
                      },
                    },
                  ],
                },
              },
            ],
            selectionSet: {
              kind: "SelectionSet",
              selections: [
                {
                  kind: "Field",
                  name: { kind: "Name", value: "edges" },
                  selectionSet: {
                    kind: "SelectionSet",
                    selections: [
                      {
                        kind: "Field",
                        name: { kind: "Name", value: "node" },
                        selectionSet: {
                          kind: "SelectionSet",
                          selections: [
                            {
                              kind: "Field",
                              name: { kind: "Name", value: "id" },
                            },
                            {
                              kind: "Field",
                              name: { kind: "Name", value: "name" },
                            },
                            {
                              kind: "Field",
                              name: { kind: "Name", value: "description" },
                            },
                            {
                              kind: "Field",
                              name: { kind: "Name", value: "rating" },
                            },
                            {
                              kind: "Field",
                              name: { kind: "Name", value: "price" },
                            },
                            {
                              kind: "Field",
                              name: { kind: "Name", value: "totalComments" },
                            },
                            {
                              kind: "FragmentSpread",
                              name: {
                                kind: "Name",
                                value: "ProductImageShowcaseFragment",
                              },
                            },
                            {
                              kind: "Field",
                              name: {
                                kind: "Name",
                                value: "commentsCollection",
                              },
                              arguments: [
                                {
                                  kind: "Argument",
                                  name: { kind: "Name", value: "first" },
                                  value: { kind: "IntValue", value: "5" },
                                },
                              ],
                              selectionSet: {
                                kind: "SelectionSet",
                                selections: [
                                  {
                                    kind: "Field",
                                    name: { kind: "Name", value: "edges" },
                                    selectionSet: {
                                      kind: "SelectionSet",
                                      selections: [
                                        {
                                          kind: "Field",
                                          name: { kind: "Name", value: "node" },
                                          selectionSet: {
                                            kind: "SelectionSet",
                                            selections: [
                                              {
                                                kind: "FragmentSpread",
                                                name: {
                                                  kind: "Name",
                                                  value:
                                                    "ProductCommentsFragment",
                                                },
                                              },
                                            ],
                                          },
                                        },
                                      ],
                                    },
                                  },
                                ],
                              },
                            },
                            {
                              kind: "Field",
                              name: { kind: "Name", value: "collections" },
                              selectionSet: {
                                kind: "SelectionSet",
                                selections: [
                                  {
                                    kind: "Field",
                                    name: { kind: "Name", value: "id" },
                                  },
                                  {
                                    kind: "Field",
                                    name: { kind: "Name", value: "label" },
                                  },
                                  {
                                    kind: "Field",
                                    name: { kind: "Name", value: "slug" },
                                  },
                                ],
                              },
                            },
                          ],
                        },
                      },
                    ],
                  },
                },
              ],
            },
          },
          {
            kind: "Field",
            alias: { kind: "Name", value: "recommendations" },
            name: { kind: "Name", value: "productsCollection" },
            arguments: [
              {
                kind: "Argument",
                name: { kind: "Name", value: "filter" },
                value: {
                  kind: "ObjectValue",
                  fields: [
                    {
                      kind: "ObjectField",
                      name: { kind: "Name", value: "slug" },
                      value: {
                        kind: "ObjectValue",
                        fields: [
                          {
                            kind: "ObjectField",
                            name: { kind: "Name", value: "neq" },
                            value: {
                              kind: "Variable",
                              name: { kind: "Name", value: "productSlug" },
                            },
                          },
                        ],
                      },
                    },
                  ],
                },
              },
              {
                kind: "Argument",
                name: { kind: "Name", value: "first" },
                value: { kind: "IntValue", value: "5" },
              },
            ],
            selectionSet: {
              kind: "SelectionSet",
              selections: [
                {
                  kind: "Field",
                  name: { kind: "Name", value: "edges" },
                  selectionSet: {
                    kind: "SelectionSet",
                    selections: [
                      {
                        kind: "Field",
                        name: { kind: "Name", value: "node" },
                        selectionSet: {
                          kind: "SelectionSet",
                          selections: [
                            {
                              kind: "Field",
                              name: { kind: "Name", value: "id" },
                            },
                            {
                              kind: "FragmentSpread",
                              name: {
                                kind: "Name",
                                value: "ProductCardFragment",
                              },
                            },
                          ],
                        },
                      },
                    ],
                  },
                },
              ],
            },
          },
        ],
      },
    },
    {
      kind: "FragmentDefinition",
      name: { kind: "Name", value: "ProductImageShowcaseFragment" },
      typeCondition: {
        kind: "NamedType",
        name: { kind: "Name", value: "products" },
      },
      selectionSet: {
        kind: "SelectionSet",
        selections: [
          { kind: "Field", name: { kind: "Name", value: "id" } },
          {
            kind: "Field",
            alias: { kind: "Name", value: "featuredImage" },
            name: { kind: "Name", value: "medias" },
            selectionSet: {
              kind: "SelectionSet",
              selections: [
                { kind: "Field", name: { kind: "Name", value: "id" } },
                { kind: "Field", name: { kind: "Name", value: "key" } },
                { kind: "Field", name: { kind: "Name", value: "alt" } },
              ],
            },
          },
          {
            kind: "Field",
            alias: { kind: "Name", value: "images" },
            name: { kind: "Name", value: "product_mediasCollection" },
            arguments: [
              {
                kind: "Argument",
                name: { kind: "Name", value: "orderBy" },
                value: {
                  kind: "ListValue",
                  values: [
                    {
                      kind: "ObjectValue",
                      fields: [
                        {
                          kind: "ObjectField",
                          name: { kind: "Name", value: "priority" },
                          value: { kind: "EnumValue", value: "DescNullsLast" },
                        },
                      ],
                    },
                  ],
                },
              },
            ],
            selectionSet: {
              kind: "SelectionSet",
              selections: [
                {
                  kind: "Field",
                  name: { kind: "Name", value: "edges" },
                  selectionSet: {
                    kind: "SelectionSet",
                    selections: [
                      {
                        kind: "Field",
                        name: { kind: "Name", value: "node" },
                        selectionSet: {
                          kind: "SelectionSet",
                          selections: [
                            {
                              kind: "Field",
                              name: { kind: "Name", value: "media" },
                              selectionSet: {
                                kind: "SelectionSet",
                                selections: [
                                  {
                                    kind: "Field",
                                    name: { kind: "Name", value: "id" },
                                  },
                                  {
                                    kind: "Field",
                                    name: { kind: "Name", value: "key" },
                                  },
                                  {
                                    kind: "Field",
                                    name: { kind: "Name", value: "alt" },
                                  },
                                ],
                              },
                            },
                          ],
                        },
                      },
                    ],
                  },
                },
              ],
            },
          },
        ],
      },
    },
    {
      kind: "FragmentDefinition",
      name: { kind: "Name", value: "ProductCommentsFragment" },
      typeCondition: {
        kind: "NamedType",
        name: { kind: "Name", value: "comments" },
      },
      selectionSet: {
        kind: "SelectionSet",
        selections: [
          { kind: "Field", name: { kind: "Name", value: "id" } },
          { kind: "Field", name: { kind: "Name", value: "comment" } },
          {
            kind: "Field",
            name: { kind: "Name", value: "profile" },
            selectionSet: {
              kind: "SelectionSet",
              selections: [
                { kind: "Field", name: { kind: "Name", value: "name" } },
              ],
            },
          },
        ],
      },
    },
    {
      kind: "FragmentDefinition",
      name: { kind: "Name", value: "ProductCardFragment" },
      typeCondition: {
        kind: "NamedType",
        name: { kind: "Name", value: "products" },
      },
      selectionSet: {
        kind: "SelectionSet",
        selections: [
          { kind: "Field", name: { kind: "Name", value: "id" } },
          { kind: "Field", name: { kind: "Name", value: "name" } },
          { kind: "Field", name: { kind: "Name", value: "description" } },
          { kind: "Field", name: { kind: "Name", value: "rating" } },
          { kind: "Field", name: { kind: "Name", value: "slug" } },
          { kind: "Field", name: { kind: "Name", value: "badge" } },
          { kind: "Field", name: { kind: "Name", value: "price" } },
          {
            kind: "Field",
            alias: { kind: "Name", value: "featuredImage" },
            name: { kind: "Name", value: "medias" },
            selectionSet: {
              kind: "SelectionSet",
              selections: [
                { kind: "Field", name: { kind: "Name", value: "id" } },
                { kind: "Field", name: { kind: "Name", value: "key" } },
                { kind: "Field", name: { kind: "Name", value: "alt" } },
              ],
            },
          },
          {
            kind: "Field",
            name: { kind: "Name", value: "collections" },
            selectionSet: {
              kind: "SelectionSet",
              selections: [
                { kind: "Field", name: { kind: "Name", value: "id" } },
                { kind: "Field", name: { kind: "Name", value: "label" } },
                { kind: "Field", name: { kind: "Name", value: "slug" } },
              ],
            },
          },
          {
            kind: "Field",
            name: { kind: "Name", value: "cartsCollection" },
            selectionSet: {
              kind: "SelectionSet",
              selections: [
                {
                  kind: "Field",
                  name: { kind: "Name", value: "edges" },
                  selectionSet: {
                    kind: "SelectionSet",
                    selections: [
                      {
                        kind: "Field",
                        name: { kind: "Name", value: "node" },
                        selectionSet: {
                          kind: "SelectionSet",
                          selections: [
                            {
                              kind: "Field",
                              name: { kind: "Name", value: "id" },
                            },
                            {
                              kind: "Field",
                              name: { kind: "Name", value: "productId" },
                            },
                            {
                              kind: "Field",
                              name: { kind: "Name", value: "quantity" },
                            },
                          ],
                        },
                      },
                    ],
                  },
                },
              ],
            },
          },
          {
            kind: "Field",
            name: { kind: "Name", value: "user_wishlistCollection" },
            selectionSet: {
              kind: "SelectionSet",
              selections: [
                {
                  kind: "Field",
                  name: { kind: "Name", value: "edges" },
                  selectionSet: {
                    kind: "SelectionSet",
                    selections: [
                      {
                        kind: "Field",
                        name: { kind: "Name", value: "node" },
                        selectionSet: {
                          kind: "SelectionSet",
                          selections: [
                            {
                              kind: "Field",
                              name: { kind: "Name", value: "id" },
                            },
                            {
                              kind: "Field",
                              name: { kind: "Name", value: "productId" },
                            },
                          ],
                        },
                      },
                    ],
                  },
                },
              ],
            },
          },
        ],
      },
    },
  ],
} as unknown as DocumentNode<
  ProductDetailPageQueryQuery,
  ProductDetailPageQueryQueryVariables
>;
export const ProductsPageQueryDocument = {
  kind: "Document",
  definitions: [
    {
      kind: "OperationDefinition",
      operation: "query",
      name: { kind: "Name", value: "ProductsPageQuery" },
      variableDefinitions: [
        {
          kind: "VariableDefinition",
          variable: {
            kind: "Variable",
            name: { kind: "Name", value: "searchWord" },
          },
          type: { kind: "NamedType", name: { kind: "Name", value: "String" } },
        },
      ],
      selectionSet: {
        kind: "SelectionSet",
        selections: [
          {
            kind: "Field",
            name: { kind: "Name", value: "productsCollection" },
            arguments: [
              {
                kind: "Argument",
                name: { kind: "Name", value: "filter" },
                value: {
                  kind: "ObjectValue",
                  fields: [
                    {
                      kind: "ObjectField",
                      name: { kind: "Name", value: "slug" },
                      value: {
                        kind: "ObjectValue",
                        fields: [
                          {
                            kind: "ObjectField",
                            name: { kind: "Name", value: "eq" },
                            value: {
                              kind: "Variable",
                              name: { kind: "Name", value: "searchWord" },
                            },
                          },
                        ],
                      },
                    },
                  ],
                },
              },
              {
                kind: "Argument",
                name: { kind: "Name", value: "orderBy" },
                value: {
                  kind: "ListValue",
                  values: [
                    {
                      kind: "ObjectValue",
                      fields: [
                        {
                          kind: "ObjectField",
                          name: { kind: "Name", value: "created_at" },
                          value: { kind: "EnumValue", value: "DescNullsLast" },
                        },
                      ],
                    },
                  ],
                },
              },
            ],
            selectionSet: {
              kind: "SelectionSet",
              selections: [
                {
                  kind: "Field",
                  name: { kind: "Name", value: "edges" },
                  selectionSet: {
                    kind: "SelectionSet",
                    selections: [
                      {
                        kind: "Field",
                        name: { kind: "Name", value: "node" },
                        selectionSet: {
                          kind: "SelectionSet",
                          selections: [
                            {
                              kind: "Field",
                              name: { kind: "Name", value: "id" },
                            },
                            {
                              kind: "FragmentSpread",
                              name: {
                                kind: "Name",
                                value: "ProductCardFragment",
                              },
                            },
                          ],
                        },
                      },
                    ],
                  },
                },
              ],
            },
          },
        ],
      },
    },
    {
      kind: "FragmentDefinition",
      name: { kind: "Name", value: "ProductCardFragment" },
      typeCondition: {
        kind: "NamedType",
        name: { kind: "Name", value: "products" },
      },
      selectionSet: {
        kind: "SelectionSet",
        selections: [
          { kind: "Field", name: { kind: "Name", value: "id" } },
          { kind: "Field", name: { kind: "Name", value: "name" } },
          { kind: "Field", name: { kind: "Name", value: "description" } },
          { kind: "Field", name: { kind: "Name", value: "rating" } },
          { kind: "Field", name: { kind: "Name", value: "slug" } },
          { kind: "Field", name: { kind: "Name", value: "badge" } },
          { kind: "Field", name: { kind: "Name", value: "price" } },
          {
            kind: "Field",
            alias: { kind: "Name", value: "featuredImage" },
            name: { kind: "Name", value: "medias" },
            selectionSet: {
              kind: "SelectionSet",
              selections: [
                { kind: "Field", name: { kind: "Name", value: "id" } },
                { kind: "Field", name: { kind: "Name", value: "key" } },
                { kind: "Field", name: { kind: "Name", value: "alt" } },
              ],
            },
          },
          {
            kind: "Field",
            name: { kind: "Name", value: "collections" },
            selectionSet: {
              kind: "SelectionSet",
              selections: [
                { kind: "Field", name: { kind: "Name", value: "id" } },
                { kind: "Field", name: { kind: "Name", value: "label" } },
                { kind: "Field", name: { kind: "Name", value: "slug" } },
              ],
            },
          },
          {
            kind: "Field",
            name: { kind: "Name", value: "cartsCollection" },
            selectionSet: {
              kind: "SelectionSet",
              selections: [
                {
                  kind: "Field",
                  name: { kind: "Name", value: "edges" },
                  selectionSet: {
                    kind: "SelectionSet",
                    selections: [
                      {
                        kind: "Field",
                        name: { kind: "Name", value: "node" },
                        selectionSet: {
                          kind: "SelectionSet",
                          selections: [
                            {
                              kind: "Field",
                              name: { kind: "Name", value: "id" },
                            },
                            {
                              kind: "Field",
                              name: { kind: "Name", value: "productId" },
                            },
                            {
                              kind: "Field",
                              name: { kind: "Name", value: "quantity" },
                            },
                          ],
                        },
                      },
                    ],
                  },
                },
              ],
            },
          },
          {
            kind: "Field",
            name: { kind: "Name", value: "user_wishlistCollection" },
            selectionSet: {
              kind: "SelectionSet",
              selections: [
                {
                  kind: "Field",
                  name: { kind: "Name", value: "edges" },
                  selectionSet: {
                    kind: "SelectionSet",
                    selections: [
                      {
                        kind: "Field",
                        name: { kind: "Name", value: "node" },
                        selectionSet: {
                          kind: "SelectionSet",
                          selections: [
                            {
                              kind: "Field",
                              name: { kind: "Name", value: "id" },
                            },
                            {
                              kind: "Field",
                              name: { kind: "Name", value: "productId" },
                            },
                          ],
                        },
                      },
                    ],
                  },
                },
              ],
            },
          },
        ],
      },
    },
  ],
} as unknown as DocumentNode<
  ProductsPageQueryQuery,
  ProductsPageQueryQueryVariables
>;
export const FetchCartQueryDocument = {
  kind: "Document",
  definitions: [
    {
      kind: "OperationDefinition",
      operation: "query",
      name: { kind: "Name", value: "FetchCartQuery" },
      variableDefinitions: [
        {
          kind: "VariableDefinition",
          variable: {
            kind: "Variable",
            name: { kind: "Name", value: "userId" },
          },
          type: { kind: "NamedType", name: { kind: "Name", value: "UUID" } },
        },
        {
          kind: "VariableDefinition",
          variable: {
            kind: "Variable",
            name: { kind: "Name", value: "first" },
          },
          type: { kind: "NamedType", name: { kind: "Name", value: "Int" } },
        },
        {
          kind: "VariableDefinition",
          variable: {
            kind: "Variable",
            name: { kind: "Name", value: "after" },
          },
          type: { kind: "NamedType", name: { kind: "Name", value: "Cursor" } },
        },
      ],
      selectionSet: {
        kind: "SelectionSet",
        selections: [
          {
            kind: "Field",
            name: { kind: "Name", value: "cartsCollection" },
            arguments: [
              {
                kind: "Argument",
                name: { kind: "Name", value: "first" },
                value: {
                  kind: "Variable",
                  name: { kind: "Name", value: "first" },
                },
              },
              {
                kind: "Argument",
                name: { kind: "Name", value: "filter" },
                value: {
                  kind: "ObjectValue",
                  fields: [
                    {
                      kind: "ObjectField",
                      name: { kind: "Name", value: "userId" },
                      value: {
                        kind: "ObjectValue",
                        fields: [
                          {
                            kind: "ObjectField",
                            name: { kind: "Name", value: "eq" },
                            value: {
                              kind: "Variable",
                              name: { kind: "Name", value: "userId" },
                            },
                          },
                        ],
                      },
                    },
                  ],
                },
              },
              {
                kind: "Argument",
                name: { kind: "Name", value: "after" },
                value: {
                  kind: "Variable",
                  name: { kind: "Name", value: "after" },
                },
              },
            ],
            selectionSet: {
              kind: "SelectionSet",
              selections: [
                {
                  kind: "Field",
                  name: { kind: "Name", value: "edges" },
                  selectionSet: {
                    kind: "SelectionSet",
                    selections: [
                      {
                        kind: "Field",
                        name: { kind: "Name", value: "node" },
                        selectionSet: {
                          kind: "SelectionSet",
                          selections: [
                            {
                              kind: "Field",
                              name: { kind: "Name", value: "id" },
                            },
                            {
                              kind: "FragmentSpread",
                              name: {
                                kind: "Name",
                                value: "CartItemCardFragment",
                              },
                            },
                          ],
                        },
                      },
                    ],
                  },
                },
              ],
            },
          },
        ],
      },
    },
    {
      kind: "FragmentDefinition",
      name: { kind: "Name", value: "CartItemCardFragment" },
      typeCondition: {
        kind: "NamedType",
        name: { kind: "Name", value: "carts" },
      },
      selectionSet: {
        kind: "SelectionSet",
        selections: [
          { kind: "Field", name: { kind: "Name", value: "id" } },
          { kind: "Field", name: { kind: "Name", value: "quantity" } },
          {
            kind: "Field",
            name: { kind: "Name", value: "product" },
            selectionSet: {
              kind: "SelectionSet",
              selections: [
                { kind: "Field", name: { kind: "Name", value: "id" } },
                { kind: "Field", name: { kind: "Name", value: "slug" } },
                { kind: "Field", name: { kind: "Name", value: "name" } },
                { kind: "Field", name: { kind: "Name", value: "price" } },
                { kind: "Field", name: { kind: "Name", value: "description" } },
                {
                  kind: "Field",
                  alias: { kind: "Name", value: "featuredImage" },
                  name: { kind: "Name", value: "medias" },
                  selectionSet: {
                    kind: "SelectionSet",
                    selections: [
                      { kind: "Field", name: { kind: "Name", value: "id" } },
                      { kind: "Field", name: { kind: "Name", value: "key" } },
                      { kind: "Field", name: { kind: "Name", value: "alt" } },
                    ],
                  },
                },
              ],
            },
          },
        ],
      },
    },
  ],
} as unknown as DocumentNode<FetchCartQueryQuery, FetchCartQueryQueryVariables>;
export const AddCartsProductDocument = {
  kind: "Document",
  definitions: [
    {
      kind: "OperationDefinition",
      operation: "mutation",
      name: { kind: "Name", value: "AddCartsProduct" },
      variableDefinitions: [
        {
          kind: "VariableDefinition",
          variable: {
            kind: "Variable",
            name: { kind: "Name", value: "productId" },
          },
          type: { kind: "NamedType", name: { kind: "Name", value: "Int" } },
        },
        {
          kind: "VariableDefinition",
          variable: {
            kind: "Variable",
            name: { kind: "Name", value: "userId" },
          },
          type: { kind: "NamedType", name: { kind: "Name", value: "UUID" } },
        },
        {
          kind: "VariableDefinition",
          variable: {
            kind: "Variable",
            name: { kind: "Name", value: "quantity" },
          },
          type: { kind: "NamedType", name: { kind: "Name", value: "Int" } },
        },
      ],
      selectionSet: {
        kind: "SelectionSet",
        selections: [
          {
            kind: "Field",
            name: { kind: "Name", value: "insertIntocartsCollection" },
            arguments: [
              {
                kind: "Argument",
                name: { kind: "Name", value: "objects" },
                value: {
                  kind: "ObjectValue",
                  fields: [
                    {
                      kind: "ObjectField",
                      name: { kind: "Name", value: "userId" },
                      value: {
                        kind: "Variable",
                        name: { kind: "Name", value: "userId" },
                      },
                    },
                    {
                      kind: "ObjectField",
                      name: { kind: "Name", value: "productId" },
                      value: {
                        kind: "Variable",
                        name: { kind: "Name", value: "productId" },
                      },
                    },
                    {
                      kind: "ObjectField",
                      name: { kind: "Name", value: "quantity" },
                      value: {
                        kind: "Variable",
                        name: { kind: "Name", value: "quantity" },
                      },
                    },
                  ],
                },
              },
            ],
            selectionSet: {
              kind: "SelectionSet",
              selections: [
                {
                  kind: "Field",
                  name: { kind: "Name", value: "affectedCount" },
                },
                {
                  kind: "Field",
                  name: { kind: "Name", value: "records" },
                  selectionSet: {
                    kind: "SelectionSet",
                    selections: [
                      { kind: "Field", name: { kind: "Name", value: "id" } },
                      {
                        kind: "Field",
                        name: { kind: "Name", value: "userId" },
                      },
                      {
                        kind: "Field",
                        name: { kind: "Name", value: "productId" },
                      },
                    ],
                  },
                },
              ],
            },
          },
        ],
      },
    },
  ],
} as unknown as DocumentNode<
  AddCartsProductMutation,
  AddCartsProductMutationVariables
>;
export const RemoveCartsProductDocument = {
  kind: "Document",
  definitions: [
    {
      kind: "OperationDefinition",
      operation: "mutation",
      name: { kind: "Name", value: "RemoveCartsProduct" },
      variableDefinitions: [
        {
          kind: "VariableDefinition",
          variable: {
            kind: "Variable",
            name: { kind: "Name", value: "cartId" },
          },
          type: { kind: "NamedType", name: { kind: "Name", value: "Int" } },
        },
      ],
      selectionSet: {
        kind: "SelectionSet",
        selections: [
          {
            kind: "Field",
            name: { kind: "Name", value: "deleteFromcartsCollection" },
            arguments: [
              {
                kind: "Argument",
                name: { kind: "Name", value: "filter" },
                value: {
                  kind: "ObjectValue",
                  fields: [
                    {
                      kind: "ObjectField",
                      name: { kind: "Name", value: "id" },
                      value: {
                        kind: "ObjectValue",
                        fields: [
                          {
                            kind: "ObjectField",
                            name: { kind: "Name", value: "eq" },
                            value: {
                              kind: "Variable",
                              name: { kind: "Name", value: "cartId" },
                            },
                          },
                        ],
                      },
                    },
                  ],
                },
              },
            ],
            selectionSet: {
              kind: "SelectionSet",
              selections: [
                {
                  kind: "Field",
                  name: { kind: "Name", value: "affectedCount" },
                },
              ],
            },
          },
        ],
      },
    },
  ],
} as unknown as DocumentNode<
  RemoveCartsProductMutation,
  RemoveCartsProductMutationVariables
>;
export const UpdateCartsCollectionDocument = {
  kind: "Document",
  definitions: [
    {
      kind: "OperationDefinition",
      operation: "mutation",
      name: { kind: "Name", value: "updateCartsCollection" },
      variableDefinitions: [
        {
          kind: "VariableDefinition",
          variable: { kind: "Variable", name: { kind: "Name", value: "id" } },
          type: { kind: "NamedType", name: { kind: "Name", value: "Int" } },
        },
        {
          kind: "VariableDefinition",
          variable: {
            kind: "Variable",
            name: { kind: "Name", value: "newQuantity" },
          },
          type: { kind: "NamedType", name: { kind: "Name", value: "Int" } },
        },
      ],
      selectionSet: {
        kind: "SelectionSet",
        selections: [
          {
            kind: "Field",
            name: { kind: "Name", value: "updatecartsCollection" },
            arguments: [
              {
                kind: "Argument",
                name: { kind: "Name", value: "filter" },
                value: {
                  kind: "ObjectValue",
                  fields: [
                    {
                      kind: "ObjectField",
                      name: { kind: "Name", value: "id" },
                      value: {
                        kind: "ObjectValue",
                        fields: [
                          {
                            kind: "ObjectField",
                            name: { kind: "Name", value: "eq" },
                            value: {
                              kind: "Variable",
                              name: { kind: "Name", value: "id" },
                            },
                          },
                        ],
                      },
                    },
                  ],
                },
              },
              {
                kind: "Argument",
                name: { kind: "Name", value: "set" },
                value: {
                  kind: "ObjectValue",
                  fields: [
                    {
                      kind: "ObjectField",
                      name: { kind: "Name", value: "quantity" },
                      value: {
                        kind: "Variable",
                        name: { kind: "Name", value: "newQuantity" },
                      },
                    },
                  ],
                },
              },
            ],
            selectionSet: {
              kind: "SelectionSet",
              selections: [
                {
                  kind: "Field",
                  name: { kind: "Name", value: "affectedCount" },
                },
                {
                  kind: "Field",
                  name: { kind: "Name", value: "records" },
                  selectionSet: {
                    kind: "SelectionSet",
                    selections: [
                      { kind: "Field", name: { kind: "Name", value: "id" } },
                      {
                        kind: "Field",
                        name: { kind: "Name", value: "quantity" },
                      },
                    ],
                  },
                },
              ],
            },
          },
        ],
      },
    },
  ],
} as unknown as DocumentNode<
  UpdateCartsCollectionMutation,
  UpdateCartsCollectionMutationVariables
>;
export const AddProductToCartDocument = {
  kind: "Document",
  definitions: [
    {
      kind: "OperationDefinition",
      operation: "mutation",
      name: { kind: "Name", value: "AddProductToCart" },
      variableDefinitions: [
        {
          kind: "VariableDefinition",
          variable: {
            kind: "Variable",
            name: { kind: "Name", value: "productId" },
          },
          type: { kind: "NamedType", name: { kind: "Name", value: "Int" } },
        },
        {
          kind: "VariableDefinition",
          variable: {
            kind: "Variable",
            name: { kind: "Name", value: "userId" },
          },
          type: { kind: "NamedType", name: { kind: "Name", value: "UUID" } },
        },
        {
          kind: "VariableDefinition",
          variable: {
            kind: "Variable",
            name: { kind: "Name", value: "quantity" },
          },
          type: { kind: "NamedType", name: { kind: "Name", value: "Int" } },
        },
      ],
      selectionSet: {
        kind: "SelectionSet",
        selections: [
          {
            kind: "Field",
            name: { kind: "Name", value: "insertIntocartsCollection" },
            arguments: [
              {
                kind: "Argument",
                name: { kind: "Name", value: "objects" },
                value: {
                  kind: "ObjectValue",
                  fields: [
                    {
                      kind: "ObjectField",
                      name: { kind: "Name", value: "userId" },
                      value: {
                        kind: "Variable",
                        name: { kind: "Name", value: "userId" },
                      },
                    },
                    {
                      kind: "ObjectField",
                      name: { kind: "Name", value: "productId" },
                      value: {
                        kind: "Variable",
                        name: { kind: "Name", value: "productId" },
                      },
                    },
                    {
                      kind: "ObjectField",
                      name: { kind: "Name", value: "quantity" },
                      value: {
                        kind: "Variable",
                        name: { kind: "Name", value: "quantity" },
                      },
                    },
                  ],
                },
              },
            ],
            selectionSet: {
              kind: "SelectionSet",
              selections: [
                {
                  kind: "Field",
                  name: { kind: "Name", value: "affectedCount" },
                },
                {
                  kind: "Field",
                  name: { kind: "Name", value: "records" },
                  selectionSet: {
                    kind: "SelectionSet",
                    selections: [
                      { kind: "Field", name: { kind: "Name", value: "id" } },
                      {
                        kind: "Field",
                        name: { kind: "Name", value: "userId" },
                      },
                      {
                        kind: "Field",
                        name: { kind: "Name", value: "productId" },
                      },
                    ],
                  },
                },
              ],
            },
          },
        ],
      },
    },
  ],
} as unknown as DocumentNode<
  AddProductToCartMutation,
  AddProductToCartMutationVariables
>;
export const AddProductToWishListDocument = {
  kind: "Document",
  definitions: [
    {
      kind: "OperationDefinition",
      operation: "mutation",
      name: { kind: "Name", value: "AddProductToWishList" },
      variableDefinitions: [
        {
          kind: "VariableDefinition",
          variable: {
            kind: "Variable",
            name: { kind: "Name", value: "productId" },
          },
          type: { kind: "NamedType", name: { kind: "Name", value: "Int" } },
        },
        {
          kind: "VariableDefinition",
          variable: {
            kind: "Variable",
            name: { kind: "Name", value: "userId" },
          },
          type: { kind: "NamedType", name: { kind: "Name", value: "UUID" } },
        },
      ],
      selectionSet: {
        kind: "SelectionSet",
        selections: [
          {
            kind: "Field",
            name: { kind: "Name", value: "insertIntouser_wishlistCollection" },
            arguments: [
              {
                kind: "Argument",
                name: { kind: "Name", value: "objects" },
                value: {
                  kind: "ObjectValue",
                  fields: [
                    {
                      kind: "ObjectField",
                      name: { kind: "Name", value: "userId" },
                      value: {
                        kind: "Variable",
                        name: { kind: "Name", value: "userId" },
                      },
                    },
                    {
                      kind: "ObjectField",
                      name: { kind: "Name", value: "productId" },
                      value: {
                        kind: "Variable",
                        name: { kind: "Name", value: "productId" },
                      },
                    },
                  ],
                },
              },
            ],
            selectionSet: {
              kind: "SelectionSet",
              selections: [
                {
                  kind: "Field",
                  name: { kind: "Name", value: "affectedCount" },
                },
                {
                  kind: "Field",
                  name: { kind: "Name", value: "records" },
                  selectionSet: {
                    kind: "SelectionSet",
                    selections: [
                      { kind: "Field", name: { kind: "Name", value: "id" } },
                      {
                        kind: "Field",
                        name: { kind: "Name", value: "userId" },
                      },
                      {
                        kind: "Field",
                        name: { kind: "Name", value: "productId" },
                      },
                    ],
                  },
                },
              ],
            },
          },
        ],
      },
    },
  ],
} as unknown as DocumentNode<
  AddProductToWishListMutation,
  AddProductToWishListMutationVariables
>;
