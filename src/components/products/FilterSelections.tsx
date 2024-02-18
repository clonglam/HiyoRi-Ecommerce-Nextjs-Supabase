"use client"
import { zodResolver } from "@hookform/resolvers/zod"
import React, { useEffect, useState } from "react"
import { useForm } from "react-hook-form"
import * as z from "zod"
import FilterSelection from "./FilterSelection"

import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormMessage,
} from "@/components/ui/form"
import { SelectCollection } from "@/lib/supabase/schema"
import { usePathname, useRouter, useSearchParams } from "next/navigation"
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "../ui/sheet"
import FilterBadges from "./FilterBadges"
import { SortEnum } from "@/validations/products"

type Props = {
  collections: SelectCollection[]
}

export type FilterFormData = z.infer<typeof filterSelectionSchema>

// export enum PriceRangeEnum {
//   "0-5" = "$0.00 - $4.99",
//   "5-10" = "$5.00 - $9.99",
//   "10-15" = "$10.00 - $15.99",
//   "0-5" = "$.00 - $19.99",
// }

const filterSelectionSchema = z.object({
  sort: z.nativeEnum(SortEnum).nullable().optional(),
  collection: z.string().nullable().optional(),
})

function FilterSelections({ collections }: Props) {
  const router = useRouter()
  const pathname = usePathname()
  const searchParams = useSearchParams()
  const [isLoading, setIsLoading] = useState<boolean>(false)

  const form = useForm<FilterFormData>({
    resolver: zodResolver(filterSelectionSchema),
    mode: "onChange",
    defaultValues: {
      sort: SortEnum[""],
      collection: searchParams.get("collection"),
    },
  })
  // Deboundce Submit
  useEffect(() => {
    let timer
    const subscription = form.watch(() => {
      if (timer) clearTimeout(timer)
      setIsLoading(true)

      timer = setTimeout(() => {
        form.handleSubmit(onSubmit)()
        setIsLoading(false)
      }, 1000)
    })
    return () => subscription.unsubscribe()
  }, [form.handleSubmit, form.watch])

  const createQueryString = React.useCallback(
    (params: Record<string, string | number | null>) => {
      const newSearchParams = new URLSearchParams(searchParams?.toString())

      for (const [key, value] of Object.entries(params)) {
        if (!value || value === "") {
          newSearchParams.delete(key)
        } else {
          newSearchParams.set(key, String(value))
        }
      }

      return newSearchParams.toString()
    },
    [searchParams]
  )
  const onRemoveHandller = (key: keyof FilterFormData) => {
    const newSearchParams = new URLSearchParams(searchParams?.toString())
    newSearchParams.delete(key)
    form.setValue(key, undefined)
    router.push(pathname + "?" + newSearchParams.toString())
  }

  function onSubmit(values: FilterFormData) {
    router.push(pathname + "?" + createQueryString(values))
  }
  return (
    <section className="mb-5">
      <div className="flex space-x-3 mb-3">
        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className="flex gap-x-8">
            <FormField
              control={form.control}
              name="sort"
              render={({ field }) => (
                <FormItem>
                  <FormControl>
                    <FilterSelection
                      disabled={isLoading}
                      onValueChange={(value) => field.onChange(SortEnum[value])}
                      defaultValue={field.value}
                      items={Object.entries(SortEnum).map(([key, value]) => ({
                        value: key,
                        label: value,
                      }))}
                      placeholder="Sort"
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="collection"
              render={({ field }) => (
                <FormItem>
                  <FormControl>
                    <FilterSelection
                      disabled={isLoading}
                      placeholder="Collection"
                      onValueChange={field.onChange}
                      defaultValue={field.value}
                      items={collections.map(({ id, label }) => ({
                        value: id,
                        label: label,
                      }))}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            {/* <FormField
              control={form.control}
              name="collection"
              render={({ field }) => (
                <FormItem>
                  <FormControl>
                    <FilterSelection
                      disabled={isLoading}
                      onValueChange={(value) => field.onChange(SortEnum[value])}
                      defaultValue={field.value}
                      items={Object.entries(SortEnum).map(([key, value]) => ({
                        value: key,
                        label: value,
                      }))}
                      placeholder="Price Range"
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            /> */}
          </form>
        </Form>

        <Sheet>
          <SheetTrigger>All filters</SheetTrigger>
          <SheetContent>
            <SheetHeader>
              <SheetTitle>Are you absolutely sure?</SheetTitle>
              <SheetDescription>
                This action cannot be undone. This will permanently delete your
                account and remove your data from our servers.
              </SheetDescription>
            </SheetHeader>
          </SheetContent>
        </Sheet>
      </div>
      <FilterBadges
        currentFilter={form.getValues()}
        onClickHandler={onRemoveHandller}
      />
    </section>
  )
}

export default FilterSelections
