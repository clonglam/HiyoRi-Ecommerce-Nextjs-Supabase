import React from "react";
import Image from "next/image";
import Link from "next/link";
import { gql, DocumentType } from "@/gql";

import { Skeleton } from "@/components/ui/skeleton";
import { keytoUrl } from "@/lib/utils";

export const CollectionCardFragment = gql(/* GraphQL */ `
  fragment CollectionCardFragment on collections {
    id
    label
    slug
    featuredImage: medias {
      key
      alt
    }
  }
`);

function CollectionsCard({
  collection,
}: {
  collection: DocumentType<typeof CollectionCardFragment>;
}) {
  const { slug, label, featuredImage } = collection;

  return (
    <div className="rounded-xl overflow-hidden relative md:w-[350px] w-[220px]">
      <figure className="shrink-0">
        <Link
          href={`/collections/${slug}`}
          className="overflow-hidden rounded-xl relative"
        >
          <Image
            src={keytoUrl(featuredImage.key)}
            height={200}
            width={350}
            className="aspect-[16/9] opacity-65 h-fit w-fit object-cover rounded-xl hover:scale-[1.02] hover:opacity-80 transition-all duration-500"
            alt={featuredImage.alt}
          />
          <figcaption className="absolute bottom-3 left-3 text-sm md:text-lg font-medium text-foreground">
            {label}
          </figcaption>
        </Link>
      </figure>
    </div>
  );
}

export default CollectionsCard;

export const CollectionsCardSkeleton = () => (
  <Skeleton className="rounded-xl overflow-hidden relative h-[200px] md:w-[350px] w-[220px]" />
);
