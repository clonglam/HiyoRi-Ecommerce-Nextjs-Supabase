import { getCurrentUser } from "@/_actions/users"
import MainFooter from "@/components/layouts/MainFooter"
import Navbar from "@/components/layouts/MainNavbar"
import { redirect } from "next/navigation"
import { ReactNode } from "react"

type Props = { children: ReactNode }

async function AdminLayout({ children }: Props) {
  const currentUser = await getCurrentUser()

  if (!currentUser || currentUser.role !== "ADMIN") redirect(`/sign-in`)
  // TODO: Attach the error at the end of the url
  return (
    <main>
      <Navbar adminLayout={true} />
      {children}
      <MainFooter />
    </main>
  )
}

export default AdminLayout
