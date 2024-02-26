"use server"

import { env } from "@/env.mjs"
import { uploadImage } from "@/lib/s3/s3"
import db from "@/lib/supabase/db"
import { medias, productMedias } from "@/lib/supabase/schema"
import { mediaSchema } from "@/validations/medias"
import { PutObjectCommand, S3Client } from "@aws-sdk/client-s3"
import { nanoid } from "nanoid"
import { NextRequest, NextResponse } from "next/server"
import sharp from "sharp"
import { z } from "zod"

export async function POST(request: NextRequest) {
  // const session = await getServerSession(authOptions)
  //   if (!session) return NextResponse.json({}, { status: 401 })
  const formData = await request.formData()
  const data = Object.fromEntries(formData) as z.infer<typeof mediaSchema>
  const validation = mediaSchema.safeParse(data)

  if (validation.success === false) {
    return NextResponse.json(validation.error.format(), { status: 400 })
  }

  const uploadResponse = await Promise.all(
    Object.entries(data).map(async ([index, file]) => {
      const fileExtension = file.type.split("/")[1]
      const key = nanoid() + "." + fileExtension

      const params = {
        Bucket: env.NEXT_PUBLIC_S3_BUCKET,
        Key: "public/" + key,
        Body: Buffer.from(await file.arrayBuffer()),
        ContentType: file.type,
      }
      try {
        const s3Response = await uploadImage(params)
        if (s3Response) {
          const insertedMedia = await db
            .insert(medias)
            .values({ alt: file.name, key: params.Key })
            .returning()
          return { index, medias: insertedMedia }
        }
        return null
      } catch (err) {
        return null
      }
    })
  )

  return NextResponse.json(uploadResponse, { status: 201 })
}

const fileToStream = async (file: File) => {
  // Upload Image to S3 bucket
  const mimeType = file.type
  const buffer = Buffer.from(await file.arrayBuffer())

  const imageBuffer = await sharp(buffer)
  const metadata = await imageBuffer.metadata()

  if (mimeType !== "image/gif")
    return {
      mimeType: "image/webp",
      buffer: await sharp(buffer).webp().toBuffer(),
    }

  return {
    mimeType: "image/gif",
    buffer,
  }
}
