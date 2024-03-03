"use client";
import {
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";

import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

import { useFormContext } from "react-hook-form";

type BadgeSelectFieldProps = {
  name: string;
  label: string;
};

function BadgeSelectField({ name, label }: BadgeSelectFieldProps) {
  const { setValue, control } = useFormContext();

  return (
    <FormField
      control={control}
      name="badge"
      render={({ field }) => (
        <FormItem>
          <FormLabel>Badge</FormLabel>
          <Select
            onValueChange={field.onChange}
            defaultValue={field.value || undefined}
          >
            <FormControl>
              <SelectTrigger>
                <SelectValue placeholder="Add a badge for the Product" />
              </SelectTrigger>
            </FormControl>

            <SelectContent>
              <SelectGroup>
                <SelectLabel>Badge</SelectLabel>
                <SelectItem value="new_product">New Product</SelectItem>
                <SelectItem value="best_sale">Best Sale</SelectItem>
                <SelectItem value="featured">featured</SelectItem>
              </SelectGroup>
            </SelectContent>
          </Select>

          <FormDescription>
            Select a Badge if you want the Product card attached a badge.
          </FormDescription>
          <FormMessage />
        </FormItem>
      )}
    />
  );
}

export default BadgeSelectField;
