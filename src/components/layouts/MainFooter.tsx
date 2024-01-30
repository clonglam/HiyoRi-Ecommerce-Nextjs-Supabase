import { NavItemWithOptionalChildren } from "@/types"
import Link from "next/link"
import NewsletterForm from "./NewsletterForm"
import Branding from "./Branding"
import { siteConfig } from "@/config/site"
import SocialMedias from "./SocialMedias"

type Props = {}

function MainFooter({}: Props) {
  const footerSiteMap: NavItemWithOptionalChildren[] = [
    {
      title: "Shop",
      items: [
        {
          title: "Furniture",
          href: "/collections/furniture",
          items: [],
        },
        {
          title: "Lighting",
          disabled: true,
          items: [],
        },
        {
          title: "Rugs",
          disabled: true,
          items: [],
        },
        {
          title: "New",
          disabled: true,
          items: [],
        },
        {
          title: "Sale",
          disabled: true,
          items: [],
        },
      ],
    },
    {
      title: "Customer Service",
      items: [
        {
          title: "Shipping & Returns",
          disabled: true,
          items: [],
        },
        {
          title: "Store Policy",
          disabled: true,
          items: [],
        },
        {
          title: "Payment Methods",
          disabled: true,
          items: [],
        },
        {
          title: "FAQ",
          disabled: true,
          items: [],
        },
      ],
    },
    {
      title: "About HIYORI",
      items: [
        {
          title: "Our Story",
          href: "/our-story",
          items: [],
        },
        {
          title: "Brands & Designers",
          disabled: true,
          items: [],
        },
        {
          title: "Stores",
          disabled: true,
          items: [],
        },
        {
          title: "Contact",
          disabled: true,
          items: [],
        },
      ],
    },
  ]

  return (
    <footer className="bg-muted-background container pb-10">
      <div className="grid grid-cols-2 mb-[80px]">
        <div className="max-w-md col-span-2 md:col-span-1">
          <NewsletterForm />
        </div>

        <div className="grid grid-cols-3">
          {footerSiteMap.map(({ title, items }, index) => (
            <div key={index}>
              <p className="font-semibold mb-3">{title}</p>
              <div className="flex flex-col gap-y-2 flex-wrap">
                {items?.map((i, index) => (
                  <Link href={i.href || ""} key={index} className="text-sm">
                    {i.title}
                  </Link>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="flex gap-x-5 justify-between items-center">
        <div className="flex gap-x-5 items-center">
          <Branding className="text-3xl" />
          <div className="text-xs">
            <p>{siteConfig.address}</p>
            <p>
              {siteConfig.phone} / {siteConfig.email}
            </p>
          </div>
        </div>

        <SocialMedias containerClassName="mr-12" />
      </div>
    </footer>
  )
}

export default MainFooter
