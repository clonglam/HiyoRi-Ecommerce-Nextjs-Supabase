"use client"
import React from "react"
import Stripe from "stripe"
import { Button } from "../ui/button"
import { cn } from "@/lib/utils"
import { getStripe } from "@/lib/stripe/stripeClient"
import { toast, useToast } from "../ui/use-toast"

type CheckoutButtonProps = React.ComponentProps<typeof Button> & {
  order: { id: string; quantity: number }[]
}

function CheckoutButton({ order, ...props }: CheckoutButtonProps) {
  const { toast } = useToast()
  const onClickHandler = async () => {
    const res = await fetch("/api/create-checkout-session", {
      method: "POST",
      body: JSON.stringify(order),
    })
    if (!res.ok) toast({ title: "Somme Error occured" })
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
