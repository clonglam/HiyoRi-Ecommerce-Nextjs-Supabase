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

      <NavLinkButton href={"/cart"}>
        <Icons.cart className="w-4 h-4" aria-label="cart" />
      </NavLinkButton>
    </div>
  )
}

export default MobileNavbar
