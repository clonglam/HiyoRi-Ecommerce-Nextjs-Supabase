"use client"

import { zodResolver } from "@hookform/resolvers/zod"
import { createInsertSchema } from "drizzle-zod"
import { Suspense, useTransition } from "react"
import { useForm } from "react-hook-form"

import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form"

import { Button, buttonVariants } from "@/components/ui/button"
import { Checkbox } from "@/components/ui/checkbox"
import { Input } from "@/components/ui/input"
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"
import Link from "next/link"

import TagsField from "@/components/ui/tagsField"
import { InsertProducts, SelectProducts, products } from "@/lib/supabase/schema"

import { createProductAction, updateProductAction } from "@/_actions/products"
import ImageDialog from "@/app/(admin)/admin/medias/_components/ImageDialog"
import { Spinner } from "@/components/ui/spinner"
import { useToast } from "@/components/ui/use-toast"
import { useQuery } from "@urql/next"
import { useRouter } from "next/navigation"
import { gql } from "urql"

type ProductsFormProps = {
  product?: SelectProducts
}

function ProductFrom({ product }: ProductsFormProps) {
  const [isPending, startTransition] = useTransition()
  const router = useRouter()
  const { toast } = useToast()

  const [{ data, fetching, error }, refetch] = useQuery({
    query: ProductFormQuery,
    variables: {},
  })

  console.log("data", data)
  const form = useForm<InsertProducts>({
    resolver: zodResolver(createInsertSchema(products)),
    defaultValues: { ...product },
  })

  const {
    register,
    control,
    handleSubmit,
    formState: { errors },
  } = form

  const onSubmit = handleSubmit(async (data: InsertProducts) => {
    startTransition(async () => {
      try {
        product
          ? await updateProductAction(product.id, data)
          : await createProductAction(data)

        router.push("/admin/products")
        router.refresh()

        toast({
          title: `Product is ${product ? "updated" : "created"}.`,
          description: `${data.name}`,
        })
      } catch (err) {
        console.log("err", err)
        console.log("unexpected Error Occured")
      }
    })
  })

  return (
    <Form {...form}>
      <form
        id="project-form"
        className="gap-x-5 flex gap-y-5 flex-col px-3"
        onSubmit={onSubmit}
      >
        <div className="flex flex-col gap-y-5 max-w-[500px]">
          <FormItem>
            <FormLabel className="text-sm">name*</FormLabel>
            <FormControl>
              <Input
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

          <FormItem>
            <FormLabel className="text-sm">Description*</FormLabel>
            <FormControl>
              <Input
                defaultValue={product?.description || ""}
                aria-invalid={!!form.formState.errors.description}
                placeholder="Type a short description for the product.."
                {...register("description")}
              />
            </FormControl>
            <FormMessage />
          </FormItem>

          <FormField
            control={form.control}
            name="featured"
            render={({ field }) => (
              <FormItem className="flex flex-row items-start space-x-3 space-y-0 rounded-md border p-4 shadow">
                <FormControl>
                  <Checkbox
                    defaultChecked={false}
                    checked={field.value || false}
                    onCheckedChange={field.onChange}
                  />
                </FormControl>
                <div className="space-y-1 leading-none">
                  <FormLabel>Featured*</FormLabel>
                  <FormDescription>
                    You can manage your mobile notifications in the{" "}
                  </FormDescription>
                </div>
              </FormItem>
            )}
          />

          <FormField
            control={form.control}
            name="collectionId"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Collection Id</FormLabel>
                <Select
                  onValueChange={field.onChange}
                  defaultValue={field.value || undefined}
                >
                  <FormControl>
                    <SelectTrigger>
                      <SelectValue placeholder="Select a collection" />
                    </SelectTrigger>
                  </FormControl>
                  <SelectContent>
                    {data.collectionsCollection.edges.map(
                      ({ node: collection }) => (
                        <SelectItem value={collection.id} key={collection.id}>
                          {collection.label}
                        </SelectItem>
                      )
                    )}
                  </SelectContent>
                </Select>
                <FormDescription>
                  Select a Badge if you want the Product card attached a badge.
                </FormDescription>
                <FormMessage />
              </FormItem>
            )}
          />

          <FormField
            control={form.control}
            name="badge"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Badge</FormLabel>
                <Select
                  onValueChange={field.onChange}
                  defaultValue={field.value || undefined}
                >
                  <FormControl>
                    <SelectTrigger>
                      <SelectValue placeholder="Add a badge for the Product" />
                    </SelectTrigger>
                  </FormControl>

                  <SelectContent>
                    <SelectGroup>
                      <SelectLabel>Badge</SelectLabel>
                      <SelectItem value="new_product">New Product</SelectItem>
                      <SelectItem value="best_sale">Best Sale</SelectItem>
                      <SelectItem value="featured">featured</SelectItem>
                    </SelectGroup>
                  </SelectContent>
                </Select>

                <FormDescription>
                  Select a Badge if you want the Product card attached a badge.
                </FormDescription>
                <FormMessage />
              </FormItem>
            )}
          />

          <FormItem>
            <FormLabel className="text-sm">Rating*</FormLabel>
            <FormControl>
              <Input
                defaultValue={product?.rating}
                aria-invalid={!!form.formState.errors.rating}
                placeholder="Rating (0-5)."
                {...register("rating")}
              />
            </FormControl>
            <FormMessage />
          </FormItem>

          <FormItem>
            <FormLabel className="text-sm">Tags</FormLabel>
            <FormControl>
              <TagsField name={"tags"} defaultValue={product?.tags || []} />
            </FormControl>
            <FormMessage />
          </FormItem>

          <FormItem>
            <FormLabel className="text-sm">Price*</FormLabel>
            <FormControl>
              <Input
                defaultValue={product?.price}
                aria-invalid={!!form.formState.errors.price}
                placeholder="Price"
                {...register("price")}
              />
            </FormControl>
            <FormMessage />
          </FormItem>

          <FormField
            control={form.control}
            name="featuredImageId"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Featured Image*</FormLabel>
                <Suspense>
                  <ImageDialog
                    defaultValue={product?.featuredImageId}
                    onChange={field.onChange}
                    value={field.value}
                  />
                </Suspense>

                <FormDescription>
                  Drag n Drop the image to above section or click the button to
                  select from Image gallery.
                </FormDescription>
                <FormMessage />
              </FormItem>
            )}
          />

          <FormField
            control={form.control}
            name="featuredImageId"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Featured Image*</FormLabel>
                <Suspense>
                  <ImageDialog
                    defaultValue={product?.featuredImageId}
                    onChange={field.onChange}
                    value={field.value}
                  />
                </Suspense>

                <FormDescription>
                  Drag n Drop the image to above section or click the button to
                  select from Image gallery.
                </FormDescription>
                <FormMessage />
              </FormItem>
            )}
          />
        </div>

        <div className="py-8 flex gap-x-5 items-center">
          <Button disabled={isPending} variant={"outline"} form="project-form">
            {product ? "Update" : "Create"}
            {isPending && (
              <Spinner
                className="mr-2 h-4 w-4 animate-spin"
                aria-hidden="true"
              />
            )}
          </Button>
          <Link href="/admin/products" className={buttonVariants()}>
            Cancel
          </Link>
        </div>
      </form>
    </Form>
  )
}

export default ProductFrom

export const ProductFormQuery = gql(/* GraphQL */ `
  query ProductFormQuery {
    collectionsCollection(orderBy: [{ label: AscNullsLast }]) {
      __typename
      edges {
        node {
          id
          label
        }
      }
    }
    # productsCollection(first: 1, filter: { id: { eq: $productId } }) {
    #   __typename
    #   edges {
    #     node {
    #       id
    #     }
    #   }
    # }
  }
`)
