import { z } from "zod"

export const adminUserShcema = z.object({
  name: z.string(),
  email: z.string().email(),
  password: z.string(),
})

export type AdminUserFormData = z.infer<typeof adminUserShcema>
