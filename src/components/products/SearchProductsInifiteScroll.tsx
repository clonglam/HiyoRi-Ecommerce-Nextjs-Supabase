"use client"
import { useEffect, useState } from "react"
import SearchResultPage from "./SearchResultPage"
import { useSearchParams } from "next/navigation"
import { SearchQueryVariables } from "@/gql/graphql"

function SearchProductsInifiteScroll() {
  const searchParmas = useSearchParams()

  const collections = searchParmas.get("collections")
  const minPrice = searchParmas.get("minPrice")
  const maxPrice = searchParmas.get("maxPrice")
  const query = searchParmas.get("search")

  const varaibles: SearchQueryVariables = {
    search: query != null ? `%${query.trim()}%` : undefined,
    lower: minPrice ? minPrice : undefined,
    upper: maxPrice ? maxPrice : undefined,
    collections: collections ? collections.split(",") : undefined,
    first: 4,
    after: undefined,
  }
  console.log("varaibles", varaibles)

  const [pageVariables, setPageVariables] = useState([varaibles])

  useEffect(() => {
    const collections = searchParmas.get("collections")
    const minPrice = searchParmas.get("minPrice")
    const maxPrice = searchParmas.get("maxPrice")
    const query = searchParmas.get("search")

    const varaibles: SearchQueryVariables = {
      search: query != null ? `%${query.trim()}%` : undefined,
      lower: minPrice ? minPrice : undefined,
      upper: maxPrice ? maxPrice : undefined,
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
