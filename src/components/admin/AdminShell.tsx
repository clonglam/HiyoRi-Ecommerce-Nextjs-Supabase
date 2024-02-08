import React, { ReactNode } from "react"

type AdminShellProps = {
  heading: string
  description: string
  children: ReactNode
}

function AdminShell({ heading, description, children }: AdminShellProps) {
  return (
    <section>
      <div></div>
      <div>{children}</div>
    </section>
  )
}

export default AdminShell
