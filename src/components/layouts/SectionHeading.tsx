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

function SectionHeading({
  heading,
  description,
  children,
  ...props
}: HeaderProps) {
  return (
    <section className="pt-[20px] pb-[30px]" {...props}>
      <h1 className="text-5xl font-semibold mb-8">{heading}</h1>
      <p className="max-w-xl text-lg leading-[1.8] tracking-wide mb-2">
        {description}
      </p>
      {/* {children} */}
    </section>
  )
}

export default SectionHeading
