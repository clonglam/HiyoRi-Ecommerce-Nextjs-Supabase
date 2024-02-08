import React from "react"

import { notFound } from "next/navigation"

import AdminShell from "@/components/admin/AdminShell"
import ProductForm from "@/components/admin/products/ProductForm"
import db from "@/lib/supabase/db"

type Props = {}

async function NewProjectPage({}: Props) {
  const products = await db.query.products.findMany()
  if (!products) return notFound()

  return (
    <AdminShell
      heading="Add Project"
      description="Input the field below, after that press Add Project button to save the project."
    >
      <div className="">
        <ProductForm />
      </div>
    </AdminShell>
  )
}

export default NewProjectPage
