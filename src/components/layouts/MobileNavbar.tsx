import React from "react"
import SearchInput from "./SearchInput"
import Branding from "./Branding"
import { SideMenu } from "./SideMenu"
import { Icons } from "../icons"

type Props = {}

function MobileNavbar({}: Props) {
  return (
    <div className="md:hidden flex gap-x-8 justify-between items-center h-[64px]">
      <div className="flex gap-x-3 items-center">
        <SideMenu />
        <Icons.search size={18} />
      </div>

      <Branding />
      <Icons.cart />
    </div>
  )
}

export default MobileNavbar
