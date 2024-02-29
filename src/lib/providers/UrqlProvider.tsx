"use client"

import {
  UrqlProvider,
  UseMutationResponse,
  createClient,
  fetchExchange,
  ssrExchange,
} from "@urql/next"
import { devtoolsExchange } from "@urql/devtools"
import { retryExchange } from "@urql/exchange-retry"
import { relayPagination } from "@urql/exchange-graphcache/extras"

import { useMemo } from "react"
import { env } from "../../env.mjs"
import { useAuth } from "./AuthProvider"
import { cacheExchange } from "@urql/exchange-graphcache"
import { Carts, CreateCartMutationMutation } from "@/gql/graphql"
import { FetchCartQuery } from "@/components/cart/UserCartSection"
import { DocumentType, gql } from "@/gql"

export default function Provider({ children }: React.PropsWithChildren) {
  const { session } = useAuth()

  const [client, ssr] = useMemo(() => {
    const ssr = ssrExchange()

    const client = createClient({
      url: `https://${env.NEXT_PUBLIC_SUPABASE_PROJECT_REF}.supabase.co/graphql/v1`,
      exchanges: [
        // devtoolsExchange,
        cacheExchange({
          resolvers: {
            Query: {
              mediasCollection: relayPagination(),
              // cartsCollection(parent, args, cache, info) {
              //   return { __typename: "cartsConnection", user_id: args.user_id }
              // },
            },
          },
          // updates: {
          //   Mutation: {
          //     createCartMutation(result, _args, cache, _info) {
          //       cache.updateQuery({ query: FetchCartQuery }, (data) => {
          //         // @ts-ignore
          //         data.cartsCollection.edges.push({
          //           node: result.data.insertIntocartsCollection.records[0],
          //         })
          //         return data
          //       })
          //     },
          //   },
          // },
          keys: {
            carts: (data) => `${data.product_id}`,
            // cartsCollection: (data) => `${data.userId}`,
          },
        }),
        ssr,
        fetchExchange,
      ],
      fetchOptions: () => {
        const headers = {
          apikey: env.NEXT_PUBLIC_SUPABASE_ANON_KEY,
        }

        if (session) {
          headers["Authorization"] = `Bearer ${session.access_token}`
        }

        return { headers }
      },
      suspense: true,
    })

    return [client, ssr]
  }, [session])

  return (
    <UrqlProvider client={client} ssr={ssr}>
      {children}
    </UrqlProvider>
  )
}
