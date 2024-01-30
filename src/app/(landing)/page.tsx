import CollectionsCard from "@/components/landing/CollectionsCard"
import ProductCard from "@/components/products/ProductCard"
import { buttonVariants } from "@/components/ui/button"
import { ScrollArea, ScrollBar } from "@/components/ui/scroll-area"
import { gql } from "@/gql"
import { getClient } from "@/lib/urql/urql"
import { cn } from "@/lib/utils"
import Image from "next/image"
import Link from "next/link"
import { notFound } from "next/navigation"
import { Suspense } from "react"

export default async function Home() {
  const LandingRouteQuery = gql(/* GraphQL */ `
    query LandingRouteQuery {
      products: productsCollection(
        filter: { featured: { eq: true } }
        first: 4
        orderBy: [{ created_at: DescNullsLast }]
      ) {
        edges {
          node {
            id
            ...ProductCardFragment
          }
        }
      }
      collectionScrollCards: collectionsCollection(
        first: 4
        orderBy: [{ order: DescNullsLast }]
      ) {
        edges {
          node {
            id
            ...CollectionCardFragment
          }
        }
      }
    }
  `)

  const { data } = await getClient().query(LandingRouteQuery, {})

  if (data === null) return notFound()

  return (
    <main className="min-h-screen">
      <ScrollArea className="whitespace-nowrap relative container">
        <div className="flex w-max space-x-10 py-5 overflow-auto">
          <Suspense fallback="loading">
            {data?.collectionScrollCards?.edges.map(({ node }) => (
              <CollectionsCard collection={node} key={node.id} />
            ))}
          </Suspense>
        </div>
        <ScrollBar orientation="horizontal" />
      </ScrollArea>

      <section className="container">
        <div className="py-5">
          <h2 className="font-semibold text-2xl md:text-3xl mb-1 md:mb-4">
            Featured Products
          </h2>
          <p className="max-w-4xl text-sm md:text-lg leading-[1.5] tracking-[-2%]">
            Ideas to help Bring Home to Life based on your recently viewed
            products. Share your space on Instagram and tag @Penpengrian
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-x-6 gap-y-12 py-5 overflow-auto">
          <Suspense fallback={"loading"}>
            {data?.products?.edges.map(({ node }) => (
              <ProductCard key={node.id} product={node} />
            ))}
          </Suspense>
        </div>
      </section>

      <section className="max-w-[1500px] mx-auto h-[620px] md:h-[580px] bg-[#FFF8EE] grid grid-cols-12 my-16">
        <div className="relative w-full h-[340px] md:h-[580px] col-span-12 md:col-span-8 overflow-hidden">
          <Image
            src={"/assets/bathroom-planning.jpg"}
            alt=""
            fill
            className="object-cover object-center"
          />
        </div>

        <div className="col-span-12 md:col-span-4 pb-6 md:py-20 px-6 md:px-16">
          <h2 className="text-xl md:text-3xl font-semibold mb-3">
            Less is More. Minimal.
          </h2>
          <p className="text-xs leading-[1.5] md:text-lg tracking-tight mb-5 md:mb-12 text-left max-w-md">
            We believe no one should have to choose between the quality they
            want, and the price they can afford. That’s why we make sure our
            products stand up to only the highest quality and sustainability
            standards - and produce them in a way that keeps great design
            affordable for everyone.
          </p>
          <Link
            href="/products"
            className={cn(buttonVariants(), "rounded-full text-xs md:text-md")}
          >
            Shop now
          </Link>
        </div>
      </section>
    </main>
  )
}
