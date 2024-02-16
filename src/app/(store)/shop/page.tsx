import { searchProductsAction } from "@/_actions/products"
import Header from "@/components/layouts/Header"
import FilterSelections from "@/components/products/FilterSelections"
import { ProductCard } from "@/components/products/ProductCard"
import SearchProductsGrid from "@/components/products/SearchProductsGrid"
import { gql } from "@/gql"
import { getClient } from "@/lib/urql/urql"
import { notFound } from "next/navigation"
import React from "react"

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
    categories,
    search = "",
    price_range,
    store_ids,
    store_page,
  } = searchParams

  // Products transaction
  const limit = typeof per_page === "string" ? parseInt(per_page) : 8

  const query = typeof search === "string" ? search : search.join(".")

  const data = await searchProductsAction({ query })

  if (!data) return notFound()

  return (
    <div className="container min-h-screen">
      <Header heading="Shop Now" />
      <FilterSelections />

      <SearchProductsGrid
        searchResult={data.productdIds}
        hasNext={data.hasNext}
      />
    </div>
  )
}

export default ProductsPage
