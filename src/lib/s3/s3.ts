import { env } from "@/env.mjs"

export const keytoUrl = (key?: string) => {
  return key
    ? "https://hiyori-backpack.s3.us-west-2.amazonaws.com/public/bathroom-planning.jpg"
    : `https://${env.NEXT_PUBLIC_S3_BUCKET}.s3.${env.NEXT_PUBLIC_S3_REGION}.amazonaws.com/${key}`
}
