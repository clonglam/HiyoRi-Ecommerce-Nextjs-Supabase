import { z } from "zod";

export enum SortEnum {
  BEST_MATCH = "Best Match",
  PRICE_LOW_TO_HIGH = "Price: low to high",
  PRICE_HIGH_TO_LOW = "Price: high to low",
  NEWEST = "Newest",
  NAME_ASCE = "Name",
}

export const SearchProductActionSchema = z.object({
  query: z.string(),
  sort: z.nativeEnum(SortEnum).nullable().optional(),
});
