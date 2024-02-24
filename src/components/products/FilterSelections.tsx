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

type Props = {
  collectionsSection: SelectCollection[]
}

export type FilterFormData = z.infer<typeof filterSelectionSchema>

const filterSelectionSchema = z.object({
  sort: z.nativeEnum(SortEnum).nullable().optional(),
  collections: z.array(z.string()).nullable().optional(),
  pricerange: z.array(z.string()),
})

function FilterSelections({ collectionsSection }: Props) {
  const router = useRouter()
  const pathname = usePathname()

  const searchParams = useSearchParams()
  const [isLoading, setIsLoading] = useState<boolean>(false)

  const collections = searchParams.get("collections")
  const pricerange = searchParams.get("pricerange")

  const form = useForm<FilterFormData>({
    resolver: zodResolver(filterSelectionSchema),
    mode: "onChange",
    defaultValues: {
      sort: SortEnum[""],
      collections: collections ? collections.split(",") : [],
      pricerange: pricerange ? pricerange.split(",") : ["0", "5000"],
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
    <section className="mb-5">
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

            <FormField
              control={form.control}
              name="pricerange"
              render={({ field }) => (
                <FormItem>
                  <FormControl>
                    <DropdownMenu>
                      <DropdownMenuTrigger className="flex items-center">
                        Price Range
                        <Icons.chevronDown
                          width={25}
                          height={25}
                          strokeWidth={2}
                        />
                      </DropdownMenuTrigger>
                      <DropdownMenuContent className="p-5">
                        <DropdownMenuLabel>Price Range</DropdownMenuLabel>
                        <DropdownMenuSeparator />
                        <Range
                          step={1}
                          min={0}
                          max={5000}
                          values={
                            field.value?.length > 0
                              ? [
                                  parseInt(field.value[0]),
                                  parseInt(field.value[1]),
                                ]
                              : [0, 5000]
                          }
                          onChange={(data) =>
                            field.onChange([
                              data[0].toString(),
                              data[1].toString(),
                            ])
                          }
                          renderTrack={({ props, children }) => (
                            <div
                              {...props}
                              style={{
                                ...props.style,
                                height: "3px",
                                width: "100%",
                                backgroundColor: "#ccc",
                              }}
                            >
                              {children}
                            </div>
                          )}
                          renderThumb={({ props }) => (
                            <div
                              {...props}
                              style={{
                                ...props.style,
                                height: "20px",
                                width: "20px",
                                backgroundColor: "#232323",
                                borderRadius: "9999px",
                              }}
                            />
                          )}
                        />

                        <div className="mt-5">
                          Selected range: ${field.value ? field.value[0] : "0"}{" "}
                          -{" $"}
                          {field.value ? field.value[1] : "5000"}
                        </div>
                      </DropdownMenuContent>
                    </DropdownMenu>
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            {/* <FormField
              control={form.control}
              name="collections"
              render={({ field }) => (
                <FormItem>
                  <FormControl>
                    <FilterSelection
                      disabled={isLoading}
                      placeholder="Collections"
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
            /> */}
          </div>

          <div className="flex gap-x-5 items-center">
            <span>Sort by:</span>
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
          </div>

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

      <FilterBadges
        currentFilter={form.getValues()}
        onClickHandler={onRemoveHandller}
      />
    </section>
  )
}

export default FilterSelections
