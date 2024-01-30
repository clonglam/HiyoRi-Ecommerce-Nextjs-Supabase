import { cacheExchange, createClient, fetchExchange } from "@urql/core"
import { env } from "../../env.mjs"
import { registerUrql } from "@urql/next/rsc"

export const makeClient = () => {
  return createClient({
    url: `https://${env.NEXT_PUBLIC_SUPABASE_PROJECT_REF}.supabase.co/graphql/v1`,
    exchanges: [cacheExchange, fetchExchange],
    fetchOptions: {
      headers: {
        apiKey: env.NEXT_PUBLIC_SUPABASE_ANON_KEY,
      },
    },
  })
}

export const { getClient } = registerUrql(makeClient)
