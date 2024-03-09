import React from "react";
import { Skeleton } from "../../../components/ui/skeleton";
import { ProductCardSkeleton } from "../../products/components/ProductCardSkeleton";

function SearchProductsGridSkeleton() {
  return (
    <div>
      <Skeleton className="mb-5" />

      <section className="grid grid-cols-2 lg:grid-cols-4 w-full gap-y-8 gap-x-3 py-5">
        {[...Array(24)].map((_, index) => (
          <ProductCardSkeleton key={index} />
        ))}
      </section>
    </div>
  );
}

export default SearchProductsGridSkeleton;
