import React from "react"
import { Icon } from "../icons"
import Link, { LinkProps } from "next/link"

interface NavLinkButtonProps extends LinkProps {
  children: React.ReactNode
}

function NavLinkButton({ children, href, ...props }: NavLinkButtonProps) {
  return (
    <Link href={href} {...props}>
      {children}
    </Link>
  )
}

export default NavLinkButton
