import { shopOrders, InsertShopOrders } from "./../../../lib/supabase/schema"
import { env } from "@/env.mjs"
import { stripe } from "@/lib/stripe"
import db from "@/lib/supabase/db"
import { PaymentStatus } from "@/lib/supabase/schema"
import { headers } from "next/headers"
import { NextRequest, NextResponse } from "next/server"
import Stripe from "stripe"
import { address } from "@/lib/supabase/schema"

const relevantEvents = new Set([
  "product.created",
  "product.updated",
  "price.created",
  "price.updated",
  "payment_intent.succeeded",
  "checkout.session.completed",
  "customer.subscription.created",
  "customer.subscription.updated",
  "customer.subscription.deleted",
])

export async function POST(request: NextRequest) {
  const body = await request.text()
  const sig = headers().get("Stripe-Signature")

  const webhookSecret = env.STRIPE_WEBHOOK_SECERT_KEY

  let event: Stripe.Event
  try {
    if (!sig || !webhookSecret) return
    event = stripe.webhooks.constructEvent(body, sig, webhookSecret)
  } catch (err: any) {
    console.log(`Error message: ${err.message}`)
    return new NextResponse(`Webhook Error: ${err.message}`, { status: 400 })
  }
  if (relevantEvents.has(event.type)) {
    try {
      switch (event.type) {
        case "product.created":
          break
        case "payment_intent.succeeded":
          console.log("payment_intent.succeeded")
          // console.log("event.data.object", event.data.object)
          break
        case "checkout.session.completed":
          const checkoutSession = event.data.object as Stripe.Checkout.Session
          console.log("checkoutSession", checkoutSession)

          if (checkoutSession.status === "complete") {
            const customer_details = checkoutSession.customer_details

            const insertedAddress = await db
              .insert(address)
              .values({
                city: customer_details.address.city || "",
                country: customer_details.address.country || "",
                line1: customer_details.address.line1 || "",
                line2: customer_details.address.line2 || "",
                postal_code: customer_details.address.postal_code || "",
                state: customer_details.address.state || "",
              })
              .returning()[0]

            const data: InsertShopOrders = {
              id: checkoutSession.id,
              userId: checkoutSession.client_reference_id!,
              amountTotal: `${checkoutSession.amount_total}` || "0",
              amountSubtotal: `${checkoutSession.amount_subtotal}` || "0",
              paymentStatus: checkoutSession.payment_status as PaymentStatus,
              email: customer_details!.email,
              name: customer_details!.name!,
              paymentMethodTypes: checkoutSession.payment_method_types[0],
              addressId: insertedAddress.id,
            }

            const insertedOrder = await db
              .insert(shopOrders)
              .values(data)
              .returning()

            if (!customer_details || !customer_details.address)
              return new NextResponse(
                'Webhook error: "Webhook handler failed. View logs."',
                { status: 400 }
              )
          }
          break
        default:
          console.log("")
          throw new Error("Unhandled relevant event!")
      }
    } catch (error) {
      console.log(error)
      return new NextResponse(
        'Webhook error: "Webhook handler failed. View logs."',
        { status: 400 }
      )
    }
  }
  return NextResponse.json({ received: true }, { status: 200 })
}
