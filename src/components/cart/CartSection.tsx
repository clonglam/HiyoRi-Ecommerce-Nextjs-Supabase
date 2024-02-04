"use client"
import { gql } from "@/gql"
import { useAuth } from "@/lib/providers/AuthProvider"
import { getClient } from "@/lib/urql/urql"
import { useQuery } from "@urql/next"
import React from "react"
import CartItemCard from "./CartItemCard"
import EmptyCart from "./EmptyCart"
import { Button } from "../ui/button"
import SubtotoalCard from "./SubtotoalCard"
import { Currency } from "lucide-react"

type Props = {}

export const FetchCartQuery = gql(/* GraphQL */ `
  query FetchCartQuery($userId: UUID, $first: Int, $after: Cursor) {
    cartCollection(
      first: $first
      filter: { userId: { eq: $userId } }
      after: $after
    ) {
      edges {
        node {
          id
          ...CartItemCardFragment
        }
      }
    }
  }
`)

function CartSection({}: Props) {
  const { user } = useAuth()

  const [{ data }, refetch] = useQuery({
    query: FetchCartQuery,
    variables: {
      userId: user?.id,
      first: 8,
    },
  })

  return (
    <>
      {data?.cartCollection && data.cartCollection.edges.length > 0 ? (
        <section
          aria-label="Cart Section"
          className="grid grid-cols-12 gap-x-6 gap-y-5"
        >
          <div className="col-span-12 md:col-span-9">
            {data.cartCollection?.edges.map(({ node }) => (
              <CartItemCard
                item={node}
                key={node.id}
                userId={user?.id}
                refetch={refetch}
              />
            ))}
          </div>

          <SubtotoalCard
            className="col-span-12 md:col-span-3"
            subtotal={data.cartCollection?.edges.reduce(
              (acc, cur) => acc + cur.node.quantity * cur.node.product.price,
              0
            )}
            productcount={data.cartCollection?.edges.reduce(
              (acc, cur) => acc + cur.node.quantity,
              0
            )}
          />
        </section>
      ) : (
        <EmptyCart />
      )}
    </>
  )
}

export default CartSection
