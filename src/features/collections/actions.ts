import db from "@/lib/supabase/db";
import { collections } from "@/lib/supabase/schema";

export const listCollectionsAction = async () => {
  return await db.select().from(collections);
};
