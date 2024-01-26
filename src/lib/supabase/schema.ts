import {
  decimal,
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
import { createId } from "@paralleldrive/cuid2"
import { InferInsertModel, InferSelectModel, relations } from "drizzle-orm"

export const users = pgTable("users", {
  id: serial("id").primaryKey(),
  fullName: text("full_name"),
  phone: varchar("phone", { length: 256 }),
})

export const products = pgTable("products", {
  id: text("id")
    .notNull()
    .primaryKey()
    .$defaultFn(() => createId()),
  name: varchar("name", { length: 191 }).notNull(),
  description: text("description"),
  price: decimal("price", { precision: 10, scale: 2 }).notNull().default("0"),
  inventory: integer("inventory").notNull().default(0),
  rating: smallint("rating").notNull().default(0),
  tags: json("tags").$type<string[] | null>().default(null),
  storeId: text("storeId").notNull(),
  createdAt: timestamp("created_at", {
    withTimezone: true,
    mode: "string",
  })
    .defaultNow()
    .notNull(),
})

export type SelectProducts = InferSelectModel<typeof products>
export type InsertProducts = InferInsertModel<typeof products>

export const projectsRelations = relations(products, ({ many }) => ({
  productsToCategories: many(productsToCategories),
}))

export const categories = pgTable("categories", {
  id: text("id")
    .notNull()
    .primaryKey()
    .$defaultFn(() => createId()),
  label: varchar("label", { length: 255 }).notNull(),
  slug: varchar("slug", { length: 255 }).notNull(),
})

export const categoriesRelations = relations(categories, ({ many }) => ({
  productsToCategories: many(productsToCategories),
}))

export type SelectCategory = InferSelectModel<typeof categories>
export type InsertCategory = InferInsertModel<typeof categories>

export const productsToCategories = pgTable(
  "productsToCategories",
  {
    productId: text("product_id")
      .notNull()
      .references(() => products.id, { onDelete: "cascade" }),
    categoryId: text("category_id")
      .notNull()
      .references(() => categories.id, { onDelete: "cascade" }),
  },
  (t) => ({
    pk: primaryKey(t.productId, t.categoryId),
  })
)

export const productToCategoriesRelations = relations(
  productsToCategories,
  ({ one }) => ({
    product: one(products, {
      fields: [productsToCategories.productId],
      references: [products.id],
    }),
    category: one(categories, {
      fields: [productsToCategories.categoryId],
      references: [categories.id],
    }),
  })
)
