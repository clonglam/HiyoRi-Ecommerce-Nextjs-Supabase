"use client"
import { useEffect, useState } from "react"
import SearchResultPage from "./SearchResultPage"
import { useSearchParams } from "next/navigation"
import { SearchQueryVariables } from "@/gql/graphql"

function SearchProductsInifiteScroll() {
  const searchParmas = useSearchParams()

  const collections = searchParmas.get("collections")
  const pricerange = searchParmas.get("pricerange")

  const varaibles: SearchQueryVariables = {
    search: `%${searchParmas.get("search").trim()}%`,
    lower: pricerange ? pricerange.split(",")[0] : undefined,
    upper: pricerange ? pricerange.split(",")[1] : undefined,
    collections: collections ? collections.split(",") : undefined,
    first: 4,
    after: undefined,
  }
  console.log("varaibles", varaibles)

  const [pageVariables, setPageVariables] = useState([varaibles])

  useEffect(() => {
    const collections = searchParmas.get("collections")
    const priceRange = searchParmas.get("price_range")

    const varaibles: SearchQueryVariables = {
      search: `%${searchParmas.get("search").trim()}%`,
      lower: priceRange ? priceRange.split(",")[0] : undefined,
      upper: priceRange ? priceRange.split(",")[1] : undefined,
      collections: collections ? collections.split(",") : undefined,
      first: 4,
      after: undefined,
    }
    setPageVariables([varaibles])
  }, [searchParmas])

  const loadMoreHandler = (after: string) => {
    setPageVariables([...pageVariables, { ...varaibles, after, first: 8 }])
  }

  return (
    <section>
      {pageVariables.map((variable, i) => (
        <SearchResultPage
          key={"" + variable.after}
          variables={variable}
          isLastPage={i === pageVariables.length - 1}
          onLoadMore={loadMoreHandler}
        />
      ))}
    </section>
  )
}

export default SearchProductsInifiteScroll
