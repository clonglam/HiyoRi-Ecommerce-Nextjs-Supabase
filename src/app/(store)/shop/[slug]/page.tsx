import React from "react"
import { gql } from "@/gql"
import { getClient } from "@/lib/urql/urql"
import Image from "next/image"
import AddProductForm from "@/components/products/AddProductForm"
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"
import { ProductImagesCarousel } from "@/components/products/ProductImagesCarousel"
import BuyNowButton from "@/components/products/BuyNowButton"
import AddToWishListButton from "@/components/wishList/AddToWishListButton"
import ShipReturns from "@/components/products/ShipReturns"
import Header from "@/components/layouts/Header"
import { notFound } from "next/navigation"
import { keytoUrl } from "@/lib/s3/s3"
import ProductCard from "@/components/products/ProductCard"
import ProductImageShowcase from "@/components/products/ProductImageShowcase"

type Props = {
  params: {
    slug: string
  }
}

async function ProductDetailPage({ params }: Props) {
  const ProductDetailPageQuery = gql(/* GraphQL */ `
    query ProductDetailPageQuery($productSlug: String) {
      productsCollection(filter: { slug: { eq: $productSlug } }) {
        edges {
          node {
            name
            description
            rating
            price
            ...ProductImageShowcaseFragment

            collections {
              id
              label
              slug
            }
          }
        }
      }
      recommendations: productsCollection(
        filter: { slug: { neq: $productSlug } }
        first: 5
      ) {
        edges {
          node {
            id
            ...ProductCardFragment
          }
        }
      }
    }
  `)

  const { data, error } = await getClient().query(ProductDetailPageQuery, {
    productSlug: params.slug as string,
  })

  if (!data || !data.productsCollection || !data.productsCollection.edges)
    return notFound()

  const { name, description, price } = data.productsCollection.edges[0].node

  return (
    <div className="container min-h-screen ">
      <div className="grid grid-cols-12 gap-x-8">
        <div className="space-y-8 relative col-span-12 md:col-span-7">
          <ProductImageShowcase data={data.productsCollection.edges[0].node} />
        </div>

        <div className="col-span-12 md:col-span-5">
          <section className="flex justify-between items-start max-w-lg">
            <div>
              <h1 className="text-4xl font-semibold tracking-wide mb-3">
                {name}
              </h1>
              <p className="text-2xl font-semibold mb-3">{`$${price}`}</p>
            </div>
            <AddToWishListButton />
          </section>

          <section className="flex mb-8 items-end space-x-5">
            <AddProductForm />
            <BuyNowButton />
          </section>

          <section>
            <p>{description}</p>

            <Accordion type="single" collapsible>
              <AccordionItem value="item-1">
                <AccordionTrigger>Is it accessible?</AccordionTrigger>
                <AccordionContent>
                  Yes. It adheres to the WAI-ARIA design pattern.
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="item-2">
                <AccordionTrigger>Is it accessible?</AccordionTrigger>
                <AccordionContent>
                  Yes. It adheres to the WAI-ARIA design pattern.
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="item-3">
                <AccordionTrigger>Ship & Returns</AccordionTrigger>
                <AccordionContent>
                  Shipping & Returns Spend $80 to receive free shipping for a
                  limited time. Oversized items require additional handling
                  fees. Learn more Except for furniture, innerwear, and food,
                  merchandise can be returned or exchanged within 30 days of
                  delivery. Learn more
                </AccordionContent>
              </AccordionItem>
            </Accordion>
          </section>
        </div>
      </div>

      <Header heading={`We Think You'll Love`} />
      <div className="container grid grid-cols-2 lg:grid-cols-4 gap-x-8 ">
        {data.recommendations &&
          data.recommendations.edges.map(({ node }) => (
            <ProductCard key={node.id} product={node} />
          ))}
      </div>

      <Header heading={`Product Comments`}>
        <div></div>
      </Header>
    </div>
  )
}

export default ProductDetailPage
