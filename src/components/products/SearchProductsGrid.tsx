"use client"
import React from "react"
import ProductCard from "./ProductCard"
import { DocumentType, gql } from "@/gql"
import { useQuery } from "@urql/next"

type SearchResult = {
  id: string
}

type SearchProductsGridProps = {
  searchResult: SearchResult[] | null
  hasNext: boolean
}

export const FetchSearchProductsQuery = gql(/* GraphQL */ `
  query FetchSearchProductsQuery(
    $productIds: [String!]
    $first: Int
    $after: Cursor
  ) {
    productsCollection(
      first: $first
      filter: { id: { in: $productIds } }
      after: $after
    ) {
      edges {
        node {
          id
          ...ProductCardFragment
        }
      }
    }
  }
`)
function SearchProductsGrid({
  searchResult,
  hasNext,
}: SearchProductsGridProps) {
  const [{ data, fetching, error }, refetch] = useQuery(
    searchResult
      ? {
          query: FetchSearchProductsQuery,
          variables: {
            productIds: searchResult.map(({ id }) => id),
            first: 8,
          },
        }
      : {
          query: FetchSearchProductsQuery,
          variables: {
            productIds: [],
            first: 8,
          },
        }
  )

  console.log("Search PRoduct Grid", data)
  return (
    <section className="grid grid-cols-2 lg:grid-cols-4 w-full gap-y-8 gap-x-3 py-5">
      {data.productsCollection.edges.map(({ node }) => (
        <ProductCard key={node.id} product={node} />
      ))}
    </section>
  )
}

export default SearchProductsGrid
