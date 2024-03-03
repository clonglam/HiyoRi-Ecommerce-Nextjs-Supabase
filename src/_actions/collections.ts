import { collections } from "./../lib/supabase/schema";
import db from "@/lib/supabase/db";

// export const listCollectionsAction = async () => {
//   const collections = await db.query.collections.findMany()
//   return collections as SelectCollection[]
// }
export const listCollectionsAction = async () => {
  return await db.select().from(collections);
};
