import dynamic from "next/dynamic"
import UserNav from "../auth/UserNav"
import { Icons } from "../icons"
import Branding from "./Branding"
import MobileNavbar from "./MobileNavbar"
import { SideMenu } from "./SideMenu"

import NavLinkButton from "./NavLinkButton"
import { cn } from "@/lib/utils"
import { getCurrentUser, isAdmin } from "@/_actions/users"
// import CartNav from "../cart/CartNav"
import { Suspense } from "react"
const CartNav = dynamic(() => import("../cart/CartNav"), { ssr: false })
const SearchInput = dynamic(() => import("./SearchInput"), { ssr: false })

interface MainNavbarProps {
  adminLayout?: boolean
}
async function MainNavbar({ adminLayout = false }: MainNavbarProps) {
  return (
    <nav
      className={cn(
        "bg-background/95",
        adminLayout ? "mx-auto px-[3rem] max-w-[2500px] py-3" : "container"
      )}
    >
      <div className="hidden md:flex gap-x-8 justify-between items-center">
        {/* Menu & branding */}
        <div className="flex gap-x-3 items-center">
          <SideMenu />
          <Branding />
        </div>

        {adminLayout ? <></> : <SearchInput />}

        {/* Nav Action */}
        <div className="flex gap-x-5 relative items-center">
          <UserNav />

          <NavLinkButton href={"/wish-list"}>
            <Icons.heart className="w-4 h-4" aria-label="wishlist" />
          </NavLinkButton>

          <CartNav />
        </div>
      </div>
      <MobileNavbar />
    </nav>
  )
}

export default MainNavbar
