"use client"
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"
import React, { useState } from "react"
import { useDropzone } from "react-dropzone"
import { Icons } from "../icons"
import ImageGrid from "./ImageGrid"
import ImagePreviewCard from "./ImagePreviewCard"

type Props = {
  onChange: (data: number) => void
  defaultValue?: number
  multiple?: boolean
  value: number
}

function ImageDialog({
  multiple = false,
  defaultValue,
  onChange,
  value,
}: Props) {
  const [previewUrl, setPreviewUrl] = useState<string | null>(null)
  const [dialogOpen, setDialogOpen] = React.useState(false)
  const onClickHandler = (mediaId: number) => {
    onChange(mediaId)
    setDialogOpen(false)
  }
  const onDrop = (data: any) => {
    console.log("Recieved data", data)
  }

  const { getRootProps, getInputProps, open, isDragActive } = useDropzone({
    onDrop,
    multiple,
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
                onClick={() => {
                  console.log("")
                }}
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
                    defaultImageId={value}
                    showAddMediaButton={false}
                    containerClassName={"gap-x-8"}
                    onClickHandler={onClickHandler}
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
