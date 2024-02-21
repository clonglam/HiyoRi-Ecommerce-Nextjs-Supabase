"use client"
import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import { Button } from "../ui/button"
import { QuantityInput } from "./QuantityInput"
import { useMutation } from "urql"

import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form"

import * as z from "zod"
import { SupabaseClient } from "@supabase/supabase-js"
import createClient from "@/lib/supabase/client"
import { useAuth } from "@/lib/providers/AuthProvider"
import { gql } from "@/gql"

const formSchema = z.object({
  quantity: z.number().min(0).max(8),
})

export const AddProductToCart = gql(/* GraphQL */ `
  mutation AddProductToCart(
    $productId: String
    $userId: UUID!
    $quantity: Int
  ) {
    insertIntocartsCollection(
      objects: { product_id: $productId, user_id: $userId, quantity: $quantity }
    ) {
      affectedCount
      records {
        product_id
        user_id
        quantity
      }
    }
  }
`)

function AddProductForm({ productId }: { productId: string }) {
  const [, addToCart] = useMutation(AddProductToCart)
  const { user } = useAuth()
  const maxQuantity = 8

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      quantity: 1,
    },
  })

  function onSubmit(values: z.infer<typeof formSchema>) {
    if (user) {
      // add Product to Carts.
      // server one
    }
    // Add the product to local storage

    console.log(values)
  }

  const addOne = () => {
    const currQuantity = form.getValues("quantity")
    if (currQuantity < maxQuantity) form.setValue("quantity", currQuantity + 1)
  }
  const minusOne = () => {
    const currQuantity = form.getValues("quantity")
    if (currQuantity > 1) form.setValue("quantity", currQuantity - 1)
  }

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
        <FormField
          control={form.control}
          name="quantity"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Quantity</FormLabel>
              <FormControl>
                <QuantityInput
                  {...field}
                  className=""
                  addOneHandler={addOne}
                  minusOneHandler={minusOne}
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <Button type="submit">Add to Cart</Button>
      </form>
    </Form>
  )
}

export default AddProductForm
