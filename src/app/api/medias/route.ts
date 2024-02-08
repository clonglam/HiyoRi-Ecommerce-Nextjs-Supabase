import { nanoid } from "nanoid"
import { NextRequest, NextResponse } from "next/server"

export async function POST(request: NextRequest) {
  //   const session = await getServerSession(authOptions)
  //   if (!session) return NextResponse.json({}, { status: 401 })

  const formData = await request.formData()
  const data = Object.fromEntries(formData) as ImageUploaderData
  const validation = imageSchema.safeParse(data)

  if (!validation.success)
    return NextResponse.json(validation.error.format(), { status: 400 })

  const { buffer, mimeType } = await fileToStream(data)
  const fileExtension = mimeType.split("/")[1] // Extracts the subtype from the MIME type
  const key = nanoid() + "." + fileExtension // Appends the file extension to the nanoid

  const params = {
    Bucket: "hugo-coding",
    Key: key,
    Body: buffer,
    ContentType: mimeType, // Change the content type accordingly
  }

  const response = await uploadImage(params)

  const newMedia = await db
    .insert(medias)
    .values({
      name: data.image.name,
      key: key,
    })
    .returning()

  return NextResponse.json(
    {
      data: newMedia[0],
      preview: "https://hugo-coding.s3.us-west-1.amazonaws.com/" + key,
    },
    { status: 201 }
  )
}

const fileToStream = async ({ image, name }: ImageUploaderData) => {
  // Upload Image to S3 bucket
  const mimeType = image.type
  const buffer = Buffer.from(await image.arrayBuffer())

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
