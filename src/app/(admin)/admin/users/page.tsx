import { listUsers } from "@/_actions/authAdmin"
import { getCurrentUser } from "@/_actions/users"
import AdminShell from "@/components/admin/AdminShell"
import { DataTable } from "@/components/admin/products/DataTable"
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
      <DataTable columns={UsersColumns} data={users || []} />
    </AdminShell>
  )
}

export default UsersPage
