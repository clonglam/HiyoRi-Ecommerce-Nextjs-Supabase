import UserNav from "../auth/UserNav"
import { Icons } from "../icons"
import Branding from "./Branding"
import MobileNavbar from "./MobileNavbar"
import SearchInput from "./SearchInput"
import { SideMenu } from "./SideMenu"

import NavLinkButton from "./NavLinkButton"

async function MainNavbar() {
  return (
    <nav className="container bg-background/95">
      <div className="hidden md:flex gap-x-8 justify-between items-center">
        {/* Menu & branding */}
        <div className="flex gap-x-3 items-center">
          <SideMenu />
          <Branding />
        </div>

        <SearchInput />

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
