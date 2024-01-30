import CollectionBanner from "@/components/collections/CollectionBanner"
import Header from "@/components/layouts/Header"
import ProductCard from "@/components/products/ProductCard"
import { gql } from "@/gql"
import { getClient } from "@/lib/urql/urql"
import { toTitleCase, unslugify } from "@/lib/utils"
import { notFound } from "next/navigation"
import React from "react"

interface CategoryPageProps {
  params: {
    collectionSlug: string
  }
  searchParams: {
    [key: string]: string | string[] | undefined
  }
}

export function generateMetadata({ params }: CategoryPageProps) {
  return {
    title: `HIYORI | ${toTitleCase(unslugify(params.collectionSlug))}`,
    description: `HIYORI | Buy ${params.collectionSlug} funiture.`,
  }
}

async function CategoryPage({ params, searchParams }: CategoryPageProps) {
  const { collectionSlug } = params
  const {
    page,
    per_page,
    sort,
    subcategories,
    price_range,
    store_ids,
    store_page,
  } = searchParams

  const CollectionRouteQuery = gql(/* GraphQL */ `
    query CollectionRouteQuery($collectionSlug: String) {
      collectionsCollection(
        filter: { slug: { eq: $collectionSlug } }
        orderBy: [{ order: DescNullsLast }]
      ) {
        edges {
          node {
            ...CollectionBannerFragment
            productsCollection(orderBy: [{ created_at: DescNullsLast }]) {
              pageInfo {
                hasNextPage
              }
              edges {
                node {
                  id
                  ...ProductCardFragment
                }
              }
            }
          }
        }
      }
    }
  `)

  const { data } = await getClient().query(CollectionRouteQuery, {
    collectionSlug,
  })

  if (
    data === null ||
    !data?.collectionsCollection?.edges[0].node ||
    data?.collectionsCollection === null ||
    data?.collectionsCollection?.edges[0].node.productsCollection === null
  )
    return notFound()

  const productsList =
    data?.collectionsCollection?.edges[0].node.productsCollection

  if (!productsList) return notFound()

  return (
    <div className="min-h-screen">
      {/* <Header heading={unslugify(params.collectionSlug)} /> */}
      <CollectionBanner
        collectionBannerData={data.collectionsCollection.edges[0].node}
      />

      {productsList.edges.length == 0 ? (
        <section>
          {`There is no Products in ${unslugify(params.collectionSlug)}.`}
        </section>
      ) : (
        <section className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-x-5 gap-y-10 container">
          {productsList.edges.map(({ node }) => (
            <ProductCard key={node.id} product={node} />
          ))}
        </section>
      )}
    </div>
  )
}

// const productList = (product: DocumentType<typeof ProductCardFragment>) => {}
export default CategoryPage
