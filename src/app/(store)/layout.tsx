import CartSheet from "@/components/cart/CartSheet"
import MainFooter from "@/components/layouts/MainFooter"
import Navbar from "@/components/layouts/MainNavbar"
import { ReactNode } from "react"

type Props = { children: ReactNode }

async function StoreLayout({ children }: Props) {
  return (
    <main>
      <Navbar />
      {children}
      <CartSheet />
      <MainFooter />
    </main>
  )
}

export default StoreLayout
