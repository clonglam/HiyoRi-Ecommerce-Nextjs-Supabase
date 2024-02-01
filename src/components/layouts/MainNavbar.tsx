import Link from "next/link"
import { Icons } from "../icons"
import Branding from "./Branding"
import MobileNavbar from "./MobileNavbar"
import SearchInput from "./SearchInput"
import { SideMenu } from "./SideMenu"
import AuthButton from "../auth/AuthButton"

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
        <div className="flex gap-x-5 relative">
          <AuthButton />
          <Icons.heart className="h-4 w-4" />
          <Icons.cart className="h-4 w-4" />
        </div>
      </div>
      <MobileNavbar />
    </nav>
  )
}

export default MainNavbar
