"use server"
import { getCurrentUser, isAdmin } from "./users"

import { env } from "@/env.mjs"
import { eq } from "drizzle-orm"
import { revalidatePath } from "next/cache"
import { NextRequest, NextResponse } from "next/server"
import db from "@/lib/supabase/db"
import { productMedias } from "@/lib/supabase/schema"
import supabaseServerClient from "@/lib/supabase/server"

export async function getMedia(id: number) {
  return await db.query.medias.findFirst({ where: eq(productMedias.id, id) })
}

export async function getMedias(limit?: number) {
  return await db.query.medias.findMany({ limit })
}

export async function deleteMedia(id: string) {
  const currentUser = await getCurrentUser()

  // if (!isAdmin(currentUser))
  //   throw new Error("Only authorized users are allowed access.")
  // return NextResponse.json({ error: "Unauthorized access" }, { status: 401 })

  //   const validatedFields = deleteMediaSchema.safeParse({ id })
  //   if (!validatedFields.success) {
  //     return NextResponse.json(
  //       { error: validatedFields.error.flatten().fieldErrors },
  //       { status: 500 }
  //     )
  //   }

  //   const media = await getMedia(id)

  //   if (!media)
  //     return NextResponse.json(
  //       { error: `Error! Media [${id}] is not existing.` },
  //       { status: 500 }
  //     )

  //   const data = await s3Client.send(
  //     new DeleteObjectCommand({ Bucket: env.S3_BUCKET, Key: media.key })
  //   )

  //   if (data) {
  //     await db.delete(medias).where(eq(medias.id, id))

  //     revalidatePath("/admin/medias")
  //   }
}

// export async function addMediaAction(media: InsertMedia) {
//   await checkCurrentUser()

//   const validatedFields = insertMediaSchema.safeParse(media)

//   if (!validatedFields.success) {
//     return NextResponse.json(
//       { error: validatedFields.error.flatten().fieldErrors },
//       { status: 500 }
//     )
//   }

//   return NextResponse.json({ message: "OK" }, { status: 200 })
// }
