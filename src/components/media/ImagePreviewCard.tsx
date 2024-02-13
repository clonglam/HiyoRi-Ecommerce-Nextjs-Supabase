"use client"
import { keytoUrl } from "@/lib/s3/s3"
import Image from "next/image"
import React from "react"
import { Card } from "../ui/card"
import { DocumentType, gql } from "@/gql"

import { SelectMedia } from "@/lib/supabase/schema"
import { useQuery } from "@urql/next"
import { Skeleton } from "../ui/skeleton"
import { Icons } from "../icons"
import { cn } from "@/lib/utils"

interface ImagePreviewCard extends React.ComponentProps<typeof Card> {
  onClick: () => void
  mediaId: number
}

export const FetchMediaQuery = gql(/* GraphQL */ `
  query FetchMediaQuery($mediaId: Int) {
    mediasCollection(filter: { id: { eq: $mediaId } }) {
      edges {
        node {
          id
          alt
          key
        }
      }
    }
  }
`)

function ImagePreviewCard({ mediaId, onClick }: ImagePreviewCard) {
  const [{ data, fetching, error }, refetch] = useQuery({
    query: FetchMediaQuery,
    variables: {
      mediaId: mediaId,
    },
  })

  const media = data.mediasCollection.edges[0].node

  if (error || !media) return <div>Error! Media fetch error</div>

  if (fetching)
    return (
      <div>
        <Skeleton />
      </div>
    )
  return (
    <Card className="group relative">
      <div className="relative">
        <Image
          className="group-hover:opacity-80 transition-all duration-200"
          src={keytoUrl(media.key)}
          alt={media.alt}
          width={120}
          height={120}
        />
        <Icons.edit
          className={cn(
            "absolute w-5 h-5 right-2 top-2 hidden group-hover:block"
          )}
        />
      </div>
    </Card>
  )
}

export default ImagePreviewCard
