import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import React from "react";

type Selection = { value: string; label: string };

type SelectionFilterProps = React.ComponentProps<typeof Select> & {
  id: string;
  selectionLabel?: string;
  items: Selection[];
  placeholder?: string;
  className?: string;
};

function SortSelection({
  items,
  selectionLabel = "",
  placeholder = "",
  className = "",
  ...props
}: SelectionFilterProps) {
  return (
    <Select {...props}>
      <SelectTrigger className="min-w-[90px] max-w-[180px] border-0 ring-0 focus:ring-0 focus-visible:ring-0">
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
  );
}

export default SortSelection;
