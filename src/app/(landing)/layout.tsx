import CartSheet from "@/components/cart/CartSheet"
import Navbar from "@/components/layouts/MainNavbar"
import React, { ReactNode } from "react"

type Props = { children: ReactNode }

function MainLayout({ children }: Props) {
  return (
    <main>
      <Navbar />
      {children}
      <CartSheet />
    </main>
  )
}

export default MainLayout
