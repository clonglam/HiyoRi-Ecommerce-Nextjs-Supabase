import { Shell } from "@/components/layouts/Shell"
import OrdersList from "@/components/orders/OrdersList"
import { gql } from "@/gql"
import { createClient } from "@/lib/supabase/server"
import { getClient } from "@/lib/urql/urql"
import { cookies } from "next/headers"
import { notFound, redirect } from "next/navigation"
import React from "react"

const OrderPageQuery = gql(/* GraphQL */ `
  query OrderPageQuery($first: Int!, $userId: UUID) {
    shop_ordersCollection(
      first: $first
      orderBy: [{ created_at: DescNullsLast }]
      filter: { userId: { eq: $userId } }
    ) {
      __typename
      edges {
        ...OrdersListFragment
      }
    }
  }
`)

async function OrderPage() {
  const cookieStore = cookies()
  const supabase = createClient({ cookieStore })

  const {
    data: { user },
    error: authError,
  } = await supabase.auth.getUser()
  if (authError || !user) {
    redirect("/sign-in")
  }

  const { data, error } = await getClient().query(OrderPageQuery, {
    first: 4,
    userId: user.id,
  })

  console.log("error", error)
  if (!data) return notFound()
  console.log("data", data)

  return (
    <Shell className="container ">
      <h1 className="pb-8 text-3xl font-semibold border-b">Orders</h1>
      <OrdersList orders={data.shop_ordersCollection.edges} />
    </Shell>
  )
}

export default OrderPage
