import * as React from "react"

import { Card, CardContent } from "@/components/ui/card"
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel"
import Image from "next/image"

interface ProductImagesCarouselProps {
  images: { src: string; alt: string }[]
}

export function ProductImagesCarousel({ images }: ProductImagesCarouselProps) {
  return (
    <Carousel className="w-full max-w-sm">
      <CarouselContent className="-ml-1">
        {images.map(({ src, alt }, index) => (
          <CarouselItem
            key={index}
            className="relative pl-1 md:basis-1/2 lg:basis-1/3"
          >
            <Image
              src={src}
              alt={alt}
              width={100}
              height={100}
              className="aspect-square object-cover"
            />
          </CarouselItem>
        ))}
      </CarouselContent>
      <CarouselPrevious />
      <CarouselNext />
    </Carousel>
  )
}
