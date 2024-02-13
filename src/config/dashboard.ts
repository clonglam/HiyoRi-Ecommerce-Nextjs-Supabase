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
      title: "Category",
      href: "/admin/categories",
      icon: "billing",
      items: [],
    },
  ],
}
