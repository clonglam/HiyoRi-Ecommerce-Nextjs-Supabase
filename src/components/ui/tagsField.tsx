// TagsField.tsx
import { FC } from "react"
import { useFormContext, Controller } from "react-hook-form"
import dynamic from "next/dynamic"

const TagsInput = dynamic(() => import("./tagsInput"), {
  ssr: false,
})

interface TagsFieldProps {
  name: string
  defaultValue?: string[]
}

export const TagsField: FC<TagsFieldProps> = ({ name, defaultValue }) => {
  const { control } = useFormContext() // Use the form context

  return (
    <Controller
      control={control}
      name={name}
      defaultValue={defaultValue || []}
      render={({ field: { onChange, onBlur, value } }) => (
        <TagsInput
          tags={value} // Pass the current value of tags
          setTags={onChange} // Pass the method to update the tags
          onBlur={onBlur} // Pass the onBlur method
        />
      )}
    />
  )
}

export default TagsField
