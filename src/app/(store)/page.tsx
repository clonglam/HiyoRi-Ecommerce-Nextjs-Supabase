import { getCurrentUser } from "@/_actions/users"
import CollectionsCard, {
  CollectionsCardSkeleton,
} from "@/components/landing/CollectionsCard"
import { Shell } from "@/components/layouts/Shell"
import ProductCard, {
  ProductCardFragment,
} from "@/components/products/ProductCard"
import { ProductCardSkeleton } from "@/components/products/ProductCardSkeleton"
import { buttonVariants } from "@/components/ui/button"
import { ScrollArea, ScrollBar } from "@/components/ui/scroll-area"
import { DocumentType, gql } from "@/gql"
import { getClient } from "@/lib/urql/urql"
import { cn } from "@/lib/utils"
import Image from "next/image"
import Link from "next/link"
import { notFound } from "next/navigation"
import { Suspense } from "react"

const LandingRouteQuery = gql(/* GraphQL */ `
  query LandingRouteQuery($user_id: UUID) {
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

    wishlistCollection(filter: { user_id: { eq: $user_id } }) {
      edges {
        node {
          product_id
        }
      }
    }

    cartsCollection(filter: { user_id: { eq: $user_id } }) {
      edges {
        node {
          product_id
          quantity
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

export default async function Home() {
  const currentUser = await getCurrentUser()

  const { data } = await getClient().query(LandingRouteQuery, {
    user_id: currentUser?.id,
  })

  if (data === null) return notFound()

  return (
    <main className="min-h-screen">
      <HeroSection />

      <Shell>
        <ProductSubCollectionsCircles />
        {data.products && data.products.edges ? (
          <FeaturedProductsCards products={data.products.edges} />
        ) : null}

        {/* Collection Cards */}
        <CollectionGrid />

        {/* 3 Rows */}
        <section></section>

        {/* Collections Cards */}
        <ScrollArea className="whitespace-nowrap relative container">
          <div className="flex w-max space-x-10 py-5 overflow-auto">
            <Suspense
              fallback={[...Array(6)].map((_, index) => (
                <CollectionsCardSkeleton
                  key={`Collections-sekelton-${index}`}
                />
              ))}
            >
              {data?.collectionScrollCards?.edges.map(({ node }) => (
                <CollectionsCard collection={node} key={node.id} />
              ))}
            </Suspense>
          </div>
          <ScrollBar orientation="horizontal" />
        </ScrollArea>

        <section className="max-w-[1920px] mx-auto h-[620px] md:h-[580px] bg-[#FFF8EE] grid grid-cols-12 my-16">
          <div className="relative w-full h-[340px] md:h-[580px] col-span-12 md:col-span-8 overflow-hidden">
            <Image
              src={"/assets/cutingcardImage.jpg"}
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
              href="/shop"
              className={cn(
                buttonVariants(),
                "rounded-full text-xs md:text-md"
              )}
            >
              Shop now
            </Link>
          </div>
        </section>
      </Shell>
    </main>
  )
}

function HeroSection() {
  return (
    <section className="w-full h-screen md:h-[1080px] mx-auto flex justify-center">
      <div className="relative w-full h-full md:h-[1080px]">
        <Image
          alt="Furniture"
          src="https://hiyori-backpack.s3.us-west-2.amazonaws.com/public/hero-image.jpg"
          width={1920}
          height={1200}
          priority={true}
          className="h-full w-full object-cover "
        />
      </div>

      <div className="container absolute py-8 h-screen md:h-[1080px] w-full">
        <div className="flex flex-col justify-center z-30 h-full">
          <p className="text-sm md:text-md uppercase tracking-widest text-white ">
            hugolam
          </p>
          <h1 className="text-5xl md:text-9xl font-bold text-white my-4 shadow-md">
            Designed for
            <br />
            GraphQL:
          </h1>

          <div className="flex space-x-4 mt-5 max-w-screen">
            <Link
              href="/shop"
              className={cn(
                buttonVariants({ variant: "outline", size: "lg" }),
                "border-2 border-white text-white rounded px-8 py-3 ",
                "md:px-16 md:py-6",
                "hover:text-zinc-600 hover:bg-white"
              )}
            >
              New in
            </Link>

            <Link
              href="https://github.com/clonglam/HIYORI-master"
              target="_blank"
              className={cn(
                buttonVariants({ variant: "default", size: "lg" }),
                "border-2 border-primary text-white rounded px-8 py-3 ",
                "md:px-16 md:py-6"
              )}
            >
              View the Code
            </Link>
          </div>
        </div>
      </div>
    </section>
  )
}

function ProductSubCollectionsCircles() {
  return (
    <section className="flex justify-start items-center gap-x-10 overflow-auto py-12">
      {[...Array(6)].map((collection, index) => (
        <div key={`collection_circle_${index}`}>
          <div className="relative bg-secondary w-[340px] h-[340px] md:w-[420px] md:h-[420px] rounded-full flex justify-center items-center">
            <Image
              src="https://hiyori-backpack.s3.us-west-2.amazonaws.com/public/Sofa.H03.2k.png"
              alt="collection name"
              width={320}
              height={320}
              className="object-center object-cover w-[240px] h-[240px] md:w-[320px] md:h-[320px] hover:scale-105 transition-all duration-500"
            />
          </div>
          <p className="text-black text-center mt-3 font-semibold">
            Collection
          </p>
        </div>
      ))}
    </section>
  )
}

interface FeaturedProductsCards {
  products: { node: DocumentType<typeof ProductCardFragment> }[]
}

function FeaturedProductsCards({ products }: FeaturedProductsCards) {
  return (
    <section className="container mt-12">
      <div className="">
        <h2 className="font-semibold text-2xl md:text-3xl mb-1 md:mb-3">
          Featured Products
        </h2>
        <p className="max-w-4xl text-sm md:text-md leading-[1.5] tracking-[-2%] mb-2">
          Ideas to help Bring Home to Life based on your recently viewed
          products. Share your space on Instagram and tag @Penpengrian
        </p>
      </div>

      <div className="grid grid-cols-2 md:grid-cols-4 gap-x-6 gap-y-12 py-5 overflow-auto">
        <Suspense
          fallback={[...Array(4)].map((_, index) => (
            <ProductCardSkeleton key={`Product-Skeleton-${index}`} />
          ))}
        >
          {products.map(({ node }) => (
            <ProductCard key={`product-card-${node.id}`} product={node} />
          ))}
        </Suspense>
      </div>
    </section>
  )
}

function CollectionGrid() {
  return (
    <section className="relative gap-5 h-[800px] grid grid-cols-1 md:grid-cols-3 overflow-hidden">
      <div className="relative col-span-2 h-full w-full">
        <Image
          src={"/assets/bathroom-planning.jpg"}
          width={1080}
          height={1080}
          className="object-cover w-full h-full"
          alt="1"
        />
        <div className="bg-zinc-800/20 flex justify-center items-center flex-col absolute w-full h-full top-0 left-0 text-white">
          <p className="text-5xl mb-3">Bath Room</p>
          <p className=" font-light mb-8">Designed for enhanchment</p>
          <Link
            className={cn(buttonVariants({ size: "lg" }), "text-xl py-8 px-10")}
            href={"/collections/bathroom"}
          >
            DiscoverNow
          </Link>
        </div>
      </div>

      <div className="flex flex-col gap-5">
        <div className="relative-span-1 w-full overflow-hidden">
          <Image
            src={"/assets/bathroom-planning.jpg"}
            width={800}
            height={900}
            className="object-cover"
            alt="1"
          />
        </div>

        <div className="relative overflow-hidden">
          <Image
            src={"/assets/bathroom-planning.jpg"}
            width={800}
            height={900}
            className="object-cover"
            alt="1"
          />
        </div>
      </div>
    </section>
  )
}
