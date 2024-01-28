import React, { ReactNode } from "react"

type Props = {
  heading: string
  children: ReactNode
}

function SectionHeader({ heading, children }: Props) {
  return (
    <section className="pt-[80px] pb-[150px]">
      <h1 className="text-4xl font-semibold text-center mb-8">{heading}</h1>
      {children}
    </section>
  )
}

export default SectionHeader
