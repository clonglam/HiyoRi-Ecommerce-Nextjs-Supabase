"use client"
import { gql } from "@/gql"
import { useQuery } from "@urql/next"
import ProductCard from "./ProductCard"

type SearchResult = {
  id: string
}

type SearchProductsGridProps = {
  searchResults: SearchResult[] | null
  searchWord: string
  hasNext: boolean
}

export const FetchSearchProductsQuery = gql(/* GraphQL */ `
  query FetchSearchProductsQuery($productIds: [String!], $first: Int) {
    productsCollection(first: $first, filter: { id: { in: $productIds } }) {
      edges {
        node {
          id
          ...ProductCardFragment
        }
      }
    }
  }
`)
export const ListProductsByFeaturedQuery = gql(/* GraphQL */ `
  query ListProductsByFeaturedQuery($first: Int, $after: Cursor) {
    productsCollection(first: $first, after: $after) {
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
  searchResults,
  hasNext,
  searchWord,
}: SearchProductsGridProps) {
  console.log("searchResult ", searchResults)
  const [{ data, fetching, error }, refetch] = useQuery(
    searchResults !== null
      ? {
          query: FetchSearchProductsQuery,
          variables: {
            productIds: searchResults.map(({ id }) => id),
            first: 8,
          },
        }
      : {
          query: ListProductsByFeaturedQuery,
          variables: {
            first: 8,
          },
        }
  )

  return (
    <div>
      <p>
        {searchResults === null
          ? `There are no results for "${searchWord}.`
          : `Shown ${searchResults.length} Reuslts.`}
      </p>
      <section className="grid grid-cols-2 lg:grid-cols-4 w-full gap-y-8 gap-x-3 py-5">
        {data.productsCollection.edges.map(({ node }) => (
          <ProductCard key={node.id} product={node} />
        ))}
      </section>
    </div>
  )
}

export default SearchProductsGrid
