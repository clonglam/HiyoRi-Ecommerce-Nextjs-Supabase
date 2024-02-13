"use client"
import React, { ReactNode } from "react"
import { DocumentType, gql } from "@/gql"
import Image from "next/image"
import { useQuery } from "@urql/next"
import Link from "next/link"
import { Icons } from "../icons"
import { keytoUrl } from "@/lib/s3/s3"
import { cn } from "@/lib/utils"
import { Button } from "../ui/button"

type Props = {
  showAddMediaButton?: boolean
  AddMediaButtonComponent?: ReactNode
  containerClassName: string
  defaultImageId: number
  onClickHandler: (mediaId: number) => void
}

export const FetchMediaGridQuery = gql(/* GraphQL */ `
  query FetchMediaGridQuery($first: Int, $after: Cursor) {
    mediasCollection(first: $first, after: $after) {
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

function ImageGrid({
  showAddMediaButton = true,
  AddMediaButtonComponent,
  containerClassName,
  onClickHandler,
  defaultImageId,
}: Props) {
  const [{ data, fetching, error }, refetch] = useQuery({
    query: FetchMediaGridQuery,
    variables: {
      first: 15,
    },
  })
  return (
    <div
      className={cn(
        "grid max-w-[1200px] mx-auto gap-x-3 gap-y-5 grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-8",
        containerClassName
      )}
    >
      {showAddMediaButton && (
        <Link
          href={"/admin/medias/new"}
          className=" h-[120px] w-[120px] border-2 border-dashed border-zinc-400 text-zinc-400 flex flex-col justify-center items-center"
        >
          <Icons.add size={32} />
          <p className="text-sm">Add media</p>
        </Link>
      )}

      {AddMediaButtonComponent}

      {data.mediasCollection.edges.map(({ node: media }) => (
        // <Link href={`/admin/medias/${media.id}`} key={media.key}>
        <button
          key={media.id}
          type="button"
          className={cn(
            "object-center group relative h-[120px] w-[120px]",
            defaultImageId === media.id && "ring-offset-2 ring-2"
          )}
          onClick={() => onClickHandler(media.id)}
        >
          <Image
            src={keytoUrl(media.key)}
            alt={media.alt}
            width={120}
            height={120}
            className={cn(
              "group-hover:opacity-30 transition-all duration-300 h-[120px] w-[120px] object-cover"
            )}
          />
        </button>
        // </Link>
      ))}
    </div>
  )
}

export default ImageGrid
