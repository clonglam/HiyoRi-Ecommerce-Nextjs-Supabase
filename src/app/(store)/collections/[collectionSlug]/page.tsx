import SectionHeading from "@/components/layouts/SectionHeading";
import { Shell } from "@/components/layouts/Shell";
import { Skeleton } from "@/components/ui/skeleton";
import { CollectionBanner } from "@/features/collections";
import { SearchProductsGridSkeleton } from "@/features/products";
import {
  FilterSelections,
  SearchProductsInifiteScroll,
} from "@/features/search";
import { gql } from "@/gql";
import { getClient } from "@/lib/urql";
import { toTitleCase, unslugify } from "@/lib/utils";
import { notFound } from "next/navigation";
import { Suspense } from "react";

interface CategoryPageProps {
  params: {
    collectionSlug: string;
  };
  searchParams: {
    [key: string]: string | string[] | undefined;
  };
}

export function generateMetadata({ params }: CategoryPageProps) {
  return {
    title: `HIYORI | ${toTitleCase(unslugify(params.collectionSlug))}`,
    description: `HIYORI | Buy ${params.collectionSlug} funiture.`,
  };
}

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
`);

async function CategoryPage({ params, searchParams }: CategoryPageProps) {
  const { collectionSlug } = params;

  const { data } = await getClient().query(CollectionRouteQuery, {
    collectionSlug,
  });

  if (
    data === null ||
    !data?.collectionsCollection?.edges[0].node ||
    data?.collectionsCollection === null ||
    data?.collectionsCollection?.edges[0].node.productsCollection === null
  )
    return notFound();

  const productsList =
    data?.collectionsCollection?.edges[0].node.productsCollection;

  if (!productsList) return notFound();

  const collection = data.collectionsCollection.edges[0].node;
  return (
    <Shell>
      <CollectionBanner
        collectionBannerData={data.collectionsCollection.edges[0].node}
      />
      <SectionHeading
        heading={collection.title}
        description={collection.description}
      />

      <Suspense
        fallback={
          <div>
            <Skeleton className="max-w-xl h-8 mb-3" />
            <Skeleton className="max-w-2xl h-8" />
          </div>
        }
      >
        <FilterSelections shopLayout={false} />
      </Suspense>

      <Suspense fallback={<SearchProductsGridSkeleton />}>
        <SearchProductsInifiteScroll
          collectionId={data.collectionsCollection.edges[0].node.id}
        />
      </Suspense>
    </Shell>
  );
}

export default CategoryPage;
