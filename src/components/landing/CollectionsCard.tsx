import React from "react"
import { ScrollArea, ScrollBar } from "@/components/ui/scroll-area"
import Image from "next/image"
import Link from "next/link"
import { ImageType } from "@/types"
import { gql, DocumentType } from "@/gql"
import { keytoUrl } from "@/lib/s3/s3"

const CollectionCardFragment = gql(/* GraphQL */ `
  fragment CollectionCardFragment on collections {
    id
    label
    slug
    featuredImage: medias {
      key
      alt
    }
  }
`)

function CollectionsCard({
  collection,
}: {
  collection: DocumentType<typeof CollectionCardFragment>
}) {
  const { id, slug, label, featuredImage } = collection

  return (
    <figure key={id} className="shrink-0">
      <Link
        href={`/collection/${slug}`}
        className="overflow-hidden rounded-md relative"
      >
        <Image
          src={keytoUrl(featuredImage.key)}
          height={200}
          width={350}
          className="aspect-[16/9] opacity-65 h-fit w-fit object-cover rounded-md "
          alt={featuredImage.alt}
        />
        <figcaption className="absolute bottom-3 left-3 text-md text-foreground">
          {label}
        </figcaption>
      </Link>
    </figure>
  )
}

export default CollectionsCard
