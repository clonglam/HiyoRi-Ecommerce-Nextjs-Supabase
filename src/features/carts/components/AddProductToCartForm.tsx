"use client"
import { QuantityInput } from "@/components/QuantityInput"
import { Button } from "@/components/ui/button"
import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"

import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form"

import { useCartStore } from "@/features/carts"
import { useAuth } from "@/providers/AuthProvider"
import useCartActions from "../hooks/useCartActions"
import { AddProductCartData, AddProductToCartSchema } from "../validations"

interface AddProductToCartFormProps {
  productId: string
}

function AddProductToCartForm({ productId }: AddProductToCartFormProps) {
  const { user } = useAuth()
  const { authAddOrUpdateProduct } = useCartActions(user, productId)
  const addProductToStore = useCartStore((s) => s.addProductToCart)
  const maxQuantity = 8

  const form = useForm<AddProductCartData>({
    resolver: zodResolver(AddProductToCartSchema),
    defaultValues: {
      quantity: 1,
    },
  })

  async function onSubmit(values: AddProductCartData) {
    if (user) {
      await authAddOrUpdateProduct(values.quantity)
    } else {
      addProductToStore(productId, values.quantity)
    }
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
