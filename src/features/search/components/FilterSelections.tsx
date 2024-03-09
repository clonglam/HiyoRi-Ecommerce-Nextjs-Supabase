"use client";
import { useCallback, useEffect, useState } from "react";
import * as z from "zod";

import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { SelectCollection } from "@/lib/supabase/schema";
import { usePathname, useRouter, useSearchParams } from "next/navigation";

import { Icons } from "@/components/layouts/icons";
import PriceRange from "@/components/ui/PriceRange";
import { useDebounce } from "@/features/cms/hooks/use-debounce";
import CollectionsSelection from "@/features/search/components/CollectionsSelection";
import { SearchQuery } from "@/features/search/hooks/useSearchStore";
import { SortEnum } from "@/validations/products";
import React from "react";
import FilterBadges from "./FilterBadges";
import SortSelection from "./SortSelection";

type Props = {
  collectionsSection?: SelectCollection[];
  shopLayout?: boolean;
};

function FilterSelections({ collectionsSection, shopLayout = true }: Props) {
  const router = useRouter();
  const pathname = usePathname();
  const [isPending, startTransition] = React.useTransition();

  const [query, setQuery] = useState<SearchQuery>({
    collections: [],
  });

  const searchParams = useSearchParams();
  const [isLoading, setIsLoading] = useState<boolean>(false);

  useEffect(() => {
    const priceRange = searchParams.get("price_range");
    const range = priceRange ? priceRange.split("-") : undefined;

    const collections =
      (JSON.parse(searchParams.get("collections")) as string[]) ?? [];
    const sort = searchParams.get("sort") ?? undefined;
    const search = searchParams.get("search") ?? undefined;

    setQuery({
      sort: sort ? SortEnum[sort] : undefined,
      priceRange:
        range && range.length === 2
          ? [parseInt(range[0]), parseInt(range[1])]
          : undefined,
      collections,
      search,
    });
  }, [searchParams]);

  const createQueryString = useCallback(
    (name: string, value: string) => {
      const params = new URLSearchParams(searchParams.toString());
      params.set(name, value);

      return params.toString();
    },
    [searchParams],
  );

  const removeQueryString = useCallback(
    (name: string, value?: string) => {
      const params = new URLSearchParams(searchParams.toString());
      console.log("name", name);
      value ? params.set(name, value) : params.delete(name);
      return params.toString();
    },
    [searchParams],
  );

  const debouncedPrice = useDebounce(query.priceRange ?? [0, 10000], 500);

  React.useEffect(() => {
    const [min, max] = debouncedPrice;
    if (
      query.priceRange !== undefined &&
      !(query.priceRange[0] === 0 && query.priceRange[1] === 10000)
    )
      startTransition(() => {
        router.push(
          `${pathname}?${createQueryString("price_range", `${min}-${max}`)}`,
        );
      });
  }, [debouncedPrice]);

  const collectionChangeHandler = (collectionId: string) => {
    const oldValue = query.collections ?? [];

    if (oldValue.includes(collectionId)) {
      const collections = oldValue.filter((item) => item !== collectionId);
      setQuery({ ...query, collections });
      router.push(
        pathname +
          "?" +
          createQueryString("collections", JSON.stringify(collections)),
      );
    } else {
      const collections = [...oldValue, collectionId];
      setQuery({ ...query, collections });
      router.push(
        pathname +
          "?" +
          removeQueryString(
            "collections",
            collections.length > 0 ? JSON.stringify(collections) : undefined,
          ),
      );
    }
  };

  return (
    <>
      <section className="justify-between items-center hidden md:flex">
        <div className="flex gap-x-5 items-center">
          <span>Filter:</span>
          {shopLayout && (
            <CollectionsSelection
              className="flex items-center"
              value={query.collections}
              onCheckedChange={collectionChangeHandler}
              selections={collectionsSection}
            />
          )}

          <DropdownMenu>
            <DropdownMenuTrigger className="flex items-center">
              Price Range
              <Icons.chevronDown width={25} height={25} strokeWidth={2} />
            </DropdownMenuTrigger>

            <DropdownMenuContent className="p-5 max-w-xl">
              <DropdownMenuLabel>Price Range</DropdownMenuLabel>
              <DropdownMenuSeparator />

              <PriceRange
                label={"Price Range"}
                defaultValue={query.priceRange}
                value={query.priceRange}
                onMinChange={(data) =>
                  setQuery({
                    ...query,
                    priceRange: [query.priceRange[0], data],
                  })
                }
                onMaxChange={(data) =>
                  setQuery({
                    ...query,
                    priceRange: [data, query.priceRange[1]],
                  })
                }
                onValueChange={(priceRange) =>
                  setQuery({ ...query, priceRange })
                }
                onReset={() => setQuery({ ...query, priceRange: undefined })}
              />
            </DropdownMenuContent>
          </DropdownMenu>
        </div>

        <div className="flex gap-x-5 items-center">
          <label htmlFor="sort" className="">
            Sort by:
          </label>

          <SortSelection
            id="sort"
            disabled={isLoading}
            onValueChange={(sort) => {
              setQuery({ ...query, sort: SortEnum[sort] });
              router.push(`${pathname}?${createQueryString("sort", sort)}`);
            }}
            items={Object.entries(SortEnum).map(([key, value]) => ({
              value: key,
              label: value,
            }))}
            placeholder="Sort"
          />
        </div>
      </section>

      <Sheet>
        <SheetTrigger className="block md:hidden">All filters</SheetTrigger>
        <SheetContent className="w-full">
          <SheetHeader>
            <SheetTitle>All Filters</SheetTitle>
            <SheetDescription className="flex flex-col items-start">
              {shopLayout && (
                <div className="grid">
                  <label className="text-primary font-semibold text-left">
                    Collections
                  </label>
                  <CollectionsSelection
                    className="flex items-center"
                    value={query.collections}
                    onCheckedChange={collectionChangeHandler}
                    selections={collectionsSection}
                  />
                </div>
              )}
              <div className="grid">
                <label className="text-primary font-semibold text-left">
                  Price Range
                </label>

                <PriceRange
                  label={"Price Range"}
                  defaultValue={query.priceRange}
                  value={query.priceRange}
                  onMinChange={(data) =>
                    setQuery({
                      ...query,
                      priceRange: [query.priceRange[0], data],
                    })
                  }
                  onMaxChange={(data) =>
                    setQuery({
                      ...query,
                      priceRange: [data, query.priceRange[1]],
                    })
                  }
                  onValueChange={(priceRange) =>
                    setQuery({ ...query, priceRange })
                  }
                  onReset={() => {
                    setQuery({ ...query, priceRange: undefined });
                    router.push(
                      pathname + "?" + removeQueryString("price_range"),
                    );
                  }}
                />
              </div>

              <label htmlFor="sort" className="">
                Sort by:
              </label>

              <SortSelection
                id="sort"
                disabled={isLoading}
                onValueChange={(sort) => {
                  setQuery({ ...query, sort: SortEnum[sort] });
                  router.push(`${pathname}?${createQueryString("sort", sort)}`);
                }}
                defaultValue={query.sort}
                items={Object.entries(SortEnum).map(([key, value]) => ({
                  value: key,
                  label: value,
                }))}
                placeholder="Sort"
              />
            </SheetDescription>
          </SheetHeader>
        </SheetContent>
      </Sheet>

      <FilterBadges
        query={query}
        collections={collectionsSection}
        onDeleteHandler={removeQueryString}
      />
    </>
  );
}

export default FilterSelections;
