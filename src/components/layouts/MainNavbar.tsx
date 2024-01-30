import Link from "next/link"
import React from "react"
import { Icons } from "../icons"
import { Input } from "../ui/input"
import SearchInput from "./SearchInput"
import { SideMenu } from "./SideMenu"
import Branding from "./Branding"

type Props = {}

function Navbar({}: Props) {
  return (
    <nav className="container bg-background/95">
      <div className="flex gap-x-8 justify-between items-center">
        {/* Menu & branding */}
        <div className="flex gap-x-3 items-center">
          <SideMenu />
          <Branding />
        </div>

        <SearchInput />

        {/* Nav Action */}
        <div className="flex gap-x-5 relative">
          <Link href="/login" className="flex items-center text-foreground">
            <Icons.user className="h-4 w-4 mr-3" />
            <label className="text-sm">Login or Sign up</label>
          </Link>
          <Icons.heart className="h-4 w-4" />
          <Icons.cart className="h-4 w-4" />
        </div>
      </div>
    </nav>
  )
}

export default Navbar
