import { pgTable, foreignKey, pgEnum, serial, varchar, integer, timestamp, text, smallint, json, boolean, primaryKey, unique, numeric } from "drizzle-orm/pg-core"
  import { sql } from "drizzle-orm"

export const keyStatus = pgEnum("key_status", ['expired', 'invalid', 'valid', 'default'])
export const keyType = pgEnum("key_type", ['stream_xchacha20', 'secretstream', 'secretbox', 'kdf', 'generichash', 'shorthash', 'auth', 'hmacsha256', 'hmacsha512', 'aead-det', 'aead-ietf'])
export const aalLevel = pgEnum("aal_level", ['aal3', 'aal2', 'aal1'])
export const factorType = pgEnum("factor_type", ['webauthn', 'totp'])
export const factorStatus = pgEnum("factor_status", ['verified', 'unverified'])
export const codeChallengeMethod = pgEnum("code_challenge_method", ['plain', 's256'])


export const collections = pgTable("collections", {
	id: serial("id").primaryKey().notNull(),
	label: varchar("label", { length: 255 }).notNull(),
	slug: varchar("slug", { length: 255 }).notNull(),
	featuredImageId: integer("featured_image_id").notNull().references(() => medias.id, { onDelete: "restrict" } ).references(() => medias.id),
});

export const medias = pgTable("medias", {
	id: serial("id").primaryKey().notNull(),
	key: varchar("key", { length: 255 }).notNull(),
	alt: varchar("alt", { length: 255 }).notNull(),
	createdAt: timestamp("created_at", { mode: 'string' }).defaultNow(),
	updatedAt: timestamp("updated_at", { mode: 'string' }).defaultNow(),
});

export const products = pgTable("products", {
	id: serial("id").primaryKey().notNull(),
	name: varchar("name", { length: 191 }).notNull(),
	description: text("description"),
	rating: smallint("rating").default(0).notNull(),
	tags: json("tags").default([]).notNull(),
	images: json("images").default([]).notNull(),
	new: boolean("new").default(false),
	featured: boolean("featured").default(false),
	createdAt: timestamp("created_at", { withTimezone: true, mode: 'string' }).defaultNow().notNull(),
	storeId: integer("storeId").notNull(),
	collectionId: integer("collection_id").references(() => collections.id),
	featuredImageId: integer("featured_image_id").notNull().references(() => medias.id).references(() => medias.id, { onDelete: "restrict" } ),
});

export const users = pgTable("users", {
	id: serial("id").primaryKey().notNull(),
	fullName: text("full_name"),
	phone: varchar("phone", { length: 256 }).default(NULL::character varying),
});

export const options = pgTable("options", {
	optionId: serial("option_id").notNull(),
	productId: integer("product_id").notNull().references(() => products.id, { onDelete: "cascade" } ),
	optionName: text("option_name").notNull(),
},
(table) => {
	return {
		optionsProductIdOptionIdPk: primaryKey({ columns: [table.optionId, table.productId], name: "options_product_id_option_id_pk"})
	}
});

export const optionValues = pgTable("option_values", {
	id: serial("id").notNull(),
	productId: integer("product_id").notNull(),
	optionId: integer("option_id").notNull(),
	value: text("value"),
},
(table) => {
	return {
		productOptionsFk: foreignKey({
			columns: [table.productId, table.optionId],
			foreignColumns: [options.optionId, options.productId],
			name: "product_options_fk"
		}).onUpdate("cascade").onDelete("cascade"),
		optionValuesProductIdOptionIdIdPk: primaryKey({ columns: [table.id, table.productId, table.optionId], name: "option_values_product_id_option_id_id_pk"})
	}
});

export const skuValues = pgTable("sku_values", {
	productId: integer("product_id").notNull(),
	skuId: integer("sku_id").notNull(),
	optionId: integer("option_id").notNull(),
	valueId: integer("value_id").notNull(),
},
(table) => {
	return {
		optionValues: foreignKey({
			columns: [table.productId, table.optionId, table.valueId],
			foreignColumns: [optionValues.id, optionValues.productId, optionValues.optionId],
			name: "option_values"
		}).onUpdate("cascade").onDelete("cascade"),
		productSkus: foreignKey({
			columns: [table.productId, table.skuId],
			foreignColumns: [productSkus.id, productSkus.productId],
			name: "product_skus"
		}).onUpdate("cascade").onDelete("cascade"),
		skuValuesProductIdSkuIdOptionIdPk: primaryKey({ columns: [table.productId, table.skuId, table.optionId], name: "sku_values_product_id_sku_id_option_id_pk"})
	}
});

export const productSkus = pgTable("product_skus", {
	id: serial("id").notNull(),
	productId: integer("product_id").notNull().references(() => products.id, { onDelete: "cascade", onUpdate: "cascade" } ),
	sku: text("sku"),
	price: numeric("price", { precision: 10, scale:  2 }).default('0').notNull(),
	inventory: integer("inventory").default(0).notNull(),
},
(table) => {
	return {
		productSkusProductIdIdPk: primaryKey({ columns: [table.id, table.productId], name: "product_skus_product_id_id_pk"})
		productSkusSkuUnique: unique("product_skus_sku_unique").on(table.sku),
	}
});