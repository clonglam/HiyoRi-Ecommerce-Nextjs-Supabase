"use client";
import { Spinner } from "@/components/ui/spinner";
import { DocumentType, gql } from "@/gql";
import { cn, keytoUrl } from "@/lib/utils";
import { FileWithPreview } from "@/types";
import Image from "next/image";
import { ReactNode } from "react";

type ImagesGridProps = {
  AddMediaButtonComponent?: ReactNode;
  UploadingMediaComponent?: ReactNode;
  containerClassName?: string;
  defaultImageId?: string;
  onClickHandler?: (mediaId: string) => void;
  uploadingFiles?: FileWithPreview[];
  medias: { node: DocumentType<typeof ImageGridFragment> }[];
};

function ImagesGrid({
  AddMediaButtonComponent,
  containerClassName,
  onClickHandler,
  defaultImageId,
  medias,
  UploadingMediaComponent,
  uploadingFiles = [],
}: ImagesGridProps) {
  return (
    <div
      className={cn(
        "grid max-w-[1200px] mx-auto gap-x-3 gap-y-5 grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-8",
        containerClassName,
      )}
    >
      {AddMediaButtonComponent}
      {UploadingMediaComponent}

      {uploadingFiles.map((file, index) => (
        <div
          key={`uploadingImage_${index}`}
          className="relative h-[120px] w-[120px] opacity-50"
        >
          <Image
            width={120}
            height={120}
            src={file.preview}
            alt={`uploadingImage_${index}`}
            className="h-[100px] w-[100px] object-cover"
          />
          <div className="absolute w-full h-full top-0 left-0 flex items-center justify-center">
            <Spinner />
          </div>
        </div>
      ))}

      {medias.map(({ node: media }) => (
        <button
          key={media.id}
          type="button"
          className={cn(
            "object-center group relative h-[120px] w-[120px]",
            defaultImageId === media.id && "ring-offset-2 ring-2",
          )}
          onClick={() => onClickHandler(media.id)}
        >
          <Image
            src={keytoUrl(media.key)}
            alt={media.alt}
            width={120}
            height={120}
            className={cn(
              "group-hover:opacity-30 transition-all duration-300 h-[120px] w-[120px] object-cover",
            )}
          />
        </button>
      ))}
    </div>
  );
}

export default ImagesGrid;

export const ImageGridFragment = gql(/* GraphQL */ `
  fragment ImageGridFragment on medias {
    id
    key
    alt
  }
`);
