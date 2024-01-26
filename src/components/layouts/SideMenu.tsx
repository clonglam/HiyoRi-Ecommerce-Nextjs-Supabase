"use client"

import { Button } from "@/components/ui/button"
import {
  Sheet,
  SheetContent,
  SheetFooter,
  SheetTrigger,
} from "@/components/ui/sheet"
import { siteConfig } from "@/config/site"
import Link from "next/link"
import { Icons } from "../icons"
import Branding from "./Branding"

export function SideMenu() {
  return (
    <Sheet>
      <SheetTrigger asChild>
        <Button variant="ghost">
          <Icons.menu />
        </Button>
      </SheetTrigger>

      <SheetContent
        side="left"
        className="max-w-xl pr-[4rem]"
        closeButtonClassName="w-10 h-10"
      >
        <div className="grid py-8 gap-y-5 ml-[96px] mt-[120px]">
          {siteConfig.mainNav.map(({ title, href }, index) => (
            <Link key={index} href={href} className="text-4xl">
              {title}
            </Link>
          ))}
        </div>
        <SheetFooter className="fixed bottom-[96px] ml-[96px] grid space-x-0">
          <Branding className="text-[32px]" />

          <div className="mb-8 text-muted-foreground">
            <p className="text-[15px] ml-0">{siteConfig.address}</p>
            <p className="text-[15px] ml-0">
              <span>{siteConfig.phone}</span> {` / `}
              <span>
                <a>{siteConfig.email}</a>
              </span>
            </p>
          </div>

          <div className="flex gap-x-5 text-muted-foreground">
            <Icons.gitHub className="w-5 h-5" />
            <Icons.twitter className="w-5 h-5" />
            <Icons.facebook className="w-5 h-5" />
            <Icons.google className="w-5 h-5" />
          </div>
        </SheetFooter>
      </SheetContent>
    </Sheet>
  )
}
