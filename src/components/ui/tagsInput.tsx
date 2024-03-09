// TagsInput.tsx
import React, { ChangeEvent, KeyboardEvent, useState, FC } from "react";
import { Input } from "./input";
import { Badge } from "./badge";
import { Icons } from "../layouts/icons";

interface TagsInputProps {
  tags: string[];
  setTags: (newTags: string[]) => void;
  onBlur: () => void;
  placeholder?: string;
}

const TagsInput: FC<TagsInputProps> = ({
  tags,
  setTags,
  onBlur,
  placeholder,
}) => {
  const [input, setInput] = useState<string>("");

  const handleInputChange = (e: ChangeEvent<HTMLInputElement>) => {
    setInput(e.target.value);
  };

  const addTag = () => {
    if (input && !tags.includes(input)) {
      // Prevent adding duplicates and empty tags
      setTags([...tags, input]);
      setInput(""); // Clear input field after adding
    }
  };

  const removeTag = (indexToRemove: number) => {
    setTags(tags.filter((_, index) => index !== indexToRemove));
  };

  const handleKeyDown = (e: KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter") {
      e.preventDefault(); // Prevent form submission
      addTag();
    }
  };

  // Call onBlur when the input loses focus
  const handleBlur = () => {
    onBlur();
  };

  return (
    <div className="relative flex flex-wrap items-center border border-black p-2 gap-x-3 gap-y-4">
      {tags.map((tag, index) => (
        <Badge key={index} className="rounded-full">
          {tag}
          <button
            type="button"
            onClick={() => removeTag(index)}
            className="text-white ml-2"
          >
            <Icons.close height={10} width={10} />
          </button>
        </Badge>
      ))}

      <Input
        variant="ghost"
        className="h-6 mx-2 w-12 flex-grow"
        type="text"
        value={input}
        onChange={handleInputChange}
        onKeyDown={handleKeyDown}
        placeholder={placeholder || "Project Tag"}
        onBlur={handleBlur} // Notify React Hook Form on blur
      />
      <button type="button" onClick={addTag}>
        {/* Add Tag */}
      </button>
    </div>
  );
};

export default TagsInput;
