import CartSheet from "@/components/cart/CartSheet"
import MainFooter from "@/components/layouts/MainFooter"
import Navbar from "@/components/layouts/MainNavbar"
import React, { ReactNode } from "react"

type Props = { children: ReactNode }

function StoreLayout({ children }: Props) {
  return (
    <main>
      <Navbar adminLayout={true} />
      {children}
      <MainFooter />
    </main>
  )
}

export default StoreLayout
