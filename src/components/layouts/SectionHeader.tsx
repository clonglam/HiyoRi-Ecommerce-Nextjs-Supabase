import React from "react"

type Props = {
  heading: string
}

function SectionHeader({ heading }: Props) {
  return (
    <section>
      <h1 className="">{heading}</h1>
    </section>
  )
}

export default SectionHeader
