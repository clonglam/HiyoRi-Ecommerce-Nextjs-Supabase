import React from "react"
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
import SectionHeader from "@/components/layouts/SectionHeader"
import { ProductCard } from "@/components/products/ProductCard"

type Props = {}

function ProductDetailPage({}: Props) {
  const product = {
    id: "0001",
    slug: "bild-01",
    image: {
      src: "/assets/bathroom-planning.jpg",
      alt: "string",
    },
    featured: false,
    name: "BILD",
    description: `Poster, 41x51(16x20 ")`,
    price: 320,
    images: [
      { src: "/assets/bathroom-planning.jpg", alt: "string" },
      { src: "/assets/bathroom-planning.jpg", alt: "string" },
      { src: "/assets/bathroom-planning.jpg", alt: "string" },
    ],
  }

  const recommendations = [
    {
      id: "0001",
      slug: "bild-01",
      image: {
        src: "/assets/bathroom-planning.jpg",
        alt: "string",
      },
      featured: false,
      name: "BILD",
      description: `Poster, 41x51(16x20 ")`,
      price: 320,
    },
    {
      id: "0002",
      slug: "bild-02",
      image: {
        src: "/assets/bathroom-planning.jpg",
        alt: "string",
      },
      featured: false,
      name: "BILD",
      description: `Poster, 41x51(16x20 ")`,
      price: 320,
    },
    {
      id: "0003",
      slug: "bild-03",
      image: {
        src: "/assets/bathroom-planning.jpg",
        alt: "string",
      },
      featured: false,
      name: "BILD",
      description: `Poster, 41x51(16x20 ")`,
      price: 320,
    },
    {
      id: "0004",
      name: "BILD",
      slug: "bild-04",
      description: `Poster, 41x51(16x20 ")`,
      image: {
        src: "/assets/bathroom-planning.jpg",
        alt: "string",
      },
      featured: false,
      price: 320,
    },
  ]

  return (
    <div className="container min-h-screen ">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-x-8">
        <div className="space-y-8 relative">
          <div className="relative max-h-[560px]">
            <Image
              src={product.image.src}
              alt={product.image.alt}
              width={600}
              height={800}
              className="object-cover aspect-square"
            />
          </div>
          <ProductImagesCarousel images={product.images} />
        </div>

        <div>
          <h1 className="text-4xl font-semibold tracking-wide mb-3">
            {product.name}
          </h1>
          <p className="text-2xl font-semibold mb-3">{`$${product.price.toFixed(
            2
          )}`}</p>

          <section className="mb-8">
            <AddProductForm id={""} />
            <BuyNowButton />
            <AddToWishListButton />
          </section>

          <section>
            <p>{product.description}</p>

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
                <AccordionTrigger>Is it accessible?</AccordionTrigger>
                <AccordionContent>
                  Yes. It adheres to the WAI-ARIA design pattern.
                </AccordionContent>
              </AccordionItem>
            </Accordion>
          </section>

          <ShipReturns />
        </div>
      </div>

      <SectionHeader heading={`We Think You'll Love`}>
        <div className="container grid grid-cols-2 lg:grid-cols-4 ">
          {recommendations.map((recomendation, index) => (
            <ProductCard
              id={recomendation.id}
              name={recomendation.name}
              slug={recomendation.slug}
              description={recomendation.description}
              price={recomendation.price}
              image={recomendation.image}
            />
          ))}
        </div>
      </SectionHeader>

      <SectionHeader heading={`Product Coments`}>
        <div></div>
      </SectionHeader>
    </div>
  )
}

export default ProductDetailPage
