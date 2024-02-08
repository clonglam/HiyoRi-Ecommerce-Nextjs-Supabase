"use client"

import { zodResolver } from "@hookform/resolvers/zod"
import { useTransition } from "react"
import { useForm } from "react-hook-form"
import { createInsertSchema, createSelectSchema } from "drizzle-zod"

import {
  Form,
  FormControl,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form"

import Link from "next/link"

import { Input } from "@/components/ui/input"
import { Button, buttonVariants } from "@/components/ui/button"

import { InsertProducts, SelectProducts, products } from "@/lib/supabase/schema"
import { Icons } from "@/components/icons"

type ProductsFormProps = {
  product?: SelectProducts
}

function ProductFrom({ product }: ProductsFormProps) {
  const [isPending, startTransition] = useTransition()

  const form = useForm<InsertProducts>({
    resolver: zodResolver(createInsertSchema(products)),
  })

  const {
    register,
    control,
    handleSubmit,
    formState: { errors },
  } = form

  const onSubmit = handleSubmit(async (data) => {
    startTransition(async () => {
      // try {
      //   category
      //     ? await editCategoryAction(category.id, data)
      //     : await addCategoryAction(data)
      // } catch (err) {
      //   console.log("unexpected Error Occured")
      // }
    })
  })

  return (
    <Form {...form}>
      <form
        id="project-form"
        className="gap-x-5 flex gap-y-5 flex-col"
        onSubmit={onSubmit}
      >
        <div className="flex flex-col gap-y-5">
          <FormItem>
            <FormLabel className="text-sm">name*</FormLabel>
            <FormControl>
              <Input
                defaultValue={product?.name}
                aria-invalid={!!form.formState.errors.name}
                placeholder="Type Product Name."
                {...register("name")}
              />
            </FormControl>
            <FormMessage />
          </FormItem>

          <FormItem>
            <FormLabel className="text-sm">Slug*</FormLabel>
            <FormControl>
              <Input
                defaultValue={product?.slug}
                aria-invalid={!!form.formState.errors.slug}
                placeholder="Type Product slug."
                {...register("slug")}
              />
            </FormControl>
            <FormMessage />
          </FormItem>
        </div>

        <div className="py-8 flex gap-x-5 items-center">
          <Button disabled={isPending} variant={"outline"} form="project-form">
            {product ? "Update" : "Create"}
            {isPending && (
              <Icons.spinner
                className="mr-2 h-4 w-4 animate-spin"
                aria-hidden="true"
              />
            )}
          </Button>
          <Link href="/admin/categories" className={buttonVariants()}>
            Cancel
          </Link>
        </div>
      </form>
    </Form>
  )
}

export default ProductFrom
