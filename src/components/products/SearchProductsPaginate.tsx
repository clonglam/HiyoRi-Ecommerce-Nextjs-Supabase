"use client"
import { gql } from "@/gql"
import { usePaginatedQuery } from "@/lib/use-paginated-query"
import { useState } from "react"
import { Button } from "../ui/button"
import ProductCard from "./ProductCard"
import SearchProductsGridSkeleton from "./SearchProductsGridSkeleton"

const SearchProductsPaginateQuery = gql(/* GraphQL */ `
  query SearchProductsPaginateQuery($after: Cursor, $first: Int) {
    productsCollection(after: $after, first: $first) {
      pageInfo {
        hasNextPage
        endCursor
      }
      edges {
        __typename

        node {
          nodeId
          id
          slug
          price
          name
          ...ProductCardFragment
        }
      }
    }
  }
`)

function SearchProductsPaginate({ searchWord }: any) {
  const [lastCursor, setLastCursor] = useState<string | undefined>(undefined)

  const [{ data, fetching, error }] = usePaginatedQuery({
    query: SearchProductsPaginateQuery,
    variables: { first: 4, after: lastCursor },
    mergeResult(oldData, newData) {
      return {
        ...oldData,
        ...newData,
        productsCollection: {
          ...oldData.productsCollection,
          ...newData.productsCollection,
          edges: [
            ...oldData.productsCollection.edges,
            ...newData.productsCollection.edges,
          ],
        },
      }
    },
  })

  const products = data.productsCollection

  console.log("products", products)
  return (
    <div>
      {error && <p>Oh no... {error.message}</p>}
      {fetching && <SearchProductsGridSkeleton />}
      {products && (
        <>
          <p>
            {products.edges.length
              ? `There are no results for "${searchWord}.`
              : `Shown ${products.edges.length} Reuslts.`}
          </p>

          <section className="grid grid-cols-2 lg:grid-cols-4 w-full gap-y-8 gap-x-3 py-5">
            {products.edges.map(({ node }) => (
              <ProductCard key={node.id} product={node} />
            ))}
          </section>

          {products.pageInfo.hasNextPage ? (
            <Button
              onClick={() => {
                setLastCursor(products.pageInfo.endCursor ?? undefined)
              }}
            >
              Load more.
            </Button>
          ) : null}
        </>
      )}
    </div>
  )
}

export default SearchProductsPaginate
