import { Icons } from "@/components/layouts/icons";
import {
  DropdownMenu,
  DropdownMenuCheckboxItem,
  DropdownMenuContent,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { DropdownMenuTriggerProps } from "@radix-ui/react-dropdown-menu";

interface CollectionsSelectionProps extends DropdownMenuTriggerProps {
  selections: { id: string; label: string }[];
  value: string[];
  onCheckedChange: (id: string) => void;
}

function CollectionsSelection({
  selections,
  value,
  onCheckedChange,
  ...props
}: CollectionsSelectionProps) {
  return (
    <DropdownMenu>
      <DropdownMenuTrigger {...props}>
        Collections
        <Icons.chevronDown width={25} height={25} strokeWidth={2} />
      </DropdownMenuTrigger>
      <DropdownMenuContent>
        <DropdownMenuLabel>Collections</DropdownMenuLabel>
        <DropdownMenuSeparator />
        {selections.map((collection) => (
          <DropdownMenuCheckboxItem
            key={collection.id}
            checked={(value || []).includes(collection.id)}
            onCheckedChange={() => onCheckedChange(collection.id)}
          >
            {collection.label}
          </DropdownMenuCheckboxItem>
        ))}
      </DropdownMenuContent>
    </DropdownMenu>
  );
}

export default CollectionsSelection;
