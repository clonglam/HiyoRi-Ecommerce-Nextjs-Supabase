import { InferInsertModel, InferSelectModel, relations } from "drizzle-orm"
import { float } from "drizzle-orm/mysql-core"
import {
  boolean,
  decimal,
  foreignKey,
  integer,
  json,
  pgEnum,
  pgTable,
  serial,
  text,
  timestamp,
  uuid,
  varchar,
} from "drizzle-orm/pg-core"

// User Trigger
// https://supabase.com/docs/guides/auth/managing-user-data
//

export const profiles = pgTable("profiles", {
  id: uuid("id").notNull().primaryKey(),
  name: text("name"),
  email: text("email").unique(),
  createdAt: timestamp("created_at", {
    withTimezone: true,
    mode: "string",
  })
    .defaultNow()
    .notNull(),
})

export const carts = pgTable(
  "carts",
  {
    id: serial("id").primaryKey(),
    quantity: integer("quantity").notNull(),
    productId: integer("productId")
      .notNull()
      .references(() => products.id, { onDelete: "cascade" }),
    userId: uuid("userId").notNull(),
    createdAt: timestamp("created_at", {
      withTimezone: true,
      mode: "string",
    })
      .defaultNow()
      .notNull(),
  },
  (table) => {
    return {
      product: foreignKey({
        columns: [table.productId],
        foreignColumns: [products.id],
        name: "cart_to_product",
      })
        .onDelete("cascade")
        .onUpdate("cascade"),
    }
  }
)

export const cartsRelations = relations(carts, ({ one }) => ({
  product: one(products, {
    fields: [carts.productId],
    references: [products.id],
  }),
}))

export const userWishlist = pgTable(
  "user_wishlist",
  {
    id: serial("id").primaryKey(),
    productId: integer("productId")
      .notNull()
      .references(() => products.id, { onDelete: "cascade" }),
    userId: uuid("userId").notNull(),
    createdAt: timestamp("created_at", {
      withTimezone: true,
      mode: "string",
    })
      .defaultNow()
      .notNull(),
  },
  (table) => {
    return {
      product: foreignKey({
        columns: [table.productId],
        foreignColumns: [products.id],
        name: "user_wishlist_to_product",
      })
        .onDelete("cascade")
        .onUpdate("cascade"),
    }
  }
)

