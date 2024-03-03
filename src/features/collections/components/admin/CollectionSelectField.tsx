"use client"
import React from "react"
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"
import {
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form"
import { useFormContext } from "react-hook-form"
import { DocumentType, gql } from "@/gql"

export const CollectionSelectFieldFragment = gql(/* GraphQL */ `
  fragment CollectionSelectFieldFragment on collections {
    id
    label
  }
`)

type CollectionSelectFieldProps = {
  name: string
  label: string
  description: string
  collections: { node: DocumentType<typeof CollectionSelectFieldFragment> }[]
}

function CollectionSelectField({
  collections,
  name,
  label,
  description,
}: CollectionSelectFieldProps) {
  const { setValue, control } = useFormContext()
  return (
    <FormField
      control={control}
      name={name}
      render={({ field }) => (
        <FormItem>
          <FormLabel>{label}</FormLabel>
          <Select
            onValueChange={field.onChange}
            defaultValue={field.value || undefined}
          >
            <FormControl>
              <SelectTrigger>
                <SelectValue placeholder="Select a collection" />
              </SelectTrigger>
            </FormControl>
            <SelectContent>
              {collections.map(({ node: collection }) => (
                <SelectItem value={collection.id} key={collection.id}>
                  {collection.label}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
          <FormDescription>{description}</FormDescription>
          <FormMessage />
        </FormItem>
      )}
    />
  )
}

export default CollectionSelectField
