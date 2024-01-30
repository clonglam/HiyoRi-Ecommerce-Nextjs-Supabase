import CollectionsCard from "@/components/landing/CollectionsCard"
import ProductCard from "@/components/products/ProductCard"
import { buttonVariants } from "@/components/ui/button"
import { ScrollArea, ScrollBar } from "@/components/ui/scroll-area"
import { scollCards } from "@/config/collections"
import { gql } from "@/gql"
import { getClient } from "@/lib/urql/urql"
import { cn } from "@/lib/utils"
import Image from "next/image"
import Link from "next/link"
import { notFound } from "next/navigation"
import { Suspense } from "react"

export default async function Home() {
  // const productsList = [
  //   {
  //     id: "0001",
  //     image: {
  //       src: "/assets/bathroom-planning.jpg",
  //       alt: "string",
  //     },
  //     featured: false,
  //     name: "BILD",
  //     description: `Poster, 41x51(16x20 ")`,
  //     price: 320,
  //   },
  //   {
  //     id: "0002",
  //     image: {
  //       src: "/assets/bathroom-planning.jpg",
  //       alt: "string",
  //     },
  //     featured: false,
  //     name: "BILD",
  //     description: `Poster, 41x51(16x20 ")`,
  //     price: 320,
  //   },
  //   {
  //     id: "0003",
  //     image: {
  //       src: "/assets/bathroom-planning.jpg",
  //       alt: "string",
  //     },
  //     featured: false,
  //     name: "BILD",
  //     description: `Poster, 41x51(16x20 ")`,
  //     price: 320,
  //   },
  //   {
  //     id: "0004",
  //     image: {
  //       src: "/assets/bathroom-planning.jpg",
  //       alt: "string",
  //     },
  //     featured: false,
  //     name: "BILD",
  //     description: `Poster, 41x51(16x20 ")`,
  //     price: 320,
  //   },
  // ]

  const LandingRouteQuery = gql(/* GraphQL */ `
    query LandingRouteQuery {
      products: productsCollection {
        edges {
          node {
            id

            ...ProductCardFragment
          }
        }
      }
      collectionScrollCards: collectionsCollection {
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
          <h2 className="font-semibold text-[32px]">Featured Products</h2>
          <p className="max-w-4xl text-[18px] leading-[1.5] tracking-[-2%]">
            Ideas to help Bring Home to Life based on your recently viewed
            products. Share your space on Instagram and tag @Penpengrian
          </p>
        </div>

        <ScrollArea>
          <div className="flex w-max space-x-10 py-5 overflow-auto">
            <Suspense fallback={"loading"}>
              {data?.products?.edges.map(({ node }) => (
                <ProductCard key={node.id} product={node} />
              ))}
            </Suspense>
          </div>
        </ScrollArea>
      </section>

      <section className="max-w-[1500px] mx-auto h-[580px] bg-slate-500 grid grid-cols-12 my-16">
        <div className="relative w-full h-[580px] col-span-8 overflow-hidden">
          <Image
            src={"/assets/bathroom-planning.jpg"}
            alt=""
            fill
            className="object-cover object-center"
          />
        </div>
        <div className="col-span-4 py-20 px-16">
          <h2 className="text-3xl font-semibold mb-3">
            Less is More. Minimal.
          </h2>
          <p className="text-lg tracking-tight mb-12 text-left max-w-md">
            We believe no one should have to choose between the quality they
            want, and the price they can afford. That’s why we make sure our
            products stand up to only the highest quality and sustainability
            standards - and produce them in a way that keeps great design
            affordable for everyone.
          </p>
          <Link href="/products" className={cn(buttonVariants({ size: "lg" }))}>
            Shop now
          </Link>
        </div>
      </section>
    </main>
  )
}
