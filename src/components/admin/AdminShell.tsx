import React, { ReactNode } from "react"

type AdminShellProps = {
  heading: string
  description: string
  children: ReactNode
}

function AdminShell({ heading, description, children }: AdminShellProps) {
  return (
    <section>
      <div className="flex justify-between items-center mb-5 pb-3 border-b">
        <div>
          <h1 className="text-2xl font-semibold w-[480px] mb-2 leading-tight">
            {heading}
          </h1>
          <p className="max-w-xl text-zinc-500 text-md w-[580px] leading-tight">
            {description}
          </p>
        </div>
      </div>

      {children}
    </section>
  )
}

export default AdminShell
