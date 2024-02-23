import { Suspense } from "react"
import CartNav from "../cart/CartNav"
import Branding from "./Branding"
import MobileSearchInput from "./MobileSearchInput"
import { SideMenu } from "./SideMenu"
import CartLink from "../cart/CartLink"

type Props = {}

function MobileNavbar({}: Props) {
  return (
    <div className="md:hidden flex gap-x-8 justify-between items-center h-[64px]">
      <div className="flex gap-x-3 items-center">
        <SideMenu />
        <MobileSearchInput />
      </div>

      <Branding />

      <Suspense fallback={<CartLink productCount={0} />}>
        <CartNav />
      </Suspense>
    </div>
  )
}

export default MobileNavbar
