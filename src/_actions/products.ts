"use server";

import db from "@/lib/supabase/db";
import { InsertProducts, products } from "@/lib/supabase/schema";
import { eq, inArray } from "drizzle-orm";
import { createInsertSchema } from "drizzle-zod";

type SearchProductsActionProps = {
  query: string;
  limit?: number;
  collections?: string;
  sort?: string;
};

export const createProductAction = async (product: InsertProducts) => {
  createInsertSchema(products).parse(product);
  const data = await db.insert(products).values(product).returning();
  return data;
};

export const updateProductAction = async (
  productId: string,
  product: InsertProducts,
) => {
  createInsertSchema(products).parse(product);
  const insertedProduct = await db
    .update(products)
    .set(product)
    .where(eq(products.id, productId))
    .returning();

  return insertedProduct;
};

export const getProductsByIds = async (productIds: string[]) => {
  return await db
    .select()
    .from(products)
    .where(inArray(products.id, productIds));
};
