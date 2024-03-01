import SectionHeading from "@/components/layouts/SectionHeading"
import { Shell } from "@/components/layouts/Shell"
import FilterSelections from "@/components/products/FilterSelections"
import { CollectionBanner } from "@/features/collections"
import ProductCard from "@/features/products/components/ProductCard"
import { gql } from "@/gql"
import { getClient } from "@/lib/urql"
import { toTitleCase, unslugify } from "@/lib/utils"
import { notFound } from "next/navigation"

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
        first: 1
      ) {
        edges {
          node {
            title
            label
            description
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

  const collection = data.collectionsCollection.edges[0].node
  return (
    <Shell>
      <CollectionBanner
        collectionBannerData={data.collectionsCollection.edges[0].node}
      />
      <SectionHeading
        heading={collection.title}
        description={collection.description}
      />
      <FilterSelections collectionsSection={[]} />

      {productsList.edges.length == 0 ? (
        <section>
          {`There is no Products in ${unslugify(params.collectionSlug)}.`}
        </section>
      ) : (
        <section className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-x-5 gap-y-10">
          {productsList.edges.map(({ node }) => (
            <ProductCard key={node.id} product={node} />
          ))}
        </section>
      )}
    </Shell>
  )
}

export default CategoryPage
