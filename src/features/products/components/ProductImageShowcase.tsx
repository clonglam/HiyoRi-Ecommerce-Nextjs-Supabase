"use client";
import React, { useState } from "react";
import { gql, DocumentType } from "@/gql";

import Image from "next/image";
import { Icons } from "../../../components/layouts/icons";
import { keytoUrl } from "@/lib/utils";

type ProductImageShowcaseProps = React.HTMLAttributes<HTMLDivElement> & {
  data: DocumentType<typeof ProductImageShowcaseFragment>;
};

const ProductImageShowcaseFragment = gql(/* GraphQL */ `
  fragment ProductImageShowcaseFragment on products {
    id
    featuredImage: medias {
      id
      key
      alt
    }

    images: product_mediasCollection(orderBy: [{ priority: DescNullsLast }]) {
      edges {
        node {
          media {
            id
            key
            alt
          }
        }
      }
    }
  }
`);

function ProductImageShowcase({ data }: ProductImageShowcaseProps) {
  const allImages = [
    data.featuredImage,
    ...(data.images?.edges.map(({ node }) => node.media) || []),
  ];

  const [activeImageIndex, setActiveImageIndex] = useState(0);

  const nextImage = () => {
    if (activeImageIndex < allImages.length - 1) {
      setActiveImageIndex((prevIndex) => prevIndex + 1);
    }
  };

  // Function to navigate to the previous image
  const prevImage = () => {
    if (activeImageIndex > 0) {
      setActiveImageIndex((prevIndex) => prevIndex - 1);
    }
  };
  return (
    <section className="flex md:flex-row flex-col items-center gap-x-8 gap-y-5">
      {/* Active Image Display */}
      <div className="w-full max-w-2xl order-1 md:order-3 grow">
        {allImages[activeImageIndex] && (
          <Image
            src={keytoUrl(allImages[activeImageIndex].key)}
            alt={allImages[activeImageIndex].alt || "Product image"}
            className="w-full h-auto object-cover aspect-square mb-5"
            width={1024}
            height={1024}
          />
        )}
      </div>

      {/* Thumbnails */}
      <div className="relative order-2 overflow-x-auto w-full md:w-[100px] h-full">
        <div className="flex overflow-x-auto gap-x-5 gapy-y-5 order-2 justify-center flex-row md:flex-col">
          {allImages.map((image, index) => (
            <Image
              key={image.id}
              src={keytoUrl(image.key)}
              alt={image.alt || "Product image thumbnail"}
              width={100}
              height={100}
              className={` aspect-[1/1] object-cover cursor-pointer p-1 ${activeImageIndex === index ? "border-2 border-blue-500" : ""}`}
              onClick={() => setActiveImageIndex(index)}
            />
          ))}
        </div>

        <div className="md:hidden block">
          <button
            onClick={prevImage}
            className="absolute left-0 top-1/2 transform -translate-y-1/2 bg-gray-800 text-white p-2"
          >
            <Icons.chevronLeft />
          </button>

          <button
            onClick={nextImage}
            className="absolute right-0 top-1/2  md:top-unset transform -translate-y-1/2 bg-gray-800 text-white p-2"
          >
            <Icons.chevronRight />
          </button>
        </div>
      </div>
    </section>
  );
}

export default ProductImageShowcase;
