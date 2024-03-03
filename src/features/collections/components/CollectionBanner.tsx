import { gql, DocumentType } from "@/gql";
import { keytoUrl } from "@/lib/utils";
import Image from "next/image";
import React from "react";

const CollectionBannerFragment = gql(/* GraphQL */ `
  fragment CollectionBannerFragment on collections {
    id
    label
    slug
    featuredImage: medias {
      id
      key
      alt
    }
  }
`);

function CollectionBanner({
  collectionBannerData,
}: {
  collectionBannerData: DocumentType<typeof CollectionBannerFragment>;
}) {
  const { label, featuredImage } = collectionBannerData;
  return (
    <div className="relative w-full md:container-2xl mx-auto h-[220px] md:h-[280px] overflow-hidden object-center object-cover mb-8">
      <Image
        src={keytoUrl(featuredImage.key)}
        alt={featuredImage.alt}
        width={720}
        height={400}
        className="object-center object-cover w-full h-[290px] opacity-50"
      />
      <h1 className="z-8 absolute bottom-8 left-8 text-2xl md:text-5xl font-medium">
        {label}
      </h1>
    </div>
  );
}

export default CollectionBanner;
