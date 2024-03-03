import React, { Suspense } from "react";
import { notFound } from "next/navigation";
import AdminShell from "@/components/admin/AdminShell";
import { ProductForm } from "@/features/products";
import db from "@/lib/supabase/db";

async function NewProjectPage() {
  const products = await db.query.products.findMany();
  if (!products) return notFound();

  return (
    <AdminShell
      heading="Add Project"
      description="Input the field below, after that press Add Project button to save the project."
    >
      <Suspense>
        <ProductForm />
      </Suspense>
    </AdminShell>
  );
}

export default NewProjectPage;
