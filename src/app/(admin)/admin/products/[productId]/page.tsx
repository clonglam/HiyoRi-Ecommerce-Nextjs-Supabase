import AdminShell from "@/components/admin/AdminShell"
import ProductForm from "@/components/admin/products/ProductForm"
import db from "@/lib/supabase/db"
import { products } from "@/lib/supabase/schema"
import { eq } from "drizzle-orm"
import { notFound } from "next/navigation"

type EditProjectPageProps = {
  params: {
    productId: string
  }
}

async function EditProjectPage({
  params: { productId },
}: EditProjectPageProps) {
  const product = await db.query.products.findFirst({
    where: eq(products.id, parseInt(productId)),
  })
  if (!product) return notFound()

  return (
    <AdminShell
      heading="Add Project"
      description="Input the field below, after that press Add Project button to save the project."
    >
      <div className="">
        <ProductForm product={product} />
      </div>
    </AdminShell>
  )
}

export default EditProjectPage
