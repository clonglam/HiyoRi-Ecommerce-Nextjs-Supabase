"use server"

import db from "@/lib/supabase/db"
import supabaseServerClient from "@/lib/supabase/server"
import { eq } from "drizzle-orm"
import { profiles } from "./../lib/supabase/schema"
import { User } from "@supabase/supabase-js"

export const getCurrentUser = async () => {
  const supabase = supabaseServerClient()
  const userResponse = await supabase.auth.getUser()
  return userResponse.data.user
}

export const getUser = async ({ id }: { id: string }) => {
  return await db.query.profiles.findFirst({ where: eq(profiles.id, id) })
}

export const isAdmin = (currentUser: User | null) => {
  currentUser?.user_metadata
}
