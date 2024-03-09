import { getCurrentUser } from "@/features/users/actions";
import { Icons } from "@/components/layouts/icons";
import { Shell } from "@/components/layouts/Shell";
import { buttonVariants } from "@/components/ui/button";
import { ScrollArea, ScrollBar } from "@/components/ui/scroll-area";
import {
  CollectionCardFragment,
  CollectionsCard,
  CollectionsCardSkeleton,
} from "@/features/collections";
import {
  ProductCard,
  ProductCardFragment,
  ProductCardSkeleton,
} from "@/features/products";
import { DocumentType, gql } from "@/gql";
import { getClient } from "@/lib/urql";
import { cn, keytoUrl } from "@/lib/utils";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { Suspense } from "react";

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
      first: 6
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
`);

export default async function Home() {
  const currentUser = await getCurrentUser();

  const { data } = await getClient().query(LandingRouteQuery, {
    user_id: currentUser?.id,
  });

  if (data === null) return notFound();

  return (
    <main>
      <HeroSection />

      <Shell>
        {data.products && data.products.edges ? (
          <ProductSubCollectionsCircles
            collections={data.collectionScrollCards.edges}
          />
        ) : null}

        {data.products && data.products.edges ? (
          <FeaturedProductsCards products={data.products.edges} />
        ) : null}

        <CollectionGrid />

        <DifferentFeatureCards />

        <LessIsMoreCard />
      </Shell>
    </main>
  );
}

function HeroSection() {
  return (
    <section className="w-full h-screen md:h-[800px] mx-auto flex justify-center">
      <div className="relative w-full h-full md:h-[800px]">
        <Image
          alt="Furniture"
          src="https://hiyori-backpack.s3.us-west-2.amazonaws.com/public/hero-image.jpg"
          width={1920}
          height={1200}
          priority={true}
          className="h-full w-full object-cover "
        />
      </div>

      <div className="container absolute py-8 h-screen md:h-[800px] w-full">
        <div className="flex flex-col justify-center z-30 h-full">
          <p className="text-sm md:text-md uppercase tracking-widest text-white ">
            hugolam
          </p>
          <h1 className="text-5xl md:text-9xl font-bold text-white my-4 shadow-md">
            Utilized with
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
                "hover:text-zinc-600 hover:bg-white",
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
                "md:px-16 md:py-6",
              )}
            >
              View the Code
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}

interface FeaturedProductsCards {
  products: { node: DocumentType<typeof ProductCardFragment> }[];
}

interface CollectionsCardsProps {
  collections: { node: DocumentType<typeof CollectionCardFragment> }[];
}

function ProductSubCollectionsCircles({ collections }: CollectionsCardsProps) {
  return (
    <section className="flex justify-start items-center gap-x-10 overflow-auto py-12">
      {collections.map(({ node }) => (
        <Link
          href={`/collections/${node.slug}`}
          key={`collection_circle_${node.id}`}
        >
          <div
            className={cn(
              "relative bg-secondary rounded-full flex justify-center items-center",
              "w-[280px] h-[280px]",
              // "md:w-[320px] md:h-[320px]"
              // "lg:w-[360px] lg:h-[360px]"
            )}
          >
            <Image
              src={keytoUrl(node.featuredImage.key)}
              alt={node.featuredImage.alt}
              width={320}
              height={320}
              className={cn(
                "object-center object-cover hover:scale-105 transition-all duration-500",
                "w-[240px] h-[240px]",
                // "md:w-[280px] md:h-[280px]",
                // "lg:w-[320px] lg:h-[320px]"
              )}
            />
          </div>
          <p className="text-black text-center mt-3 font-semibold">
            {node.label}
          </p>
        </Link>
      ))}
    </section>
  );
}

interface FeaturedProductsCardsProps {
  products: { node: DocumentType<typeof ProductCardFragment> }[];
}

function FeaturedProductsCards({ products }: FeaturedProductsCardsProps) {
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
  );
}

function CollectionGrid() {
  return (
    <section className="relative lg:space-x-5 space-y-5 lg:space-y-0 grid grid-cols-1 lg:grid-cols-3 max-h-[840px]">
      <div className="relative col-span-2 w-full h-[840px]">
        <Image
          src={keytoUrl("public/zPiCx79oGe5X4rVBLg0Ss.jpeg")}
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

      <div className="flex flex-col w-full space-y-5 h-[840px]">
        <div className="relative w-full h-[340px]">
          <Image
            src={keytoUrl("public/E2MWE99uGyOZLd76UEixy.jpeg")}
            width={800}
            height={900}
            className="object-cover w-full h-full"
            alt="1"
          />
        </div>

        <div className="relative overflow-hidden">
          <Image
            src={keytoUrl("public/YPO3VwJvjvlkWzNtIv9FS.jpeg")}
            width={800}
            height={900}
            className="object-cover w-full h-full"
            alt="1"
          />
        </div>
      </div>
    </section>
  );
}

function CollectionRectCard({ collections }: CollectionsCardsProps) {
  return (
    <ScrollArea className="whitespace-nowrap relative container">
      <div className="flex w-max space-x-10 py-5 overflow-auto">
        <Suspense
          fallback={[...Array(6)].map((_, index) => (
            <CollectionsCardSkeleton key={`Collections-sekelton-${index}`} />
          ))}
        >
          {collections.map(({ node }) => (
            <CollectionsCard collection={node} key={node.id} />
          ))}
        </Suspense>
      </div>
      <ScrollBar orientation="horizontal" />
    </ScrollArea>
  );
}

function DifferentFeatureCards() {
  const features = [
    {
      Icon: Icons.cart,
      title: "Responsible Design",
      description:
        "Designed with integrity and durably crafted for everyday use.",
    },
    {
      Icon: Icons.tag,
      title: "Transparent Pricing",
      description:
        "We believe in accessible pricing and full transparency. Our pricing model is an open book.",
    },
    {
      Icon: Icons.package,
      title: "Sustainable Sourcing",
      description:
        "We only partner with people who put the earth, and its people, first.",
    },
    {
      Icon: Icons.award,
      title: "Giving Back",
      description:
        "Thanks to Mealshare, every purchase directly donates a meal to a youth in need.",
    },
  ];
  return (
    <section className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 pt-5 gap-y-8 gap-x-5 md:gap-x-12 mx-auto">
      {features.map(({ Icon, title, description }, index) => (
        <div
          className="text-center  max-w-[18rem]"
          key={`FeatureCards_${index}`}
        >
          <div className="flex justify-center items-center p-5">
            <Icon
              width={45}
              height={45}
              className="mb-5 text-zinc-400 font-light"
            />
          </div>

          <h4 className="text-xl font-serif font-extralight mb-3">{title}</h4>
          <p className="text-lg text-muted-foreground">{description}</p>
        </div>
      ))}
    </section>
  );
}

function LessIsMoreCard() {
  return (
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
          We believe no one should have to choose between the quality they want,
          and the price they can afford. That’s why we make sure our products
          stand up to only the highest quality and sustainability standards -
          and produce them in a way that keeps great design affordable for
          everyone.
        </p>
        <Link
          href="/shop"
          className={cn(buttonVariants(), "rounded-full text-xs md:text-md")}
        >
          Shop now
        </Link>
      </div>
    </section>
  );
}
