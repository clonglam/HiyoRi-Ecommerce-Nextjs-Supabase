"use server"

import db from "@/lib/supabase/db"
import createServerClient from "@/lib/supabase/server"
import { User } from "@supabase/supabase-js"
import { eq } from "drizzle-orm"
import { cookies } from "next/headers"
import { profiles } from "./../lib/supabase/schema"

export const getCurrentUser = async () => {
  const cookieStore = cookies()
  const supabase = createServerClient(cookieStore)

  const userResponse = await supabase.auth.getUser()
  return userResponse.data.user
}

export const getUser = async ({ id }: { id: string }) => {
  return await db.query.profiles.findFirst({ where: eq(profiles.id, id) })
}

export const isAdmin = (currentUser: User | null) => {
  currentUser?.user_metadata
}
