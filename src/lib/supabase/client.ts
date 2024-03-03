import { env } from "@/env.mjs";

import { createBrowserClient } from "@supabase/ssr";

export function createClient() {
  return createBrowserClient(
    `https://${env.NEXT_PUBLIC_SUPABASE_PROJECT_REF}.supabase.co`,
    env.NEXT_PUBLIC_SUPABASE_ANON_KEY,
  );
}

const supabaseClient = createClient();
export default supabaseClient;
