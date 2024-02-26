"use client"
import { useEffect, useState } from "react"
import SearchResultPage from "./SearchResultPage"
import { ReadonlyURLSearchParams, useSearchParams } from "next/navigation"
import { OrderByDirection, SearchQueryVariables } from "@/gql/graphql"

function SearchProductsInifiteScroll() {
  const searchParmas = useSearchParams()

  const varaibles = searchParamsVariablesFactory(searchParmas)

  const [pageVariables, setPageVariables] = useState([varaibles])

  useEffect(() => {
    setPageVariables([searchParamsVariablesFactory(searchParmas)])
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

const searchParamsVariablesFactory = (params: ReadonlyURLSearchParams) => {
  const collections = params.get("collections")
  const minPrice = params.get("minPrice")
  const maxPrice = params.get("maxPrice")
  const query = params.get("search")
  const sort = params.get("sort")

  console.log("sort")
  let orderBy = undefined

  switch (sort) {
    case "BEST_MATCH":
      orderBy = [
        { featured: OrderByDirection["DescNullsFirst"] },
        { created_at: OrderByDirection["DescNullsLast"] },
      ]
      break
    case "PRICE_LOW_TO_HIGH":
      orderBy = [{ price: OrderByDirection["AscNullsLast"] }]
      break
    case "PRICE_HIGH_TO_LOW":
      orderBy = [{ price: OrderByDirection["DescNullsLast"] }]
      break
    case "NEWEST":
      orderBy = [{ created_at: OrderByDirection["DescNullsLast"] }]
      break
    case "NAME_ASCE":
      orderBy = [{ name: OrderByDirection["AscNullsLast"] }]

      break
    default:
      orderBy = undefined
  }

  console.log("orderBy", orderBy)
  const varaibles: SearchQueryVariables = {
    search: query != null ? `%${query.trim()}%` : undefined,
    lower: minPrice ? minPrice : undefined,
    upper: maxPrice ? maxPrice : undefined,
    collections: collections ? collections.split(",") : undefined,
    orderBy,
    first: 4,
    after: undefined,
  }
  return varaibles
}
