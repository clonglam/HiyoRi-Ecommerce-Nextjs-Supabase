"use server"
import db from "@/lib/supabase/db"
import { InsertProducts, products, collections } from "@/lib/supabase/schema"
import {
  Column,
  ColumnBaseConfig,
  ColumnDataType,
  desc,
  eq,
  like,
  sql,
} from "drizzle-orm"
import { createInsertSchema } from "drizzle-zod"

export async function searchProductsAction({
  query,
  limit = 15,
}: {
  query: string
  limit?: number
}) {
  if (typeof query !== "string") {
    throw new Error("Invalid input.")
  }

  if (query.length === 0) return null

  // This is the temporary soultion for Drizzle ORM with postgresql
  const filteredProducts = await db
    .select({
      id: products.id,
      name: products.name,
      collections: products.collectionId,
    })
    .from(products)
    .where(
      like(
        sql<string>`lower(${products.name})` as unknown as Column<
          ColumnBaseConfig<ColumnDataType, string>,
          object,
          object
        >,
        `%${query.toLowerCase()}%`
      )
    )
    .orderBy(desc(products.createdAt))
    .limit(limit + 1)

  return {
    productdIds: filteredProducts,
    hasNext: filteredProducts.length > limit ? true : false,
  }
}
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
