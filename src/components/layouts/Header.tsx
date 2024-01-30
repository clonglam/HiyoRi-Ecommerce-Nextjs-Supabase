import React, { ReactNode } from "react"

interface HeaderProps
  extends React.DetailedHTMLProps<
    React.HTMLAttributes<HTMLDivElement>,
    HTMLDivElement
  > {
  heading: string
  description?: string
  children?: ReactNode
}

function Header({ heading, description, children, ...props }: HeaderProps) {
  return (
    <div className="pt-[80px] pb-[150px]" {...props}>
      <h1 className="text-4xl font-semibold text-center mb-8">{heading}</h1>
      <p>{description}</p>
      {children}
    </div>
  )
}

export default Header
