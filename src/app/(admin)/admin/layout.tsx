import { SettingSidebarNav } from "@/components/setting/SettingSidebar"
import { Separator } from "@/components/ui/separator"
import { Metadata } from "next"
import Image from "next/image"

export const metadata: Metadata = {
  title: "Admin Dashboard",
  description: "Admin Dashboard",
}

const sidebarNavItems = [
  {
    title: "Products",
    href: "/admin/products",
  },
  {
    title: "Orders",
    href: "/admin/orders",
  },
  {
    title: "Appearance",
    href: "/examples/forms/appearance",
  },
  {
    title: "Notifications",
    href: "/examples/forms/notifications",
  },
  {
    title: "Display",
    href: "/examples/forms/display",
  },
]

interface SettingsLayoutProps {
  children: React.ReactNode
}

export default function SettingsLayout({ children }: SettingsLayoutProps) {
  return (
    <>
      <div className="space-y-6 p-10 pb-16">
        <div className="space-y-0.5">
          <h2 className="text-2xl font-bold tracking-tight">Admin</h2>
          <p className="text-muted-foreground">
            Manage your account settings and set e-mail preferences.
          </p>
        </div>
        <Separator className="my-6" />
        <div className="flex flex-col space-y-8 lg:flex-row lg:space-x-12 lg:space-y-0">
          <aside className="-mx-4 lg:w-1/5">
            <SettingSidebarNav items={sidebarNavItems} />
          </aside>
          <div className="flex-1 lg:max-w-2xl min-h-[30vh]">{children}</div>
        </div>
      </div>
    </>
  )
}
