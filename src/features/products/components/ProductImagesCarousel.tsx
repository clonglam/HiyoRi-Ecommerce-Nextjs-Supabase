import * as React from "react";

import { Card, CardContent } from "@/components/ui/card";
import { gql, DocumentType } from "@/gql";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import Image from "next/image";
import { keytoUrl } from "@/lib/utils";

type ProductImagesCarouselProps = React.ComponentProps<typeof Carousel> & {
  images: DocumentType<typeof CarouselImagesFragment>[];
};

const CarouselImagesFragment = gql(/* GraphQL */ `
  fragment CarouselImagesFragment on product_mediasEdge {
    node {
      id
      media {
        key
        alt
      }
    }
  }
`);

export function ProductImagesCarousel({ images }: ProductImagesCarouselProps) {
  return (
    <Carousel className="w-full max-w-sm">
      <CarouselContent className="-ml-1">
        {images.map(({ node }) => (
          <CarouselItem
            key={node.id}
            className="relative pl-1 md:basis-1/2 lg:basis-1/3"
          >
            <Image
              src={keytoUrl(node.media.key)}
              alt={node.media.alt}
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
  );
}
