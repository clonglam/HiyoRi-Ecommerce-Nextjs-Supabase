import { z } from "zod";

export const adminUserShcema = z.object({
  name: z.string(),
  email: z.string().email(),
  password: z.string(),
});

export type AdminUserFormData = z.infer<typeof adminUserShcema>;

export const promoteAdminSchema = z.object({
  userId: z.string(),
});

export type PromoteAdminSchema = z.infer<typeof promoteAdminSchema>;
