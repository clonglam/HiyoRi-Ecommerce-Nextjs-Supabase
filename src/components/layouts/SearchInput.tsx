"use client";
import { zodResolver } from "@hookform/resolvers/zod";
import { useState } from "react";
import { useForm } from "react-hook-form";
import * as z from "zod";
import { Button } from "../ui/button";

import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormMessage,
} from "@/components/ui/form";
import { cn } from "@/lib/utils";
import { Icons } from "./icons";
import { Input } from "../ui/input";
import { useRouter, useSearchParams } from "next/navigation";

const filterSelectionSchema = z.object({
  search: z.string(),
});

function SearchInput() {
  const router = useRouter();
  const searchParams = useSearchParams();
  const [isFocused, setIsFocused] = useState(false);

  const form = useForm<z.infer<typeof filterSelectionSchema>>({
    resolver: zodResolver(filterSelectionSchema),
    defaultValues: { search: searchParams.get("search") || "" },
  });

  function onSubmit({ search }: z.infer<typeof filterSelectionSchema>) {
    !search || search.length === 0
      ? router.push(`/shop`)
      : router.push(`/shop/?search=${search}`);
  }

  return (
    <Form {...form}>
      <form
        onSubmit={form.handleSubmit(onSubmit)}
        className="relative bg-background/95 p-4 backdrop-blur supports-[backdrop-filter]:bg-background/60 rounded-full flex-1"
      >
        <Icons.search
          className={cn(
            isFocused ? "scale-0" : "scale-100",
            "absolute left-8 top-6 h-6 w-4 text-muted-foreground transition-all duration-500",
          )}
        />

        <FormField
          control={form.control}
          name="search"
          render={({ field }) => (
            <FormItem>
              <FormControl>
                <Input
                  {...field}
                  placeholder="Find your Favour Furniture and Bring them to Home"
                  className={cn(
                    isFocused ? "pl-6" : "pl-10",
                    "rounded-full transition-all duration-500",
                  )}
                  onFocus={() => setIsFocused(true)}
                  onBlur={() => setIsFocused(false)}
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <Button className="absolute right-4 top-4" type="submit" variant="link">
          <Icons.search
            className={cn(
              "h-4 w-4 text-muted-foreground transition-all duration-200",
              isFocused ? "opacity-1 scale-1" : "opacity-0 scale-0",
            )}
          />
        </Button>
      </form>
    </Form>
  );
}

export default SearchInput;
