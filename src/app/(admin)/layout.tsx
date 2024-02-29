import { getCurrentUser } from "@/_actions/users"
import MainFooter from "@/components/layouts/MainFooter"
import Navbar from "@/components/layouts/MainNavbar"
import { redirect } from "next/navigation"
import { ReactNode } from "react"

type Props = { children: ReactNode }

async function AdminLayout({ children }: Props) {
  // const currentUser = await getCurrentUser()

  // console.log("currentUser", currentUser)
  // if (!currentUser || currentUser.role !== "ADMIN")
  //   redirect(`/sign-in?error=Only authenticated users can access`)
  // TODO: confirm can This error message displaty
  return (
    <main>
      <Navbar adminLayout={true} />
      {children}
      <MainFooter />
    </main>
  )
}

export default AdminLayout
