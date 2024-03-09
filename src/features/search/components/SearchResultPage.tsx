"use client";

import { gql } from "@/gql";
import { SearchQuery, SearchQueryVariables } from "@/gql/graphql";
import { useQuery } from "@urql/next";
import { Button } from "@/components/ui/button";
import { ProductCard } from "@/features/products";
import SearchProductsGridSkeleton from "./SearchProductsGridSkeleton";

const ProductSearch = gql(/* GraphQL */ `
  query Search(
    $search: String
    $lower: BigFloat
    $upper: BigFloat
    $collections: [String!]
    $first: Int!
    $after: Cursor
    $orderBy: [productsOrderBy!]
  ) {
    productsCollection(
      filter: {
        and: [
          { name: { ilike: $search } }
          { price: { gt: $lower, lt: $upper } }
          { collection_id: { in: $collections } }
        ]
      }
      first: $first
      after: $after
      orderBy: $orderBy
    ) {
      edges {
        node {
          id

          ...ProductCardFragment
        }
      }
      pageInfo {
        hasNextPage
        endCursor
      }
    }
  }
`);

const SearchResultPage = ({
  variables,
  onLoadMore,
  isLastPage,
}: {
  variables: SearchQueryVariables;
  onLoadMore: (cursor: string) => void;
  isLastPage: boolean;
}) => {
  const [result] = useQuery<SearchQuery, SearchQueryVariables>({
    query: ProductSearch,
    variables,
  });

  const { data, fetching, error } = result;

  const products = data?.productsCollection;

  return (
    <div>
      {error && <p>Oh no... {error.message}</p>}

      {fetching && <SearchProductsGridSkeleton />}

      {products && (
        <>
          {products.edges.length === 0 && (
            <p>
              {`There is no Products with name `}
              <span className="font-bold">
                {(variables.search || []).slice(1, -2)}
              </span>
              {"."}
            </p>
          )}
          <section className="grid grid-cols-2 lg:grid-cols-4 w-full gap-y-8 gap-x-3 py-5">
            {products.edges.map(({ node }) => (
              <ProductCard key={node.id} product={node} />
            ))}
          </section>

          {isLastPage && products.pageInfo.hasNextPage && (
            <div className="w-full flex justify-center items-center mt-3">
              <Button onClick={() => onLoadMore(products.pageInfo.endCursor)}>
                load more
              </Button>
            </div>
          )}
        </>
      )}
    </div>
  );
};

export default SearchResultPage;
