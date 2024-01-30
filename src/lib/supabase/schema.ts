import {
  boolean,
  decimal,
  foreignKey,
  integer,
  json,
  pgTable,
  primaryKey,
  serial,
  smallint,
  text,
  timestamp,
  varchar,
} from "drizzle-orm/pg-core"
import { InferInsertModel, InferSelectModel, relations } from "drizzle-orm"

export const users = pgTable("users", {
  id: serial("id").primaryKey(),
  fullName: text("full_name"),
  phone: varchar("phone", { length: 256 }),
})
export const options = pgTable(
  "options",
  {
    optionId: serial("option_id").unique(),
    productId: integer("product_id")
      .notNull()
      .references(() => products.id, { onDelete: "cascade" }),
    optionName: text("option_name").notNull(),
  },
  (table) => {
    return {
      pk: primaryKey({
        columns: [table.productId, table.optionId],
      }),
    }
  }
)
export const optionValues = pgTable(
  "option_values",
  {
    valueId: serial("id").unique(),
    productId: integer("product_id").notNull(),
    optionId: integer("option_id")
      .notNull()
      .references(() => options.optionId, { onDelete: "cascade" }),
    value: text("value").notNull(),
    label: text("label"),
  },
  (table) => {
    return {
      pk: primaryKey({
        columns: [table.productId, table.optionId, table.valueId],
      }),
      productOptions: foreignKey({
        columns: [table.productId, table.optionId],
        foreignColumns: [options.productId, options.optionId],
        name: "product_options_fk",
      })
        .onDelete("cascade")
        .onUpdate("cascade"),
    }
  }
)

export const productSkus = pgTable(
  "product_skus",
  {
    skuId: serial("id").notNull(),
    productId: integer("product_id").notNull(),
    sku: text("sku").unique(),
    price: decimal("price", { precision: 10, scale: 2 }).notNull().default("0"),
    inventory: integer("inventory").notNull().default(0),
  },
  (table) => {
    return {
      pk: primaryKey({
        columns: [table.productId, table.skuId],
      }),
      products: foreignKey({
        columns: [table.productId],
        foreignColumns: [products.id],
        name: "products",
      })
        .onDelete("cascade")
        .onUpdate("cascade"),
    }
  }
)

export const products = pgTable(
  "products",
  {
    id: serial("id").primaryKey(),
    name: varchar("name", { length: 191 }).notNull(),
    description: text("description"),
    rating: smallint("rating").notNull().default(0),
    tags: json("tags").$type<string[]>().default([]).notNull(),
    images: json("images").$type<number[]>().default([]).notNull(),
    new: boolean("new").default(false),
    featured: boolean("featured").default(false),
    createdAt: timestamp("created_at", {
      withTimezone: true,
      mode: "string",
    })
      .defaultNow()
      .notNull(),

    storeId: integer("storeId").notNull(),
    collectionId: integer("collection_id"),
    featuredImageId: integer("featured_image_id")
      .notNull()
      .references(() => medias.id, { onDelete: "restrict" }),
  },
  (table) => {
    return {
      featuredImage: foreignKey({
        columns: [table.featuredImageId],
        foreignColumns: [medias.id],
        name: "featured_image",
      }),
      collection: foreignKey({
        columns: [table.collectionId],
        foreignColumns: [collections.id],
        name: "collection",
      }),
    }
  }
)

export const skuValues = pgTable(
  "sku_values",
  {
    productId: integer("product_id").notNull(),
    skuId: integer("sku_id").notNull(),
    optionId: integer("option_id")
      .notNull()
      .references(() => options.optionId, { onDelete: "cascade" }),
    valueId: integer("value_id")
      .notNull()
      .references(() => optionValues.valueId, { onDelete: "cascade" }),
  },
  (table) => {
    return {
      pk: primaryKey({
        columns: [table.productId, table.skuId, table.optionId],
      }),
      skus: foreignKey({
        columns: [table.productId, table.skuId],
        foreignColumns: [productSkus.productId, productSkus.skuId],
        name: "product_skus",
      })
        .onDelete("cascade")
        .onUpdate("cascade"),
      options: () =>
        foreignKey({
          columns: [table.productId, table.optionId],
          foreignColumns: [options.productId, options.optionId],
          name: "product_options",
        })
          .onDelete("cascade")
          .onUpdate("cascade"),
      optionValues: foreignKey({
        columns: [table.productId, table.optionId, table.valueId],
        foreignColumns: [
          optionValues.productId,
          optionValues.optionId,
          optionValues.valueId,
        ],
        name: "option_values",
      })
        .onDelete("cascade")
        .onUpdate("cascade"),
    }
  }
)

export type SelectProducts = InferSelectModel<typeof products>
export type InsertProducts = InferInsertModel<typeof products>

export const collections = pgTable(
  "collections",
  {
    id: serial("id").notNull().primaryKey(),
    label: varchar("label", { length: 255 }).notNull(),
    slug: varchar("slug", { length: 255 }).notNull(),
    featuredImageId: integer("featured_image_id")
      .notNull()
      .references(() => medias.id, { onDelete: "restrict" }),
  },
  (table) => {
    return {
      featuredImage: foreignKey({
        columns: [table.featuredImageId],
        foreignColumns: [medias.id],
        name: "featured_image",
      }),
    }
  }
)

export type SelectCollection = InferSelectModel<typeof collections>
export type InsertCollection = InferInsertModel<typeof collections>

export const medias = pgTable("medias", {
  id: serial("id").notNull().primaryKey(),
  key: varchar("key", { length: 255 }).notNull(),
  alt: varchar("alt", { length: 255 }).notNull(),
  createdAt: timestamp("created_at", { mode: "string" }).defaultNow(),
  updatedAt: timestamp("updated_at", { mode: "string" }).defaultNow(),
})

// https://stackoverflow.com/questions/24923469/modeling-product-variants
