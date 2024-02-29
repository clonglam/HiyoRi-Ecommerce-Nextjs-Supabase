"use client"
import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import { useMutation } from "urql"
import { Button } from "../ui/button"
import { QuantityInput } from "./QuantityInput"

import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form"

import { useAuth } from "@/lib/providers/AuthProvider"
import * as z from "zod"

import { createCartMutation } from "../cart/query"

const formSchema = z.object({
  quantity: z.number().min(0).max(8),
})

function AddProductForm({ productId }: { productId: string }) {
  const [, addToCart] = useMutation(createCartMutation)
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
