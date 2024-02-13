"use server"
import { profiles } from "./../lib/supabase/schema"
import { AdminUserFormData } from "@/components/admin/users/adminUserShema"
import { env } from "@/env.mjs"
import db from "@/lib/supabase/db"
import createClient from "@/lib/supabase/server"

import { eq } from "drizzle-orm"
import { cookies } from "next/headers"

export const getUser = async ({ userId }: { userId: string }) => {
  const cookieStore = cookies()
  const adminAuthClient = createClient({ cookieStore, isAdmin: true }).auth
    .admin

  try {
    const { data, error } = await adminAuthClient.getUserById(userId)
    return data
  } catch (err) {
    console.log(err)
    throw new Error("There is an error")
  }
}

export const listUsers = async ({
  page = 1,
  perPage = 10,
}: {
  page?: number
  perPage?: number
}) => {
  const cookieStore = cookies()
  const adminAuthClient = createClient({ cookieStore, isAdmin: true }).auth
    .admin

  const {
    data: { users },
    error,
  } = await adminAuthClient.listUsers({
    page,
    perPage,
  })
  return users
}

export const createUser = async ({
  email,
  name,
  password,
}: AdminUserFormData) => {
  const cookieStore = cookies()
  const adminAuthClient = createClient({ cookieStore, isAdmin: true }).auth
    .admin

  try {
    const existedUser = await db.query.profiles.findFirst({
      where: eq(profiles.email, email),
    })
    if (existedUser) throw new Error(`User with email ${email} is existed.`)

    const res = await adminAuthClient.createUser({
      email,
      password,
      role: "ADMIN",
      user_metadata: { name },
    })

    return res
  } catch (err) {
    throw new Error("Unexpected error occured.")
  }
}
