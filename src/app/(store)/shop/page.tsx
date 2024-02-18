import { listCollectionsAction } from "@/_actions/collections"
import { searchProductsAction } from "@/_actions/products"
import Header from "@/components/layouts/Header"
import FilterSelections from "@/components/products/FilterSelections"
import { ProductCard } from "@/components/products/ProductCard"
import SearchProductsGrid from "@/components/products/SearchProductsGrid"
import { Skeleton } from "@/components/ui/skeleton"
import { gql } from "@/gql"
import { getClient } from "@/lib/urql/urql"
import { notFound } from "next/navigation"
import React, { Suspense } from "react"

interface ProductsPageProps {
  searchParams: {
    [key: string]: string | string[] | undefined
  }
}

async function ProductsPage({ searchParams }: ProductsPageProps) {
  const {
    page,
    per_page,
    sort,
    collections,
    search = "",
    price_range,
    store_ids,
    store_page,
  } = searchParams

  // Products transaction
  const limit = typeof per_page === "string" ? parseInt(per_page) : 8

  const query = typeof search === "string" ? search : search.join(".")

  const data = await searchProductsAction({
    query,
    sort: typeof sort === "string" ? sort : null,
    collections: typeof collections === "string" ? collections : null,
  })

  const collectionsData = await listCollectionsAction()

  return (
    <div className="container min-h-screen">
      <Header heading="Shop Now" />

      <Suspense fallback={<Skeleton></Skeleton>}>
        <FilterSelections collections={collectionsData} />
      </Suspense>

      <SearchProductsGrid
        searchResults={data?.productdIds || null}
        hasNext={data?.hasNext}
        searchWord={query}
      />
    </div>
  )
}

export default ProductsPage
