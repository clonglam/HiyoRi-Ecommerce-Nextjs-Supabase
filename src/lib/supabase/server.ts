import { env } from "@/env.mjs";

import { CookieOptions, createServerClient } from "@supabase/ssr";
import { cookies } from "next/headers";

export function createClient({
  cookieStore,
  isAdmin = false,
}: {
  cookieStore: ReturnType<typeof cookies>;
  isAdmin?: boolean;
}) {
  return createServerClient(
    `https://${env.NEXT_PUBLIC_SUPABASE_PROJECT_REF}.supabase.co`,
    isAdmin ? env.DATABASE_SERVICE_ROLE : env.NEXT_PUBLIC_SUPABASE_ANON_KEY,
    {
      cookies: {
        get(name: string) {
          return cookieStore.get(name)?.value;
        },
        set(name: string, value: string, options: CookieOptions) {
          cookieStore.set({ name, value, ...options });
        },
        remove(name: string, options: CookieOptions) {
          cookieStore.set({ name, value: "", ...options });
        },
      },
    },
  );
}

export default createClient;
