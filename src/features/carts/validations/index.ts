import { z } from "zod";

export const AddProductToCartSchema = z.object({
  quantity: z.number().min(0).max(8),
});

export type AddProductCartData = z.infer<typeof AddProductToCartSchema>;