export const comments = pgTable(
  "comments",
  {
    id: serial("id").primaryKey(),
    productId: integer("productId")
      .notNull()
      .references(() => products.id, { onDelete: "cascade" }),
    profileId: uuid("profileId")
      .notNull()
      .references(() => profiles.id),
    comment: text("comment").notNull(),
    createdAt: timestamp("created_at", {
      withTimezone: true,
      mode: "string",
    })
      .defaultNow()
      .notNull(),
  },
  (table) => {
    return {
      product: foreignKey({
        columns: [table.productId],
        foreignColumns: [products.id],
        name: "comment_to_product",
      })
        .onDelete("cascade")
        .onUpdate("cascade"),

      profile: foreignKey({
        columns: [table.profileId],
        foreignColumns: [profiles.id],
        name: "comment_to_profile",
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
    slug: varchar("slug", { length: 191 }).notNull().unique(),
    description: text("description"),
    featured: boolean("featured").default(false),
    badge: text("badge", { enum: ["new_product", "best_sale", "featured"] }),
    rating: decimal("rating", { precision: 2, scale: 1 })
      .notNull()
      .default("4"),
    tags: json("tags").$type<string[]>().default([]).notNull(),
    price: decimal("price", { precision: 8, scale: 2 })
      .notNull()
      .default("0.00"),
    totalComments: integer("totalComments").default(0).notNull(),
    createdAt: timestamp("created_at", {
      withTimezone: true,
      mode: "string",
    })
      .defaultNow()
      .notNull(),

    storeId: integer("storeId").default(1),
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

export const orders = pgTable("orders", {
  id: text("id").primaryKey(),
  amountTotal: integer("amount_total").notNull(),
  amountSubtotal: integer("amount_subtotal").notNull(),
  paymentStatus: text("payment_status").notNull(),
  email: text("email"),
  name: text("name").notNull(),
  paymentMethodTypes: text("payment_method_types").notNull(),
  userId: uuid("userId").notNull(),
  createdAt: timestamp("created_at", {
    withTimezone: true,
    mode: "string",
  })
    .defaultNow()
    .notNull(),
})

export type SelectOrders = InferSelectModel<typeof orders>
export type InsertOrders = InferInsertModel<typeof orders>
export type PaymentStatus = "paid" | "unpaid" | "no_payment_required"
export const ordersRelations = relations(orders, ({ one }) => ({
  address: one(address),
}))

export const address = pgTable("address", {
  id: serial("id").primaryKey(),
  city: text("city").notNull(),
  country: text("country").notNull(),
  line1: text("line1").notNull(),
  line2: text("line2").notNull(),
  postal_code: text("postal_code").notNull(),
  state: text("state").notNull(),
  orderId: text("orderId").references(() => orders.id, {
    onDelete: "cascade",
  }),
  userProfileId: uuid("userProfileId").references(() => profiles.id, {
    onDelete: "cascade",
  }),
})

export const addressRelations = relations(address, ({ one }) => ({
  order: one(orders, {
    fields: [address.id],
    references: [orders.id],
  }),
  profile: one(profiles, {
    fields: [address.userProfileId],
    references: [profiles.id],
  }),
}))
export type InsertAddress = InferInsertModel<typeof address>

export const productMedias = pgTable(
  "product_medias",
  {
    id: serial("id").primaryKey(),
    productId: integer("productId")
      .notNull()
      .references(() => products.id, { onDelete: "cascade" }),
    mediaId: integer("mediaId")
      .notNull()
      .references(() => medias.id, { onDelete: "cascade" }),
    priority: integer("priority"),
  },
  (table) => {
    return {
      product: foreignKey({
        columns: [table.productId],
        foreignColumns: [products.id],
        name: "product_media_to_product",
      })
        .onDelete("cascade")
        .onUpdate("cascade"),
      media: foreignKey({
        columns: [table.mediaId],
        foreignColumns: [medias.id],
        name: "product_media_to_media",
      })
        .onDelete("cascade")
        .onUpdate("cascade"),
    }
  }
)

export type BadgeType = "best_sale" | "featured" | "new_product"

export type SelectProducts = InferSelectModel<typeof products>
export type InsertProducts = InferInsertModel<typeof products>

export const collections = pgTable(
  "collections",
  {
    id: serial("id").notNull().primaryKey(),
    label: varchar("label", { length: 255 }).notNull(),
    slug: varchar("slug", { length: 255 }).notNull(),
    order: integer("order"),
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

// export const skuValues = pgTable(
//   "sku_values",
//   {
//     productId: integer("product_id").notNull(),
//     skuId: integer("sku_id").notNull(),
//     optionId: integer("option_id")
//       .notNull()
//       .references(() => options.optionId, { onDelete: "cascade" }),
//     valueId: integer("value_id")
//       .notNull()
//       .references(() => optionValues.valueId, { onDelete: "cascade" }),
//   },
//   (table) => {
//     return {
//       pk: primaryKey({
//         columns: [table.productId, table.skuId, table.optionId],
//       }),
//       skus: foreignKey({
//         columns: [table.productId, table.skuId],
//         foreignColumns: [productSkus.productId, productSkus.skuId],
//         name: "product_skus",
//       })
//         .onDelete("cascade")
//         .onUpdate("cascade"),
//       options: () =>
//         foreignKey({
//           columns: [table.productId, table.optionId],
//           foreignColumns: [options.productId, options.optionId],
//           name: "product_options",
//         })
//           .onDelete("cascade")
//           .onUpdate("cascade"),
//       optionValues: foreignKey({
//         columns: [table.productId, table.optionId, table.valueId],
//         foreignColumns: [
//           optionValues.productId,
//           optionValues.optionId,
//           optionValues.valueId,
//         ],
//         name: "option_values",
//       })
//         .onDelete("cascade")
//         .onUpdate("cascade"),
//     }
//   }
// )

// export const options = pgTable(
//   "options",
//   {
//     optionId: serial("option_id").unique(),
//     productId: integer("product_id")
//       .notNull()
//       .references(() => products.id, { onDelete: "cascade" }),
//     optionName: text("option_name").notNull(),
//   },
//   (table) => {
//     return {
//       pk: primaryKey({
//         columns: [table.productId, table.optionId],
//       }),
//     }
//   }
// )
// export const optionValues = pgTable(
//   "option_values",
//   {
//     valueId: serial("id").unique(),
//     productId: integer("product_id").notNull(),
//     optionId: integer("option_id")
//       .notNull()
//       .references(() => options.optionId, { onDelete: "cascade" }),
//     value: text("value").notNull(),
//     label: text("label"),
//   },
//   (table) => {
//     return {
//       pk: primaryKey({
//         columns: [table.productId, table.optionId, table.valueId],
//       }),
//       productOptions: foreignKey({
//         columns: [table.productId, table.optionId],
//         foreignColumns: [options.productId, options.optionId],
//         name: "product_options_fk",
//       })
//         .onDelete("cascade")
//         .onUpdate("cascade"),
//     }
//   }
// )

// export const productSkus = pgTable(
//   "product_skus",
//   {
//     skuId: serial("id").notNull(),
//     productId: integer("product_id").notNull(),
//     sku: text("sku").unique(),
//     price: decimal("price", { precision: 8, scale: 2 })
//       .notNull()
//       .default("0.00"),
//     inventory: integer("inventory").notNull().default(0),
//   },
//   (table) => {
//     return {
//       pk: primaryKey({
//         columns: [table.productId, table.skuId],
//       }),
//       products: foreignKey({
//         columns: [table.productId],
//         foreignColumns: [products.id],
//         name: "products",
//       })
//         .onDelete("cascade")
//         .onUpdate("cascade"),
//     }
//   }
// )
