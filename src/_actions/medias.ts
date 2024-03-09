"use server";

import db from "@/lib/supabase/db";
import { productMedias } from "@/lib/supabase/schema";
import { eq } from "drizzle-orm";

export async function getMedia(id: string) {
  return await db.query.medias.findFirst({ where: eq(productMedias.id, id) });
}
