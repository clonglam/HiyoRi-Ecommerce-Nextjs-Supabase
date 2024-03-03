"use client"
import { useMutation } from "urql"
import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import { QuantityInput } from "@/components/QuantityInput"
import { Button } from "@/components/ui/button"

import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form"

import { useAuth } from "@/providers/AuthProvider"
import { createCartMutation } from "@/features/carts"
import { AddProductCartData, AddProductToCartSchema } from "../validations"

interface AddProductToCartFormProps {
  productId: string
}

function AddProductToCartForm({ productId }: AddProductToCartFormProps) {
  const [, addToCart] = useMutation(createCartMutation)
  const { user } = useAuth()
  const maxQuantity = 8

  const form = useForm<AddProductCartData>({
    resolver: zodResolver(AddProductToCartSchema),
    defaultValues: {
      quantity: 1,
    },
  })

  function onSubmit(values: AddProductCartData) {
    if (user) {
      // add Product to Carts.
      // server one
    }
    // Add the product to local storage

    // console.log(values)
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

export default AddProductToCartForm
