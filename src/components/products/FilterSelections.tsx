"use client"
import { zodResolver } from "@hookform/resolvers/zod"
import React, { useEffect, useState } from "react"
import { useForm } from "react-hook-form"
import * as z from "zod"
import FilterSelection from "./FilterSelection"
import { Range } from "react-range"

import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
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
import {
  DropdownMenu,
  DropdownMenuCheckboxItem,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"

import FilterBadges from "./FilterBadges"
import { SortEnum } from "@/validations/products"
import { Icons } from "../icons"
import { Input } from "../ui/input"
import { Button } from "../ui/button"

type Props = {
  collectionsSection: SelectCollection[]
}

export type FilterFormData = z.infer<typeof filterSelectionSchema>

const SortEnumSchema = z.enum([
  "BEST_MATCH",
  "PRICE_LOW_TO_HIGH",
  "PRICE_HIGH_TO_LOW",
  "NEWEST",
  "NAME_ASCE",
])

const filterSelectionSchema = z.object({
  sort: SortEnumSchema.nullable().optional(),
  collections: z.array(z.string()).nullable().optional(),
  minPrice: z.number().optional(),
  maxPrice: z.number().optional(),
})

function FilterSelections({ collectionsSection }: Props) {
  const router = useRouter()
  const pathname = usePathname()

  const searchParams = useSearchParams()
  const [isLoading, setIsLoading] = useState<boolean>(false)

  const collections = searchParams.get("collections")
  const minPrice = searchParams.get("minPrice")
  const maxPrice = searchParams.get("maxPrice")

  const form = useForm<FilterFormData>({
    resolver: zodResolver(filterSelectionSchema),
    mode: "onChange",
    defaultValues: {
      sort: SortEnum[""],
      collections: collections ? collections.split(",") : [],
      minPrice: minPrice ? parseFloat(minPrice) : undefined,
      maxPrice: maxPrice ? parseFloat(maxPrice) : undefined,
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
      }, 300)
    })
    return () => subscription.unsubscribe()
  }, [form.handleSubmit, form.watch])

  const createQueryString = React.useCallback(
    (params: Record<string, string | number | string[] | null>) => {
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
    <section className="mb-3">
      <Form {...form}>
        <form
          onSubmit={form.handleSubmit(onSubmit)}
          className="flex justify-between items-center"
        >
          <div className="flex gap-x-5 items-center">
            <span>Filter:</span>

            <FormField
              control={form.control}
              name="collections"
              render={({ field }) => (
                <FormItem>
                  <FormControl>
                    <DropdownMenu>
                      <DropdownMenuTrigger className="flex items-center">
                        Collections
                        <Icons.chevronDown
                          width={25}
                          height={25}
                          strokeWidth={2}
                        />
                      </DropdownMenuTrigger>
                      <DropdownMenuContent>
                        <DropdownMenuLabel>Collections</DropdownMenuLabel>
                        <DropdownMenuSeparator />
                        {collectionsSection.map((collection) => (
                          <DropdownMenuCheckboxItem
                            key={collection.id}
                            checked={(field.value || []).includes(
                              collection.id
                            )}
                            onCheckedChange={() => {
                              const oldValue = field.value || []

                              const newdata = oldValue.includes(collection.id)
                                ? oldValue.filter(
                                    (item) => item !== collection.id
                                  )
                                : [...oldValue, collection.id]

                              return field.onChange(newdata)
                            }}
                          >
                            {collection.label}
                          </DropdownMenuCheckboxItem>
                        ))}
                      </DropdownMenuContent>
                    </DropdownMenu>
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            <DropdownMenu>
              <DropdownMenuTrigger className="flex items-center">
                Price Range
                <Icons.chevronDown width={25} height={25} strokeWidth={2} />
              </DropdownMenuTrigger>

              <DropdownMenuContent className="p-5 max-w-xl">
                <DropdownMenuLabel>Price Range</DropdownMenuLabel>
                <DropdownMenuSeparator />

                <div className="mt-5 flex px-5 items-end gap-x-5 place-items-center">
                  <div>
                    <FormLabel aria-label="minPrice" htmlFor="minPrice">
                      Min Price
                    </FormLabel>
                    <FormField
                      control={form.control}
                      name="minPrice"
                      render={({ field }) => (
                        <div className="relative">
                          <Input
                            {...field}
                            id="minPrice"
                            className="h-9 pl-5"
                            value={field.value}
                            type="number"
                            onChange={(e) => {
                              e.target.value === ""
                                ? field.onChange(undefined)
                                : field.onChange(e.target.valueAsNumber)
                            }}
                            placeholder="0.00"
                          />

                          <Icons.dollarSign className="w-4 h-4 absolute top-2 left-1" />
                        </div>
                      )}
                    />
                  </div>

                  <Icons.minus className="flex items-center justify-center h-9" />

                  <div className="">
                    <FormLabel aria-label="maxPrice" htmlFor="maxPrice">
                      Max Price
                    </FormLabel>
                    <FormField
                      control={form.control}
                      name="maxPrice"
                      render={({ field }) => (
                        <div className="relative">
                          <Input
                            {...field}
                            id="maxPrice"
                            className="h-9 pl-5"
                            type="number"
                            onChange={(e) => {
                              e.target.value === ""
                                ? field.onChange(undefined)
                                : field.onChange(e.target.valueAsNumber)
                            }}
                            placeholder="99999.99"
                          />
                          <Icons.dollarSign className="w-4 h-4 absolute top-2 left-1" />
                        </div>
                      )}
                    />
                  </div>

                  <Button
                    type="button"
                    onClick={() => {
                      form.setValue("minPrice", undefined)
                      form.setValue("maxPrice", undefined)
                    }}
                  >
                    Reset
                  </Button>
                </div>
              </DropdownMenuContent>
            </DropdownMenu>
          </div>

          <div className="flex gap-x-5 items-center">
            <FormLabel htmlFor="sort">Sort by:</FormLabel>
            <FormField
              control={form.control}
              name="sort"
              render={({ field }) => (
                <FormItem>
                  <FormControl>
                    <FilterSelection
                      id="sort"
                      disabled={isLoading}
                      onValueChange={(value) => field.onChange(value)}
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
          </div>
        </form>
      </Form>

      <Sheet>
        <SheetTrigger className="block md:hidden">All filters</SheetTrigger>
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

      <FilterBadges
        currentFilter={form.getValues()}
        onClickHandler={onRemoveHandller}
      />
    </section>
  )
}

export default FilterSelections
