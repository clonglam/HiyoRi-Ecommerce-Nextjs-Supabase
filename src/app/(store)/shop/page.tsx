import Header from "@/components/layouts/Header"
import FilterSelections from "@/components/products/FilterSelections"
import { ProductCard } from "@/components/products/ProductCard"
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
    subcategories,
    price_range,
    store_ids,
    store_page,
  } = searchParams

  // Products transaction
  const limit = typeof per_page === "string" ? parseInt(per_page) : 8
  const offset = typeof page === "string" ? (parseInt(page) - 1) * limit : 0

  const ProductsPageQuery = gql(/* GraphQL */ `
    query ProductsPageQuery($searchWord: String) {
      productsCollection(
        filter: { slug: { eq: $searchWord } }
        orderBy: [{ created_at: DescNullsLast }]
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

  const { data } = await getClient().query(ProductsPageQuery, {
    searchWord: "",
  })

  if (!data) return notFound()

  return (
    <div className="container min-h-screen">
      <Header heading="Shop Now" />
      <FilterSelections />

      <section className="grid grid-cols-2 lg:grid-cols-4 w-full gap-y-8 gap-x-3 py-5">
        {data.productsCollection?.edges.map(({ node }) => (
          <ProductCard key={node.id} product={node} />
        ))}
      </section>
    </div>
  )
}

export default ProductsPage
