import React, { ReactComponentElement } from "react"
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "../ui/select"

type Selection = { value: string; label: string }

type SelectionFilterProps = React.ComponentProps<typeof Select> & {
  selectionLabel?: string
  items: Selection[]
  placeholder?: string
}

function FilterSelection({
  items,
  selectionLabel = "",
  placeholder = "",
  ...props
}: SelectionFilterProps) {
  return (
    <Select {...props}>
      <SelectTrigger className="min-w-[90px] max-w-[180px] rounded-full">
        <SelectValue placeholder={placeholder} />
      </SelectTrigger>

      <SelectContent>
        <SelectGroup>
          <SelectLabel>{selectionLabel}</SelectLabel>
          {items.map((item, index) => (
            <SelectItem key={index} value={item.value}>
              {item.label}
            </SelectItem>
          ))}
        </SelectGroup>
      </SelectContent>
    </Select>
  )
}

export default FilterSelection
