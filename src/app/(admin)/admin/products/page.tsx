import AdminShell from "@/components/admin/AdminShell"
import { DataTable } from "@/components/admin/products/DataTable"
import { ProductsColumns } from "@/components/admin/products/ProductsColumns"
import { buttonVariants } from "@/components/ui/button"
import { gql } from "@/gql"
import { getClient } from "@/lib/urql"
import { cn } from "@/lib/utils"
import Link from "next/link"
import { notFound } from "next/navigation"
import { Suspense } from "react"

type AdminProjectsPageProps = {
  searchParams: {
    [key: string]: string | string[] | undefined
  }
}

async function ProductsPage({ searchParams }: AdminProjectsPageProps) {
  const AdminProductsPageQuery = gql(/* GraphQL */ `
    query AdminProductsPageQuery {
      productsCollection(orderBy: [{ created_at: DescNullsLast }]) {
        edges {
          node {
            id
            ...ProductColumnFragment
          }
        }
      }
    }
  `)

  const { data } = await getClient().query(AdminProductsPageQuery, {})

  if (!data) return notFound()

  return (
    <AdminShell
      heading="Products"
      description={"Edit products from the dashboard. "}
    >
      <section className="flex justify-end items-center pb-5 w-full">
        <Link href="/admin/products/new" className={cn(buttonVariants())}>
          New Product
        </Link>
      </section>

      <Suspense>
        <DataTable
          columns={ProductsColumns}
          data={data.productsCollection?.edges || []}
        />
      </Suspense>
    </AdminShell>
  )
}

export default ProductsPage
