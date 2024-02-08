import AdminShell from "@/components/admin/AdminShell"
import { PaginationTable } from "@/components/admin/PaginationTable"
import { DataTable } from "@/components/admin/products/ProductTable"
import { ProductsColumns } from "@/components/admin/products/ProductsColumns"
import { gql } from "@/gql"
import { getClient } from "@/lib/urql/urql"
import { notFound } from "next/navigation"
import React from "react"

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
            ...ProductsTableFragment
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
      <DataTable
        columns={ProductsColumns}
        data={data.productsCollection?.edges || []}
      />
    </AdminShell>
  )
}

export default ProductsPage
