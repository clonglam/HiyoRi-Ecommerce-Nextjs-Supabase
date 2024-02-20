import {
  CombinedError,
  cacheExchange,
  createClient,
  fetchExchange,
} from "@urql/core"
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

export type ExpectedErrorsHandlerType = {
  error?: CombinedError | undefined
  expectedErrors?: { [key: string]: string }
  unexpectedErrorMessage?: string
  networkErrorMessage?: string
}

export function expectedErrorsHandler({
  error,
  expectedErrors = {},
  unexpectedErrorMessage = "An unexpected error occurred.",
  networkErrorMessage = "There was a problem with the network connection.",
}: ExpectedErrorsHandlerType): null | string {
  if (error === undefined) {
    return null
  } else if (error.networkError) {
    return networkErrorMessage
  }

  let foundExpectedError = false

  for (const graphQLError of error.graphQLErrors) {
    for (const [errorKey, errorMessage] of Object.entries(expectedErrors)) {
      if (graphQLError.message.includes(errorKey)) {
        return errorMessage
      }
    }
    foundExpectedError = true
  }

  return foundExpectedError ? unexpectedErrorMessage : null
}

export const { getClient } = registerUrql(makeClient)
