import type { SidebarNavItem } from "@/types"

export type DashboardConfig = {
  sidebarNav: SidebarNavItem[]
}

export const dashboardConfig: DashboardConfig = {
  sidebarNav: [
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
