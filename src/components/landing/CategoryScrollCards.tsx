import React from "react"
import { ScrollArea, ScrollBar } from "@/components/ui/scroll-area"
import Image from "next/image"
import Link from "next/link"

type Props = {
  categoryScrollCards: CategoryScrollCard[]
}

export interface CategoryScrollCard {
  imgSrc: string
  label: string
  alt: string
  href: string
}

function CategoryScrollCards({ categoryScrollCards }: Props) {
  return (
    <ScrollArea className="whitespace-nowrap relative container">
      <div className="flex w-max space-x-10 py-5 overflow-auto">
        {categoryScrollCards.map(({ alt, imgSrc, href, label }, index) => (
          <figure key={index} className="shrink-0">
            <Link href={href} className="overflow-hidden rounded-md relative">
              <Image
                src={imgSrc}
                height={200}
                width={350}
                className="aspect-[16/9] opacity-65 h-fit w-fit object-cover rounded-md "
                alt={alt}
              />
              <figcaption className="absolute bottom-3 left-3 text-md text-foreground">
                {label}
              </figcaption>
            </Link>
          </figure>
        ))}
      </div>
      <ScrollBar orientation="horizontal" />
    </ScrollArea>
  )
}

export default CategoryScrollCards
