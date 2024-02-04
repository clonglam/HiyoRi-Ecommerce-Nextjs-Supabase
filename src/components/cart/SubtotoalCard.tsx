import React from "react"
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "../ui/card"
import { Button } from "../ui/button"
import { cn } from "@/lib/utils"

type SubtotoalProps = React.ComponentProps<typeof Card> & {
  subtotal: number
  productcount: number
}

function SubtotoalCard({
  productcount,
  subtotal,
  className,
  ...props
}: SubtotoalProps) {
  return (
    <Card {...props} className={cn("w-full h-[180px] px-3", className)}>
      <CardHeader className="px-3 pt-2 pb-0 text-md">
        <CardTitle className="text-lg mb-0">Subtotoal: </CardTitle>
        <CardDescription>{`${productcount} Items`}</CardDescription>
      </CardHeader>
      <CardContent className="relative overflow-hidden px-3 py-2">
        <p className="text-3xl md:text-lg lg:text-2xl font-bold">{`$ ${subtotal.toFixed(2).toString()}`}</p>
      </CardContent>

      <CardFooter className="gap-x-2 md:gap-x-5 px-3">
        <Button className="w-full">Check out</Button>
      </CardFooter>
    </Card>
  )
}

export default SubtotoalCard
