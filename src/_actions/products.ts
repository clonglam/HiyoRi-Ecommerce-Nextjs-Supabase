"use server"

import db from "@/lib/supabase/db"
import { InsertProducts, products } from "@/lib/supabase/schema"
import { eq } from "drizzle-orm"
import { createInsertSchema } from "drizzle-zod"

export const createProductAction = async (product: InsertProducts) => {
  console.log("product", product)
  createInsertSchema(products).parse(product)
  const data = await db.insert(products).values(product).returning()
  console.log("data", data)
  return data
}

export const updateProductAction = async (
  productId: string,
  product: InsertProducts
) => {
  createInsertSchema(products).parse(product)
  const insertedProduct = await db
    .update(products)
    .set(product)
    .where(eq(products.id, productId))
    .returning()

  console.log("insertedProduct", insertedProduct)
  return insertedProduct
}
