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
import { Props } from "./page"

export function ProductDetailPage({}: Props) {
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

          <AddProductForm />

          <p>{product.description}</p>

          <Accordion type="single" collapsible>
            <AccordionItem value="item-1">
              <AccordionTrigger>Is it accessible?</AccordionTrigger>
              <AccordionContent>
                Yes. It adheres to the WAI-ARIA design pattern.
              </AccordionContent>
            </AccordionItem>
          </Accordion>
        </div>
      </div>
    </div>
  )
}
