"use client";
import { Icons } from "@/components/layouts/icons";
import { Button } from "@/components/ui/button";
import { gql } from "@/gql";
import { FileWithPreview } from "@/types";
import { useQuery } from "@urql/next";
import { useRouter } from "next/navigation";
import React, { useEffect, useState } from "react";
import { FileWithPath, useDropzone } from "react-dropzone";
import ImagesGrid from "./ImageGrid";
import ImageGridSkeleton from "./ImageGridSkeleton";

interface UploadMediaContainerProps {
  onClickItemsHandler: (mediaId: string) => void;
  defaultImageId?: string;
}
function UploadMediaContainer({
  onClickItemsHandler,
  defaultImageId,
}: UploadMediaContainerProps) {
  const router = useRouter();
  const [uploadingImages, setUploadingImages] = useState<FileWithPreview[]>([]);
  const [lastCursor, setLastCursor] = React.useState<string | undefined>(
    undefined,
  );
  const [{ data, fetching, error }, refetch] = useQuery({
    query: MediasPageContentQuery,
    variables: {
      first: 16,
      after: lastCursor,
    },
  });

  const medias = data?.mediasCollection;

  const openMediaDetails = (mediaId: string) => {
    router.push(`/admin/medias/${mediaId}`);
  };

  const onDrop = async (acceptedFiles: FileWithPath[]) => {
    const uploadFiles = acceptedFiles.map((file) =>
      Object.assign(file, {
        preview: URL.createObjectURL(file),
      }),
    );

    setUploadingImages([...uploadingImages, ...uploadFiles]);

    const formData = new FormData();
    for (let i = 0; i < uploadFiles.length; i++) {
      formData.append(`files[${i}]`, uploadFiles[i]);
    }

    try {
      const response = await fetch("/api/medias", {
        method: "POST",
        body: formData,
      });

      const data = (await response.json()) as string[];

      if (data) {
        refetch({ requestPolicy: "network-only" });

        setUploadingImages(
          uploadingImages.filter((item) => data.includes(item.path)),
        );
      }
    } catch (error) {
      // console.error("Error uploading files:", error)
    }
  };

  useEffect(() => {
    return () =>
      uploadingImages.forEach((file) => URL.revokeObjectURL(file.preview));
  }, []);

  const { getRootProps, getInputProps, open, isDragActive } = useDropzone({
    onDrop,
    multiple: true,
    noClick: true,
    noKeyboard: true,
  });

  return (
    <div>
      {error && <p>Oh no... {error.message}</p>}

      {fetching && <ImageGridSkeleton />}

      {medias && (
        <>
          <div className="border border-dot border-zinc-300 p-5">
            <div {...getRootProps()} className="dropzone-container">
              <ImagesGrid
                medias={medias.edges}
                AddMediaButtonComponent={
                  <AddMediaButtonComponent open={open} />
                }
                uploadingFiles={uploadingImages}
                onClickHandler={onClickItemsHandler}
                defaultImageId={defaultImageId}
              />

              {medias.pageInfo.hasNextPage ? (
                <div className="flex justify-center content-center">
                  <Button
                    onClick={() => {
                      setLastCursor(medias.pageInfo.endCursor ?? undefined);
                    }}
                  >
                    Load more.
                  </Button>
                </div>
              ) : null}

              <input {...getInputProps()} />
              {isDragActive ? (
                <div className="w-full h-full min-h-[320px] flex items-center justify-center z-50">
                  Drop the Image here to upload the image.
                </div>
              ) : null}
            </div>
          </div>
        </>
      )}
    </div>
  );
}

const AddMediaButtonComponent = ({ open }: { open: () => void }) => {
  return (
    <button
      onClick={open}
      className=" h-[120px] w-[120px] border-2 border-dashed border-zinc-400 text-zinc-400 flex flex-col justify-center items-center"
    >
      <Icons.add size={32} />
    </button>
  );
};

export default UploadMediaContainer;

export const MediasPageContentQuery = gql(/* GraphQL */ `
  query MediasPageContentQuery($first: Int, $after: Cursor) {
    mediasCollection(
      first: $first
      after: $after
      orderBy: [{ created_at: DescNullsLast }]
    ) {
      __typename
      edges {
        node {
          id
          key
          alt
        }
      }
      pageInfo {
        hasNextPage
        hasPreviousPage
        endCursor
      }
    }
  }
`);
