"use client"
import React from "react"
import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import { Button } from "../ui/button"
import FilterSelection from "./FilterSelection"
import * as z from "zod"

import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form"

type Props = {}

const filterSelectionSchema = z.object({
  collection: z.number().min(0).max(8),
})

function FilterSelections({}: Props) {
  const form = useForm<z.infer<typeof filterSelectionSchema>>({
    resolver: zodResolver(filterSelectionSchema),
  })
  function onSubmit(values: z.infer<typeof filterSelectionSchema>) {
    // Do something with the form values.
    // ✅ This will be type-safe and validated.
    console.log(values)
  }
  return (
    <div className="flex space-x-3 mb-8">
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
          <FormField
            control={form.control}
            name="collection"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Collection</FormLabel>
                <FormControl>
                  <FilterSelection
                    items={[{ value: "armchair", label: "Armchair" }]}
                    placeholder="Category"
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <Button type="submit">Add to Cart</Button>
        </form>
      </Form>
    </div>
  )
}

export default FilterSelections
