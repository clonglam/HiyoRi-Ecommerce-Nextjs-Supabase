import type { SidebarNavItem } from "@/types"

export type DashboardConfig = {
  sidebarNav: SidebarNavItem[]
}

export const dashboardConfig: DashboardConfig = {
  sidebarNav: [
    {
      title: "Dashboard",
      href: "/admin/dashboard",
      icon: "store",
      items: [],
    },
    {
      title: "Users",
      href: "/admin/users",
      icon: "user",
      items: [],
    },
    {
      title: "Products",
      href: "/admin/products",
      icon: "store",
      items: [],
    },
    {
      title: "Medias",
      href: "/admin/medias",
      icon: "user",
      items: [],
    },
    {
      title: "Collections",
      href: "/admin/collections",
      icon: "billing",
      items: [],
    },
    {
      title: "Orders",
      href: "/admin/orders",
      icon: "billing",
      items: [],
    },
  ],
}
