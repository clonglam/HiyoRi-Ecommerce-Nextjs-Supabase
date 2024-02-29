import { listCollectionsAction } from "@/_actions/collections"
import Header from "@/components/layouts/Header"
import FilterSelections from "@/components/products/FilterSelections"
import SearchProductsGridSkeleton from "@/components/products/SearchProductsGridSkeleton"
import SearchProductsInifiteScroll from "@/components/products/SearchProductsInifiteScroll"

import { Skeleton } from "@/components/ui/skeleton"
import { Suspense } from "react"

interface ProductsPageProps {
  searchParams: {
    [key: string]: string | string[] | undefined
  }
}

async function ProductsPage({}: ProductsPageProps) {
  const collectionsData = await listCollectionsAction()

  return (
    <div className="container min-h-screen">
      <Header heading="Shop Now" />

      <Suspense
        fallback={
          <div>
            <Skeleton className="max-w-xl h-8 mb-3" />
            <Skeleton className="max-w-2xl h-8" />
          </div>
        }
      >
        <FilterSelections collectionsSection={collectionsData} />
      </Suspense>

      <Suspense fallback={<SearchProductsGridSkeleton />}>
        <SearchProductsInifiteScroll />
      </Suspense>
    </div>
  )
}

export default ProductsPage
