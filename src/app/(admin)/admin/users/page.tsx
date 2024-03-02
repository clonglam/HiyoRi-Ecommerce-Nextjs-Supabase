import { listUsers } from "@/_actions/authAdmin"
import { getCurrentUser } from "@/_actions/users"
import AdminShell from "@/components/admin/AdminShell"
import { ProductsDataTable } from "@/features/cms"
import AdminUserNav from "@/components/admin/users/AdminUserNav"
import { UsersColumns } from "@/components/admin/users/UsersColumns"

type AdminUsersPageProps = {
  searchParams: {
    [key: string]: string | string[] | undefined
  }
}

async function UsersPage({ searchParams }: AdminUsersPageProps) {
  const currentUser = await getCurrentUser()

  const users = await listUsers({})

  return (
    <AdminShell heading="Users" description="Edit/Create new user by admin.">
      <AdminUserNav />
      <ProductsDataTable columns={UsersColumns} data={users || []} />
    </AdminShell>
  )
}

export default UsersPage
