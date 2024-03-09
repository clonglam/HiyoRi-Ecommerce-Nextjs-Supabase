"use client";
import {
  Sheet,
  SheetContent,
  SheetFooter,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { SelectCollection } from "@/lib/supabase/schema";
import { usePathname, useRouter, useSearchParams } from "next/navigation";
import React from "react";
import { Button } from "../../../components/ui/button";
import { Separator } from "../../../components/ui/separator";

type Props = { collections: SelectCollection[] };

function FilterSheet({ collections }: Props) {
  const router = useRouter();
  const pathname = usePathname();
  const searchParams = useSearchParams();
  const [isPending, startTransition] = React.useTransition();

  return (
    <Sheet>
      <SheetTrigger asChild>
        <Button aria-label="Filter products" size="sm" disabled={isPending}>
          Filter
        </Button>
      </SheetTrigger>
      <SheetContent className="flex flex-col">
        <SheetHeader className="px-1">
          <SheetTitle>Filters</SheetTitle>
        </SheetHeader>
        <Separator />
        <div className="flex flex-1 flex-col gap-5 overflow-hidden px-1">
          {/* <div className="space-y-4">
            <h3 className="text-sm font-medium tracking-wide text-foreground">
              Price range ($)
            </h3>
            <Slider
              variant="range"
              thickness="thin"
              defaultValue={[0, 100]}
              max={100}
              step={1}
              value={priceRange}
              onValueChange={(value: typeof priceRange) => {
                setPriceRange(value)
              }}
            />
            <div className="flex items-center space-x-4">
              <Input
                type="number"
                inputMode="numeric"
                min={0}
                max={priceRange[1]}
                className="h-9"
                value={priceRange[0]}
                onChange={(e) => {
                  const value = Number(e.target.value)
                  setPriceRange([value, priceRange[1]])
                }}
              />
              <span className="text-muted-foreground">-</span>
              <Input
                type="number"
                inputMode="numeric"
                min={priceRange[0]}
                max={100}
                className="h-9"
                value={priceRange[1]}
                onChange={(e) => {
                  const value = Number(e.target.value)
                  setPriceRange([priceRange[0], value])
                }}
              />
            </div>
          </div> */}
          {collections?.length ? (
            <div className="space-y-4">
              <h3 className="text-sm font-medium tracking-wide text-foreground">
                Categories
              </h3>
              {/* <MultiSelect
                placeholder="Select categories"
                selected={selectedCategories}
                setSelected={setSelectedCategories}
                options={categories.map((c) => ({
                  label: toTitleCase(c),
                  value: c,
                }))}
              /> */}
            </div>
          ) : null}
          {collections ? (
            <div className="space-y-4">
              <h3 className="text-sm font-medium tracking-wide text-foreground">
                Subcategories
              </h3>
              {/* <MultiSelect
                placeholder="Select subcategories"
                selected={selectedSubcategories}
                setSelected={setSelectedSubcategories}
                options={subcategories}
              /> */}
            </div>
          ) : null}
          {false ? (
            <div className="space-y-3">
              {/* <div className="flex gap-2">
                <h3 className="flex-1 text-sm font-medium tracking-wide text-foreground">
                  Stores
                </h3>
                <div className="flex items-center space-x-2">
                  <Button
                    variant="ghost"
                    size="sm"
                    onClick={() => {
                      startTransition(() => {
                        router.push(
                          `${pathname}?${createQueryString({
                            store_page: Number(store_page) - 1,
                          })}`
                        )
                      })
                    }}
                    disabled={Number(store_page) === 1 || isPending}
                  >
                    <Icons.chevronLeft className="h-4 w-4" aria-hidden="true" />
                    <span className="sr-only">Previous store page</span>
                  </Button>
                  <Button
                    variant="ghost"
                    size="sm"
                    onClick={() => {
                      startTransition(() => {
                        router.push(
                          `${pathname}?${createQueryString({
                            store_page: Number(store_page) + 1,
                          })}`
                        )
                      })
                    }}
                    disabled={
                      Number(store_page) === storePageCount || isPending
                    }
                  >
                    <Icons.chevronRight
                      className="h-4 w-4"
                      aria-hidden="true"
                    />
                    <span className="sr-only">Next store page</span>
                  </Button>
                </div>
              </div> */}
              {/* <ScrollArea className="h-96">
                <div className="space-y-4">
                  {stores.map((store) => (
                    <div key={store.id} className="flex items-center space-x-2">
                      <Checkbox
                        id={`store-${store.id}`}
                        checked={storeIds?.includes(store.id) ?? false}
                        onCheckedChange={(value) => {
                          if (value) {
                            setStoreIds([...(storeIds ?? []), store.id])
                          } else {
                            setStoreIds(
                              storeIds?.filter((id) => id !== store.id) ?? null
                            )
                          }
                        }}
                      />
                      <Label
                        htmlFor={`store-${store.id}`}
                        className="line-clamp-1 text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                      >
                        {store.name}
                      </Label>
                    </div>
                  ))}
                </div>
              </ScrollArea> */}
            </div>
          ) : null}
        </div>
        <div>
          <Separator className="my-4" />
          <SheetFooter>
            {/* <Button
              aria-label="Clear Filters"
              variant="secondary"
              size="sm"
              className="w-full"
              onClick={() => {
                startTransition(() => {
                  router.push(
                    `${pathname}?${createQueryString({
                      price_range: 0 - 100,
                      store_ids: null,
                      categories: null,
                      subcategories: null,
                    })}`
                  )

                  setPriceRange([0, 100])
                  setSelectedCategories(null)
                  setSelectedSubcategories(null)
                  setStoreIds(null)
                })
              }}
              disabled={isPending}
            >
              Clear Filters
            </Button> */}
          </SheetFooter>
        </div>
      </SheetContent>
    </Sheet>
  );
}

export default FilterSheet;
