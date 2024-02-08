// TagsInput.tsx
import React, { ChangeEvent, KeyboardEvent, useState, FC } from "react"
import { Input } from "./input"

interface TagsInputProps {
  tags: string[]
  setTags: (newTags: string[]) => void
  onBlur: () => void
  placeholder?: string
}

const TagsInput: FC<TagsInputProps> = ({
  tags,
  setTags,
  onBlur,
  placeholder,
}) => {
  const [input, setInput] = useState<string>("")

  const handleInputChange = (e: ChangeEvent<HTMLInputElement>) => {
    setInput(e.target.value)
  }

  const addTag = () => {
    if (input && !tags.includes(input)) {
      // Prevent adding duplicates and empty tags
      setTags([...tags, input])
      setInput("") // Clear input field after adding
    }
  }

  const removeTag = (indexToRemove: number) => {
    setTags(tags.filter((_, index) => index !== indexToRemove))
  }

  const handleKeyDown = (e: KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter") {
      e.preventDefault() // Prevent form submission
      addTag()
    }
  }

  // Call onBlur when the input loses focus
  const handleBlur = () => {
    onBlur()
  }

  return (
    <div>
      <Input
        type="text"
        value={input}
        onChange={handleInputChange}
        onKeyDown={handleKeyDown}
        placeholder={placeholder || "Project Tag"}
        onBlur={handleBlur} // Notify React Hook Form on blur
      />
      <button type="button" onClick={addTag}>
        Add Tag
      </button>
      <div>
        {tags.map((tag, index) => (
          <div key={index}>
            {tag}{" "}
            <button type="button" onClick={() => removeTag(index)}>
              x
            </button>
          </div>
        ))}
      </div>
    </div>
  )
}

export default TagsInput
