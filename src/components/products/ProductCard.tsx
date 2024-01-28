import React from "react"
import Image from "next/image"

import { cn } from "@/lib/utils"
import { Button } from "@/components/ui/button"
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import { Icons } from "../icons"
import { Rating } from "../ui/rating"
import Link from "next/link"

type ProductCard = {
  id: string
  image: {
    src: string
    alt: string
  }
  //   featured: boolean
  name: string
  description: string
  price: number
}

type CardProps = React.ComponentProps<typeof Card>
type ProductCardProps = CardProps & {
  id: string
  name: string
  slug: string
  description: string
  price: number
  image: {
    src: string
    alt: string
  }
}

export function ProductCard({
  className,
  id,
  slug,
  name,
  image,
  description,
  price,
  ...props
}: ProductCardProps) {
  return (
    <Card className={cn("w-full border-0", className)} {...props}>
      <CardContent className="relative">
        <Link href={`/products/${id}`}>
          <Image
            src={image.src}
            alt={image.alt}
            width={280}
            height={280}
            className="aspect-[1/1] object-cover object-center"
          />
        </Link>
      </CardContent>
      <CardHeader>
        <CardTitle>
          <Link href={`/products/${id}`}>{name}</Link>
        </CardTitle>
        <CardDescription>{description}</CardDescription>
        <div>$382.00</div>
        <Rating value={3.5} precision={0.5} readOnly />
      </CardHeader>
      <CardFooter className="gap-x-5">
        <Button className="rounded-full p-0 h-8 w-8">
          <Icons.basket className="h-4 w-4" />
        </Button>
        <Button variant="ghost" className="rounded-full p-0 h-8 w-8">
          <Icons.heart className="h-4 w-4" />
        </Button>
      </CardFooter>
    </Card>
  )
}

export default ProductCard
