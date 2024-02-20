// import CartNav from "../cart/CartNav"
import dynamic from "next/dynamic"
const CartNav = dynamic(() => import("../cart/CartNav"), { ssr: false })
import { Icons } from "../icons"
import Branding from "./Branding"
import MobileSearchInput from "./MobileSearchInput"
import NavLinkButton from "./NavLinkButton"
import { SideMenu } from "./SideMenu"

type Props = {}

function MobileNavbar({}: Props) {
  return (
    <div className="md:hidden flex gap-x-8 justify-between items-center h-[64px]">
      <div className="flex gap-x-3 items-center">
        <SideMenu />
        <MobileSearchInput />
      </div>

      <Branding />

      <CartNav />
    </div>
  )
}

export default MobileNavbar
