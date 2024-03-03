import { drizzle } from "drizzle-orm/postgres-js";
import postgres from "postgres";
import { env } from "@/env.mjs";
import * as schema from "./schema";

if (!process.env.DATABASE_URL) {
  console.log("🔴 no database URL");
}

const client = postgres(env.DATABASE_URL, { prepare: false });

const db = drizzle(client, { schema });

export default db;
