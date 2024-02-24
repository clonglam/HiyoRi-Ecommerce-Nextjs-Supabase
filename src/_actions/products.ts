"use server"

import db from "@/lib/supabase/db"
import { InsertProducts, products } from "@/lib/supabase/schema"
import { SearchProductActionSchema, SortEnum } from "@/validations/products"
import {
  Column,
  ColumnBaseConfig,
  ColumnDataType,
  asc,
  desc,
  eq,
  inArray,
  like,
  sql,
} from "drizzle-orm"
import { createInsertSchema } from "drizzle-zod"

const productOrder = (data: SortEnum) => {
  switch (data) {
    case SortEnum["BEST_MATCH"]:
      return desc(products.createdAt)
    case SortEnum["PRICE_LOW_TO_HIGH"]:
      return asc(products.price)
    case SortEnum["PRICE_HIGH_TO_LOW"]:
      return desc(products.price)
    case SortEnum["NEWEST"]:
      return desc(products.createdAt)
    case SortEnum["NAME_ASCE"]:
      return asc(products.name)
    default:
      return desc(products.createdAt)
  }
}

type SearchProductsActionProps = {
  query: string
  limit?: number
  collections?: string
  sort?: string
}

export async function searchProductsAction(data: SearchProductsActionProps) {
  const validate = SearchProductActionSchema.safeParse(data)
  console.log("valu", validate)
  if (!validate.success) throw new Error("Invalid input.")

  const { query, sort, limit = 15 } = data
  // if (typeof query !== "string") {
  // }
  // if (sort) if (query.length === 0) return null

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
    .orderBy(productOrder(sort as SortEnum))
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

export const getProductsByIds = async (productIds: string[]) => {
  return await db
    .select()
    .from(products)
    .where(inArray(products.id, productIds))
}
