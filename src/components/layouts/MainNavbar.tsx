import { cn } from "@/lib/utils"
import { Suspense } from "react"
import UserNav from "../auth/UserNav"
import CartLink from "../cart/CartLink"
import CartNav from "../cart/CartNav"
import { Icons } from "../icons"
import Branding from "./Branding"
import MobileNavbar from "./MobileNavbar"
import NavLinkButton from "./NavLinkButton"
import SearchInput from "./SearchInput"
import { SideMenu } from "./SideMenu"

// const SearchInput = dynamic(() => import("./SearchInput"), { ssr: false })

interface MainNavbarProps {
  adminLayout?: boolean
}
async function MainNavbar({ adminLayout = false }: MainNavbarProps) {
  return (
    <nav className="bg-background/95 fixed z-50 w-full">
      <div
        className={cn(
          adminLayout ? "mx-auto px-[3rem] max-w-[2500px] py-3" : "container"
        )}
      >
        <div className="hidden md:flex gap-x-8 justify-between items-center">
          {/* Menu & branding */}
          <div className="flex gap-x-3 items-center">
            <SideMenu />
            <Branding />
          </div>

          {adminLayout ? (
            <></>
          ) : (
            <Suspense>
              <SearchInput />
            </Suspense>
          )}

          {/* Nav Action */}
          <div className="flex gap-x-5 relative items-center">
            <Suspense>
              <UserNav />
            </Suspense>

            <NavLinkButton href={"/wish-list"}>
              <Icons.heart className="w-4 h-4" aria-label="wishlist" />
            </NavLinkButton>

            <Suspense fallback={<CartLink productCount={0} />}>
              <CartNav />
            </Suspense>
          </div>
        </div>
        <MobileNavbar />
      </div>
    </nav>
  )
}

export default MainNavbar
