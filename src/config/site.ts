import type { NavItemWithOptionalChildren } from "@/types"

import { slugify } from "@/lib/utils"

export type SiteConfig = typeof siteConfig

export const siteConfig = {
  name: "Skateshop13",
  description:
    "An open source e-commerce skateshop build with everything new in Next.js 13.",
  url: "https://skateshop13.vercel.app/",
  ogImage: "https://skateshop13.vercel.app/opengraph-image.png",
  address: "1600 Amphitheatre Parkway in Mountain View, California",
  phone: "+1(234)-567-8901",
  email: "info@my-domain.com",
  mainNav: [
    {
      title: "Shop",
      href: "/shop",
      description: "All the products we have to offer.",
      items: [],
    },
    {
      title: "Our Story",
      href: "/our-story",
      description: "Our Story.",
      items: [],
    },
    {
      title: "Brands & Designers",
      href: "/",
      description: "Read our latest blog posts.",
      items: [],
    },
    {
      title: "Blog",
      href: "/blog",
      description: "Read our latest blog posts.",
      items: [],
    },
    {
      title: "Contact",
      href: "/contact",
      description: "Read our latest blog posts.",
      items: [],
    },
  ] satisfies NavItemWithOptionalChildren[],
  links: {
    twitter: "https://twitter.com/sadmann17",
    github: "https://github.com/sadmann7/skateshop",
  },
}
