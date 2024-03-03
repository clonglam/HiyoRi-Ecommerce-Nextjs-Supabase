import type { NavItemWithOptionalChildren } from "@/types";

import { slugify } from "@/lib/utils";

export type SiteConfig = typeof siteConfig;

export const siteConfig = {
  name: "HIYORI",
  description: "Ecommerce Application built with NextJS 14",
  url: "https://hiyori.hugo-coding.com",
  address: "1600 Amphitheatre Parkway in Mountain View, California",
  phone: "+1(234)-567-8901",
  email: "hello@hugo-coding.com",
  mainNav: [
    {
      title: "Shop",
      href: "/shop",
      description: "All the products we have to offer.",
      items: [],
    },
    {
      title: "Our Story",
      href: "https://github.com/clonglam/HIYORI-master",
      description: "Our Story.",
      items: [],
    },
    {
      title: "Brands & Designers",
      href: "https://github.com/clonglam/HIYORI-master",
      description: "Read our latest blog posts.",
      items: [],
    },
    {
      title: "Blog",
      href: "https://blog.hugo-coding.com",
      description: "Read our latest blog posts.",
      items: [],
    },
    {
      title: "Contact",
      href: "https://hugo-coding.com/#contact",
      description: "Read our latest blog posts.",
      items: [],
    },
  ] satisfies NavItemWithOptionalChildren[],
};
