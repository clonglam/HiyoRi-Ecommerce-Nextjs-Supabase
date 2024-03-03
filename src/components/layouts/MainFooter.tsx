import { NavItemWithOptionalChildren } from "@/types";
import Link from "next/link";
import NewsletterForm from "./NewsletterForm";
import Branding from "./Branding";
import { siteConfig } from "@/config/site";
import SocialMedias from "./SocialMedias";

type Props = {};

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
          href: "https://github.com/clonglam/HIYORI-master",
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
  ];

  return (
    <footer className="bg-muted-background mt-[80px] md:mt-[180px] border-t border-zinc-600">
      <div className="container pb-10 pt-4 md:pt-8">
        <div className="hidden md:grid grid-cols-5 mb-[80px] gap-x-[100px] place-content-between space-y-9">
          <div className="max-w-md col-span-5 lg:col-span-2">
            <NewsletterForm />
          </div>

          <div className="grid grid-cols-3 col-span-5 lg:col-span-3 gap-x-6 max-w-[680px]">
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

        <div className="flex gap-x-5 justify-between flex-col md:flex-row md:items-center items-start ">
          {/* <div className="grid gap-x-5 justify-between items-center"> */}
          <div className="flex flex-col md:flex-row gap-x-5 md:items-center items-start mb-4 md:mb-0">
            <Branding className="text-3xl" />
            <div className="text-[10px] font-light">
              <p>{siteConfig.address}</p>
              <p>
                {siteConfig.phone} /{" "}
                <Link
                  className="hover:underline hover:text-primary"
                  href={`mailto:${siteConfig.email}`}
                >
                  {siteConfig.email}
                </Link>
              </p>
            </div>
          </div>

          <SocialMedias containerClassName="mr-12" />
        </div>
      </div>
    </footer>
  );
}

export default MainFooter;
