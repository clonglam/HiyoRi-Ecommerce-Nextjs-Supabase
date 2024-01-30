"use client"

import { useMemo } from "react"
import {
  UrqlProvider,
  ssrExchange,
  cacheExchange,
  fetchExchange,
  createClient,
} from "@urql/next"
import { env } from "../../env.mjs"

export default function CustomProvider({ children }: React.PropsWithChildren) {
  const [client, ssr] = useMemo(() => {
    const ssr = ssrExchange()
    const client = createClient({
      url: `https://${env.NEXT_PUBLIC_SUPABASE_PROJECT_REF}.supabase.co/graphql/v1`,
      exchanges: [cacheExchange, ssr, fetchExchange],
      fetchOptions: {
        headers: {
          apiKey: env.NEXT_PUBLIC_SUPABASE_ANON_KEY,
        },
      },
      suspense: true,
    })

    return [client, ssr]
  }, [])

  return (
    <UrqlProvider client={client} ssr={ssr}>
      {children}
    </UrqlProvider>
  )
}
