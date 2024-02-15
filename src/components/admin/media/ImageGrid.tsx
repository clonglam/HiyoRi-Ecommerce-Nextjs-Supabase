"use client"
import { DocumentType, gql } from "@/gql"

import { cn, keytoUrl } from "@/lib/utils"
import { FileWithPreview } from "@/types"
import Image from "next/image"
import Link from "next/link"
import { ReactNode } from "react"
import { Icons } from "../../icons"

const MediaGridFragment = gql(/* GraphQL */ `
  fragment MediaGridFragment on mediasEdge {
    cursor
    node {
      id
      alt
      key
    }
  }
`)

type ImageGridProps = {
  showAddMediaButton?: boolean
  AddMediaButtonComponent?: ReactNode
  containerClassName: string
  defaultImageId: string
  onClickHandler: (mediaId: string) => void
  uploadingFiles: FileWithPreview[]
  medias: DocumentType<typeof MediaGridFragment>[]
}

function ImageGrid({
  showAddMediaButton = true,
  AddMediaButtonComponent,
  containerClassName,
  onClickHandler,
  defaultImageId,
  uploadingFiles,
  medias,
}: ImageGridProps) {
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

      {uploadingFiles.map((file, index) => (
        <div key={index}>
          <Image
            src={file.preview}
            alt={file.name}
            width={120}
            height={120}
            onLoad={() => {
              URL.revokeObjectURL(file.preview)
            }}
          />
        </div>
      ))}
      {medias.map(({ node: media }) => (
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
      ))}
    </div>
  )
}

export default ImageGrid
