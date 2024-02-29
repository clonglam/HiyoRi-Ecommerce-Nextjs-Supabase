"use client"

import Image from "next/image"
import { FC } from "react"
import { DropzoneOptions, useDropzone } from "react-dropzone"

interface DropzoneProps extends DropzoneOptions {
  multiple?: boolean
  name: string
  previewUrl?: string
}

export const Dropzone: FC<DropzoneProps> = ({
  multiple,
  name,
  onDrop,
  previewUrl,

  ...rest
}) => {
  const { getRootProps, getInputProps } = useDropzone({
    onDrop,
    multiple,
    ...rest,
  })

  return (
    <div className="dropzone-section">
      <div {...getRootProps()} className="dropzone-container">
        <input {...getInputProps()} />
        {previewUrl ? (
          <PreivewsImages previewUrl={previewUrl} />
        ) : (
          <span aria-label="helper-text" className="helper-text">
            {`Drag & drop images to this area.`}
          </span>
        )}
      </div>
    </div>
  )
}

const PreivewsImages = ({ previewUrl }: { previewUrl: string }) => {
  return (
    <div className="preview-section">
      <div className="previews-container" key="featured Image">
        <Image alt="featured Image" src={previewUrl} width={120} height={120} />
        {/* <button
          className="remove-button"
          type="button"
          onClick={() => removeImage(index)}
        >
          X
        </button> */}
      </div>
    </div>
  )
}
