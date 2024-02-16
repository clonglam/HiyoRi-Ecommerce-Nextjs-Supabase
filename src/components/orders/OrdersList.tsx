"use client"
import { DocumentType, gql } from "@/gql"
import React from "react"
import { Card, CardContent, CardHeader } from "../ui/card"
import Image from "next/image"
import { cn, formatPrice, keytoUrl } from "@/lib/utils"
import dayjs from "dayjs"
import Link from "next/link"
import { Button, buttonVariants } from "../ui/button"

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
      item: order_linesCollection {
        edges {
          node {
            id
            products {
              id
              featured
              price
              name
              slug
              description
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
    <div className="grid grid-cols-12 gap-x-5">
      <section className="col-span-9">
        <h2 className="text-lg">Previous Orders</h2>
        <div>
          {orders.map(({ node: order }) => (
            <Card key={order.id}>
              <CardHeader className="px-6 py-3 flex flex-row justify-between items-center bg-zinc-100">
                <div>
                  <p className="font-medium text-xs">Order Placed</p>
                  <p className="text-sm">
                    {dayjs(order.created_at).format("MMMM DD, YYYY")}
                  </p>
                </div>

                <div>
                  <p className="font-medium text-xs">Total</p>
                  <p className="text-sm">{formatPrice(order.amount_total)}</p>
                </div>

                <div>
                  <p className="font-medium text-xs">Order</p>
                  <p className="text-sm">#{order.id}</p>
                </div>
              </CardHeader>

              <CardContent className="py-3 grid grid-cols-12 gap-8">
                <div className="flex flex-col gap-5 col-span-12 md:col-span-9">
                  {order.item.edges.map(({ node }) => {
                    const product = node.products
                    return (
                      <div className="flex gap-5" key={node.id}>
                        <div className="relative w-[80px] h-[80px] min-w-[80px] grow ">
                          <Image
                            width={80}
                            height={80}
                            src={keytoUrl(product.featuredImage.key)}
                            alt={product.featuredImage.alt}
                            className="object-cover w-[80px] h-[80px]"
                          />
                        </div>
                        <div className="flex flex-col gap-2">
                          <Link
                            href={`/shop/${product.slug}`}
                            className="text-blue-600"
                          >
                            {product.name}
                          </Link>
                          <p className="line-clamp-2 tracking-tighter leading-tight">
                            {product.description}
                          </p>
                        </div>
                      </div>
                    )
                  })}
                </div>

                <section className="md:col-span-3 w-full col-span-12 flex flex-col gap-3">
                  <Link
                    href={`/orders/${order.id}`}
                    className={cn(buttonVariants(), "mb-3")}
                  >
                    Track package
                  </Link>
                  <Button variant="outline" disabled>
                    Leave seller feedback
                  </Button>

                  <Button variant="outline" disabled>
                    write a product review
                  </Button>
                </section>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      <section className="col-span-3">
        <Card>
          <CardHeader className="px-6 py-3 flex flex-row justify-between items-center bg-zinc-100">
            <h2 className="text-lg">Buy again</h2>
          </CardHeader>
          <CardContent></CardContent>
        </Card>
      </section>
    </div>
  )
}

export default OrdersList
