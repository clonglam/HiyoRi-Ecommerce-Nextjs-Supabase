"use client"
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"
import { gql } from "@/gql"
import { SelectMedia } from "@/lib/supabase/schema"
import { FileWithPreview } from "@/types"
import { useQuery } from "@urql/next"
import React, { useEffect, useState } from "react"
import { FileWithPath, useDropzone } from "react-dropzone"
import { Icons } from "../../icons"
import ImageGrid from "./ImageGrid"
import ImagePreviewCard from "./ImagePreviewCard"

type Props = {
  onChange: (data: string) => void
  defaultValue?: string
  multiple?: boolean
  value: string
}
export const FetchMediaGridQuery = gql(/* GraphQL */ `
  query FetchMediaGridQuery($first: Int, $after: Cursor) {
    mediasCollection(first: $first, after: $after) {
      __typename
      edges {
        ...MediaGridFragment
      }
    }
  }
`)

function ImageDialog({
  multiple = false,
  defaultValue,
  onChange,
  value,
}: Props) {
  const [files, setFiles] = useState<FileWithPreview[]>([])
  const [dialogOpen, setDialogOpen] = React.useState(false)

  const [{ data, fetching, error }, refetch] = useQuery({
    query: FetchMediaGridQuery,
    variables: {
      first: 15,
    },
  })

  const onClickHandler = (mediaId: string) => {
    onChange(mediaId)
    setDialogOpen(false)
  }

  const onDrop = async (acceptedFiles: FileWithPath[]) => {
    // console.log("Recieved data", acceptedFiles)

    const uploadFiles = acceptedFiles.map((file) =>
      Object.assign(file, {
        preview: URL.createObjectURL(file),
      })
    )
    setFiles(uploadFiles)

    const formData = new FormData()
    for (let i = 0; i < uploadFiles.length; i++) {
      formData.append(`files[${i}]`, uploadFiles[i])
    }

    try {
      const response = await fetch("/api/medias", {
        method: "POST",
        body: formData,
      })
      const data = (await response.json()) as {
        index: string
        media: SelectMedia
      }[]

      // console.log("CLient Recieved Data", data)
      if (data) {
        // setUploadedFilesUrls(data.uploadedFilesUrls)
      }
    } catch (error) {
      console.error("Error uploading files:", error)
      // Handle upload error
    }
  }

  useEffect(() => {
    // Make sure to revoke the data uris to avoid memory leaks, will run on unmount
    return () => files.forEach((file) => URL.revokeObjectURL(file.preview))
  }, [])

  const { getRootProps, getInputProps, open, isDragActive } = useDropzone({
    onDrop,
    multiple: true,
    noClick: true,
    noKeyboard: true,
  })

  return (
    <div>
      <Dialog open={dialogOpen} onOpenChange={setDialogOpen}>
        <DialogTrigger>
          <div>
            {value ? (
              <ImagePreviewCard
                key={value}
                onClick={() => {}}
                mediaId={value}
              />
            ) : (
              "Select / Add Image"
            )}
          </div>
        </DialogTrigger>

        <DialogContent className="max-w-[1080px] min-h-full md:min-h-[480px]">
          <DialogHeader>
            <DialogTitle className="mb-5">Image Gallery</DialogTitle>

            <div className="border border-dot border-zinc-300 p-5">
              <div {...getRootProps()} className="dropzone-container">
                <input {...getInputProps()} />
                {isDragActive ? (
                  <div className="w-full h-full min-h-[320px] flex items-center justify-center">
                    Drop the Image here to upload the image.
                  </div>
                ) : (
                  <ImageGrid
                    uploadingFiles={files}
                    defaultImageId={value}
                    showAddMediaButton={false}
                    containerClassName={"gap-x-8"}
                    onClickHandler={onClickHandler}
                    medias={data.mediasCollection.edges}
                    AddMediaButtonComponent={
                      <button
                        type="button"
                        onClick={open}
                        className=" h-[120px] w-[120px] border-2 border-dashed border-zinc-400 text-zinc-400 flex flex-col justify-center items-center"
                      >
                        <Icons.add size={32} />
                        <p className="text-sm">Add media</p>
                      </button>
                    }
                  />
                )}
              </div>
            </div>
          </DialogHeader>
        </DialogContent>
      </Dialog>
    </div>
  )
}

export default ImageDialog
