import UserNav from "../auth/UserNav"
import { Icons } from "../icons"
import Branding from "./Branding"
import MobileNavbar from "./MobileNavbar"
import SearchInput from "./SearchInput"
import { SideMenu } from "./SideMenu"

import NavLinkButton from "./NavLinkButton"
import { cn } from "@/lib/utils"

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

          <NavLinkButton href={"/cart"}>
            <Icons.cart className="w-4 h-4" aria-label="cart" />
          </NavLinkButton>
        </div>
      </div>
      <MobileNavbar />
    </nav>
  )
}

export default MainNavbar
