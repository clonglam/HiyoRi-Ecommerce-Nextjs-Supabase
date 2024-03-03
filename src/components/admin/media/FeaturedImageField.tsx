"use client"
import { FC, useCallback, useEffect, useState } from "react"
import { FileWithPath } from "react-dropzone"
import { Controller, useFormContext } from "react-hook-form"
import { Dropzone } from "./Dropzone"
import { nanoid } from "nanoid"

export const FeaturedImageField: FC<{
  name: string
  defaultValue?: number
  containerClassName?: string
}> = ({ name, defaultValue, ...rest }) => {
  const { setValue, control } = useFormContext()
  const [previewUrl, setPreviewUrl] = useState<string | undefined>(undefined)

  useEffect(() => {
    if (defaultValue) {
      fetch(`/medias/${defaultValue}`)
        .then((res) => res.json())
        .then((data) => {
          setPreviewUrl(data.preview)
        })
        .catch((err) => {
          // console.log(err.message)
        })
    }
  }, [defaultValue])

  const onDrop = useCallback(
    async (acceptedFiles: FileWithPath[]) => {
      if (acceptedFiles.length > 0) {
        const id = nanoid()
        const formData = new FormData()
        formData.append("image", acceptedFiles[0])
        formData.append("name", id)

        const response = await fetch("/api/medias", {
          method: "POST",
          body: formData,
        })

        const json = (await response.json()) as {
          data: { imageUrl: string; featuredId: string }
          preview: string
        }
        setValue(name, json.data.featuredId)
        setPreviewUrl(json.preview)
      }
    },
    [name, setValue]
  )

  return (
    <Controller
      render={({ field }) => (
        <Dropzone
          multiple={false}
          name={name}
          onDrop={onDrop}
          previewUrl={previewUrl}
          {...rest}
        />
      )}
      control={control}
      name={name}
      defaultValue={defaultValue}
    />
  )
}

export default FeaturedImageField
