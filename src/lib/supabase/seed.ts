import * as dotenv from "dotenv"
import { drizzle } from "drizzle-orm/postgres-js"
import postgres from "postgres"

import * as schema from "./schema"

dotenv.config()
if (!process.env.DATABASE_URL) {
  throw new Error("DATABASE_URL is missing")
}

const queryClient = postgres(process.env.DATABASE_URL)
export const db = drizzle(queryClient, { schema })

const hugo = {
  fullName: "Hugo Lam",
  phone: "45445445454",
}
const bob = {
  fullName: "Bob",
  phone: "35335335353",
}
const main = async () => {
  const insertedUsers = await db
    .insert(schema.users)
    .values([hugo, bob])
    .returning()

  const insertedProducts = await db.insert(schema.products).values([
    {
      id: 1,
      name: "widget 1",
      description: "This is widget 1 description",
      rating: 5,
      storeId: 1,
      // productSkus: [
      //   {
      //     sku: "W0001SR",
      //     price: 300,
      //     inventory: 3,
      //     skuValues: {
      //       optionValues: { valueName: "S" },
      //       options: { optionName: "Size" },
      //     },
      //   },
      // ],
    },
  ])

  const insertedProductVariants = await db.insert(schema.skuValues).values([
    {
      productId: 1,
      skuId: 1,
      optionId: 1,
      valueId: 1,
      // options:{
      //   optionName:"Size"
      // },
      // productSkus:{
      // },

      // productId: 1,
      // price: 300,
      // inventory: 5,
      // options: {
      //   optionName: "Size",
      // },
      // optionValues: {
      //   optionValues: "S",
      // },
    },
  ])

  insertedUsers.forEach((user) => {
    console.log(`project ${user.fullName} is added to the DB.`)
  })
}

main()
