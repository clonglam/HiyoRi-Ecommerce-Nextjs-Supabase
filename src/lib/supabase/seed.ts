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

  insertedUsers.forEach((user) => {
    console.log(`project ${user.fullName} is added to the DB.`)
  })
}

main()
