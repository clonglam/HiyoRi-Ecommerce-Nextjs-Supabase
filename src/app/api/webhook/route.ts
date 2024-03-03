import { env } from "@/env.mjs";
import { stripe } from "@/lib/stripe";
import db from "@/lib/supabase/db";
import { PaymentStatus, address, orders } from "@/lib/supabase/schema";
import { eq } from "drizzle-orm";
import { headers } from "next/headers";
import { NextRequest, NextResponse } from "next/server";
import Stripe from "stripe";

const relevantEvents = new Set([
  "product.created",
  "product.updated",
  "price.created",
  "price.updated",
  "payment_intent.succeeded",
  "checkout.session.completed",
]);

export async function POST(request: NextRequest) {
  const body = await request.text();
  const sig = headers().get("Stripe-Signature");

  const webhookSecret = env.STRIPE_WEBHOOK_SECERT_KEY;

  let event: Stripe.Event;
  try {
    if (!sig || !webhookSecret) return;
    event = stripe.webhooks.constructEvent(body, sig, webhookSecret);
  } catch (err: any) {
    return new NextResponse(`Webhook Error: ${err.message}`, { status: 400 });
  }
  if (relevantEvents.has(event.type)) {
    try {
      switch (event.type) {
        case "product.created":
          break;
        case "payment_intent.succeeded":
          // TODO:Update the Order payment Status

          break;
        case "checkout.session.completed":
          const checkoutSession = event.data.object as Stripe.Checkout.Session;

          if (checkoutSession.status === "complete") {
            const customer_details = checkoutSession.customer_details;

            const insertedAddress = await db
              .insert(address)
              .values({
                city: customer_details.address.city,
                country: customer_details.address.country,
                line1: customer_details.address.line1,
                line2: customer_details.address.line2,
                postal_code: customer_details.address.postal_code,
                state: customer_details.address.state,
              })
              .returning({ id: address.id });

            const updatedOrder = await db
              .update(orders)
              .set({
                amount: `${checkoutSession.amount_total / 100}`,
                email: customer_details!.email,
                name: customer_details!.name,
                order_status: "PREPARING",
                stripe_payment_intent_id:
                  checkoutSession.payment_intent.toString(),
                payment_status: checkoutSession.payment_status as PaymentStatus,
                payment_method: checkoutSession.payment_method_types[0],
              })
              .where(eq(orders.id, checkoutSession.client_reference_id))
              .returning();
          } else {
            const insertedOrder = await db
              .update(orders)
              .set({
                order_status: "canceled",
                stripe_payment_intent_id:
                  checkoutSession.payment_intent.toString(),
                payment_status: checkoutSession.payment_status as PaymentStatus,
              })
              .where(eq(orders.id, checkoutSession.client_reference_id))
              .returning();
          }
          break;
        default:
          throw new Error("Unhandled relevant event!");
      }
    } catch (error) {
      console.log(error);
      return new NextResponse(
        'Webhook error: "Webhook handler failed. View logs."',
        { status: 400 },
      );
    }
  }
  return NextResponse.json({ received: true }, { status: 200 });
}
