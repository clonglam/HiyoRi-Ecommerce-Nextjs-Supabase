import { SortEnum } from "@/validations/products";
import { persistNSync } from "persist-and-sync";
import { create } from "zustand";

export type SearchQuery = {
  sort?: SortEnum;
  collections?: string[];
  priceRange?: [number, number];
  search?: string;
};

type SearchStore = {
  query: SearchQuery;
  setQuery: (data: SearchQuery) => void;
  setSearch: (data: string) => void;
  setPriceRange: (data: [number, number]) => void;
  setCollections: (data: string[]) => void;
};

const useSearchStore = create<SearchStore>(
  persistNSync(
    (set) => ({
      query: { priceRange: [0, 10000], collections: [] },

      setQuery: async (data) => {
        set((state) => ({
          query: data,
        }));
      },
      setSearch: async (data) => {
        set((state) => ({
          query: { ...state.query, search: data },
        }));
      },
      setPriceRange: async (data) => {
        set((state) => ({
          query: { ...state.query, priceRange: data },
        }));
      },
      setCollections: async (data) => {
        set((state) => ({
          query: { ...state.query, collections: data },
        }));
      },
    }),
    { name: "search" },
  ),
);

export const createQueryString = (
  query: SearchQuery,
  params: Record<string, string | number | string[] | null>,
) => {
  const newSearchParams = new URLSearchParams(params?.toString());

  if (query.collections.length > 0) {
    newSearchParams.set("collections", JSON.stringify(query.collections));
  }
  if (query.priceRange) {
    newSearchParams.set(
      "price_range",
      `${query.priceRange[0]}-${query.priceRange[1]}`,
    );
  }

  return newSearchParams.toString();
};

export default useSearchStore;
