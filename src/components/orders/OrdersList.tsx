"use client"
import { DocumentType, gql } from "@/gql"
import React from "react"

type OrdersListProps = {
  orders: DocumentType<typeof OrdersListFragment>[]
}

export const OrdersListFragment = gql(/* GraphQL */ `
  fragment OrdersListFragment on shop_ordersEdge {
    node {
      id
      amount_subtotal
      amount_total
      payment_status
      payment_method_types
      created_at
      order_linesCollection {
        edges {
          node {
            id
            products {
              id
              featured
              price
              featuredImage: medias {
                id
                key
                alt
              }
            }
          }
        }
      }
    }
  }
`)

function OrdersList({ orders }: OrdersListProps) {
  return (
    <section>
      <h2 className="text-lg">Previous Orders</h2>
      <div>
        {orders.map(({ node: order }) => (
          <></>
          // <div key={order.id}>{order.amount_subtotal}</div>
        ))}
      </div>
    </section>
  )
}

export default OrdersList
