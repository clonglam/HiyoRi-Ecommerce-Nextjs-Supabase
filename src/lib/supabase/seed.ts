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

const collections = [
  {
    id: 1,
    label: "Bathroom Planning",
    slug: "bathroom-planning",
    featuredImageId: 1,
  },
  {
    id: 2,
    label: "Kitchen Planning",
    slug: "kitchen-planning",
    featuredImageId: 2,
  },
  {
    id: 3,
    label: "Living Room Planning",
    slug: "living-room-planning",
    featuredImageId: 3,
  },
  {
    id: 4,
    label: "Bedroom Planning",
    slug: "Bedroom-planning",
    featuredImageId: 4,
  },
]

const medias = [
  {
    id: 1,
    key: "public/bathroom-planning.jpg",
    alt: "bathroom-planning-category",
  },
  {
    id: 2,
    key: "public/kitchen-planning.jpg",
    alt: "kitchen-planning-category",
  },
  {
    id: 3,
    key: "public/living-room-planning.jpg",
    alt: "living-room-planning-category",
  },
  {
    id: 4,
    key: "public/bedroom-planning.jpg",
    alt: "bedroom-planning-category",
  },
]

const seedCollections = async () => {
  try {
    const insertedCollections = await db
      .insert(schema.collections)
      .values(collections)
      .onConflictDoNothing()
      .returning()
    if (insertedCollections != null)
      console.log(`collections are added to the DB.`)
  } catch (err) {
    console.log("Error happen while inserting collections", err)
  }
}

const seedMedias = async () => {
  try {
    const insertedMedia = await db
      .insert(schema.medias)
      .values(medias)
      .returning()
    console.log(`Medias are added to the DB.`, insertedMedia)
  } catch (err) {
    console.log("Error happen while inserting Media", err)
  }
}

// seedMedias()
seedCollections()

// const main = async () => {
//   // const deletedProduct = await db.delete(schema.products).returning()
//   // console.log("deletedProducts.")
//   const insertedUsers = await db
//     .insert(schema.users)
//     .values([hugo, bob])
//     .onConflictDoNothing()
//     .returning()

//   insertedUsers.forEach((user) => {
//     console.log(`project ${user.fullName} is added to the DB.`)
//   })

//   const createdProduct = await db
//     .insert(schema.products)
//     .values([
//       {
//         id: 1,
//         name: "Product 1",
//         storeId: 1,
//         featuredImageId: 1,
//         featured: false,
//       },
//     ])
//     .onConflictDoNothing()
//     .returning()

//   const optionVariants = await db
//     .insert(schema.options)
//     .values([
//       {
//         productId: createdProduct[0].id,
//         optionName: "Size",
//       },
//     ])
//     .onConflictDoNothing()
//     .returning()

//   const optionValues = await db
//     .insert(schema.optionValues)
//     .values([
//       {
//         valueId: 1,
//         productId: 1,
//         optionId: 1,
//         value: "S",
//       },
//     ])
//     .onConflictDoNothing()
//     .returning()

//   const skus = await db
//     .insert(schema.productSkus)
//     .values([
//       {
//         sku: "SKU123S",
//         price: "100.00",
//         inventory: 8,
//         productId: 1,
//       },
//     ])
//     .onConflictDoNothing()
//     .returning()

//   const skusValues = await db.insert(schema.skuValues).values([
//     {
//       skuId: 1,
//       productId: 1,
//       optionId: 1,
//       valueId: 1,
//     },
//   ])
// }

// main()

const productsList = [
  {
    id: 1,
    name: "BILD",
    description: `Poster, 41x51(16x20 ")`,
    featured_image_id: 1,
    skus: [
      {
        sku: "P0001SSCW",
        price: "100.00",
        inventory: 10,
        varianets: [
          { variant: "Size", value: "Small" },
          { variant: "Color", value: "White" },
        ],
      },
      {
        sku: "P0001SMCW",
        price: 100,
        inventory: 10,
        varianets: [
          { variant: "Size", value: "Medium" },
          { variant: "Color", value: "White" },
        ],
      },
      {
        sku: "P0001SLCR",
        price: 100,
        inventory: 10,
        varianets: [
          { variant: "Size", value: "Large" },
          { variant: "Color", value: "Red" },
        ],
      },
    ],
  },
]

const seedProducts = async () => {
  productsList.forEach(async (product) => {})
  const insertedProduct = await db
    .insert(schema.products)
    .values([
      {
        id: 1,
        name: "Product 1",
        storeId: 1,
        featuredImageId: 1,
        featured: false,
      },
    ])
    .onConflictDoNothing()
    .returning()
}
