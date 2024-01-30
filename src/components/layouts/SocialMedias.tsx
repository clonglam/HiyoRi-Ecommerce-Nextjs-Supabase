import React from "react"
import { Icons } from "../icons"
import { cn } from "@/lib/utils"

type Props = {
  containerClassName?: string
  itemsClassName?: string
}

function SocialMedias({ containerClassName, itemsClassName }: Props) {
  return (
    <div
      className={cn("flex gap-x-5 text-muted-foreground", containerClassName)}
    >
      <Icons.gitHub className={cn("w-4 h-4 md:w-5 md:h-5", itemsClassName)} />
      <Icons.twitter className={cn("w-4 h-4 md:w-5 md:h-5", itemsClassName)} />
      <Icons.facebook className={cn("w-4 h-4 md:w-5 md:h-5", itemsClassName)} />
      <Icons.google className={cn("w-4 h-4 md:w-5 md:h-5", itemsClassName)} />
    </div>
  )
}

export default SocialMedias
