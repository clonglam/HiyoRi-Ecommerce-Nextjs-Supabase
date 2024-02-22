"use client"
import { getStripe } from "@/lib/stripe/stripeClient"
import { cn } from "@/lib/utils"
import React from "react"
import { Button } from "../ui/button"
import { useToast } from "../ui/use-toast"
import { CartItems } from "./useCartStore"

type CheckoutButtonProps = React.ComponentProps<typeof Button> & {
  order: CartItems
  guest: boolean
}

function CheckoutButton({ order, guest, ...props }: CheckoutButtonProps) {
  const { toast } = useToast()

  const onClickHandler = async () => {
    console.log("orders", order)
    const res = await fetch("/api/create-checkout-session", {
      method: "POST",
      body: JSON.stringify({ orderProducts: order, guest }),
    })

    if (!res.ok) toast({ title: "Somme Error occured" })
    console.log("res", res)
    const { sessionId } = await res.json()

    console.log("sessionId", sessionId)
    const stripe = await getStripe()
    stripe?.redirectToCheckout({ sessionId })
  }
  return (
    <Button
      className={cn("w-full", props.className)}
      {...props}
      onClick={onClickHandler}
    >
      Check out
    </Button>
  )
}

export default CheckoutButton
