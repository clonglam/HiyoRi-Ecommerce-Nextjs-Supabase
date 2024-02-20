"use client"
import { DocumentType, gql } from "@/gql"
import { useAuth } from "@/lib/providers/AuthProvider"
import { useMutation, useQuery } from "@urql/next"
import { notFound } from "next/navigation"
import { useMemo, useState } from "react"
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "../ui/card"
import CartItemCard from "./CartItemCard"
import CheckoutButton from "./CheckoutButton"
import EmptyCart from "./EmptyCart"
import { Skeleton } from "../ui/skeleton"
import { FetchCartQueryQuery } from "@/gql/graphql"
import { User } from "@supabase/supabase-js"
import { RemoveCartsMutation, UpdateCartsProduct } from "./query"
import { useToast } from "../ui/use-toast"
import { expectedErrorsHandler } from "@/lib/urql/urql"

export const FetchCartQuery = gql(/* GraphQL */ `
  query FetchCartQuery($userId: UUID, $first: Int, $after: Cursor) {
    cartsCollection(
      first: $first
      filter: { userId: { eq: $userId } }
      after: $after
    ) {
      edges {
        node {
          id
          quantity
          product {
            ...CartItemCardFragment
          }
        }
      }
    }
  }
`)
type AuthorizedCartSectionProps = { user: User }

function AuthorizedCartSection({ user }: AuthorizedCartSectionProps) {
  const [{ data, fetching, error }, refetch] = useQuery({
    query: FetchCartQuery,
    variables: {
      userId: user.id,
      first: 8,
    },
  })
  const [isLoading, setIsLoading] = useState(false)
  const [, updateCartProduct] = useMutation(UpdateCartsProduct)
  const [, removeCart] = useMutation(RemoveCartsMutation)

  const { toast } = useToast()

  const subtotal = useMemo(() => calcSubtotal(data), [data])

  const productCount = useMemo(() => calcProductCount(data), [data])

  if (fetching) {
    return <LoadingCartSection />
  }

  if (error) {
    return <div>Error: {error.message}</div>
  }

  if (!data || !data.cartsCollection) return notFound()

  const addOneHandler = async (cartId: string, quantity: number) => {
    if (quantity < 8) {
      setIsLoading(true)

      const res = await updateCartProduct({
        id: cartId,
        newQuantity: quantity + 1,
      })

      if (res.error)
        toast({
          title: "Error",
          description: expectedErrorsHandler({ error: res.error }),
        })

      setIsLoading(false)
    } else {
      toast({ title: "Proudct Limit is reached." })
    }
  }

  const minusOneHandler = async (cartId: string, quantity: number) => {
    if (quantity > 1) {
      setIsLoading(true)

      const res = await updateCartProduct({
        id: cartId,
        newQuantity: quantity - 1,
      })

      if (res.error)
        toast({
          title: "Error",
          description: expectedErrorsHandler({ error: res.error }),
        })

      setIsLoading(false)
    } else {
      toast({ title: "Minimum is reached." })
    }
  }

  const removeHandler = async (cartId: string) => {
    setIsLoading(true)

    const res = await removeCart({ cartId: cartId })

    if (res.error) {
      toast({
        title: "Error",
        description: expectedErrorsHandler({ error: res.error }),
      })
    }

    setIsLoading(false)
  }

  return (
    <>
      {data.cartsCollection && data.cartsCollection.edges.length > 0 ? (
        <section
          aria-label="Cart Section"
          className="grid grid-cols-12 gap-x-6 gap-y-5"
        >
          <div className="col-span-12 md:col-span-9 max-h-[420px] overflow-y-auto">
            {data.cartsCollection?.edges.map(({ node }) => (
              <CartItemCard
                key={node.id}
                id={node.id}
                product={node.product}
                quantity={node.quantity}
                refetch={refetch}
                addOneHandler={() => addOneHandler(node.id, node.quantity)}
                minusOneHandler={() => minusOneHandler(node.id, node.quantity)}
                removeHandler={() => removeHandler(node.id)}
                disabled={isLoading}
              />
            ))}
          </div>

          <Card className="w-full h-[180px] px-3 col-span-12 md:col-span-3">
            <CardHeader className="px-3 pt-2 pb-0 text-md">
              <CardTitle className="text-lg mb-0">Subtotoal: </CardTitle>
              <CardDescription>{`${productCount} Items`}</CardDescription>
            </CardHeader>
            <CardContent className="relative overflow-hidden px-3 py-2">
              <p className="text-3xl md:text-lg lg:text-2xl font-bold">{`$ ${subtotal.toFixed(2).toString()}`}</p>
            </CardContent>

            <CardFooter className="gap-x-2 md:gap-x-5 px-3">
              <CheckoutButton
                disabled={isLoading}
                order={data.cartsCollection.edges.map((item) => ({
                  id: item.node.product.id,
                  quantity: item.node.quantity,
                }))}
              />
            </CardFooter>
          </Card>
        </section>
      ) : (
        <EmptyCart />
      )}
    </>
  )
}

export default AuthorizedCartSection

const LoadingCartSection = () => (
  <section
    className="grid grid-cols-12 gap-x-6 gap-y-5"
    aria-label="Loading Skeleton"
  >
    <div className="col-span-12 md:col-span-9 space-y-8">
      {[...Array(4)].map((_, index) => (
        <div
          className="flex items-center justify-between gap-x-6 gap-y-8 border-b p-5"
          key={index}
        >
          <Skeleton className="h-[120px] w-[120px]" />
          <div className="space-y-3 w-full">
            <Skeleton className="h-6 max-w-xs" />
            <Skeleton className="h-4" />
            <Skeleton className="h-4 w-full max-w-xl" />
            <Skeleton className="h-4 w-full max-w-lg" />
          </div>
        </div>
      ))}
    </div>
    <div className="w-full h-[180px] px-3 col-span-12 md:col-span-3 border p-5">
      <div className="space-y-3 w-full">
        <Skeleton className="h-6 max-w-xs" />
        <Skeleton className="h-4" />
        <Skeleton className="h-4 mb-6" />
        <Skeleton className="h-4 mb-6 max-w-[280px]" />
      </div>
    </div>
  </section>
)

const calcProductCount = (data?: FetchCartQueryQuery) => {
  const cartEdges =
    data && data.cartsCollection ? data.cartsCollection.edges : []
  if (!cartEdges.length) return 0

  return cartEdges.reduce((acc, cur) => acc + cur.node.quantity, 0)
}

const calcSubtotal = (data?: FetchCartQueryQuery) => {
  const cartEdges =
    data && data.cartsCollection ? data.cartsCollection.edges : []

  if (!cartEdges.length) return 0

  return cartEdges.reduce(
    (acc, cur) => acc + cur.node.quantity * cur.node.product.price,
    0
  )
}
