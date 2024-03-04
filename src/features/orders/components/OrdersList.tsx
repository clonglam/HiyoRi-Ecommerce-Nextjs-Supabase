"use client";
import { DocumentType, gql } from "@/gql";
import React from "react";
import { Card, CardContent, CardHeader } from "../../../components/ui/card";
import Image from "next/image";
import { cn, formatPrice, keytoUrl } from "@/lib/utils";
import dayjs from "dayjs";
import Link from "next/link";
import { Button, buttonVariants } from "../../../components/ui/button";

type OrdersListProps = {
  orders: DocumentType<typeof OrdersListFragment>[];
};

export const OrdersListFragment = gql(/* GraphQL */ `
  fragment OrdersListFragment on ordersEdge {
    node {
      id
      amount
      order_status
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
`);

function OrdersList({ orders }: OrdersListProps) {
  if (orders.length === 0) return <div>There is no order.</div>;
  return (
    <div className="grid  gap-y-5">
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
              <p className="text-sm">{formatPrice(order.amount)}</p>
            </div>

            <div>
              <p className="font-medium text-xs">Order</p>
              <p className="text-sm">#{order.id}</p>
            </div>
          </CardHeader>

          <CardContent className="py-3 ">
            <h2 className="text-xl font-semibold col-span-12">
              Arrive at Tomorrow 22:00{" "}
            </h2>
            <div className="py-3 grid grid-cols-12 gap-8">
              <div className="flex flex-col gap-5 col-span-12 md:col-span-8">
                {order.item.edges.map(({ node }) => {
                  const product = node.products;
                  return (
                    <div className="flex items-center gap-5" key={node.id}>
                      <div className="relative w-[120px] h-[120px] min-w-[80px] grow ">
                        <Image
                          width={120}
                          height={120}
                          src={keytoUrl(product.featuredImage.key)}
                          alt={product.featuredImage.alt}
                          className="object-cover w-[120px] h-[120px]"
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
                  );
                })}
              </div>

              <section className="md:col-span-4 w-full col-span-12 flex flex-col gap-3">
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
            </div>
          </CardContent>
        </Card>
      ))}
    </div>
  );
}

export default OrdersList;
