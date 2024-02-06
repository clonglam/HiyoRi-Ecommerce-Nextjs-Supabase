import { carts, products } from "./../../../lib/supabase/schema"
import { stripe } from "@/lib/stripe"
import db from "@/lib/supabase/db"

import { getURL } from "@/lib/utils"
import { createRouteHandlerClient } from "@supabase/auth-helpers-nextjs"
import { eq, inArray } from "drizzle-orm"

import { cookies } from "next/headers"
import { NextResponse } from "next/server"

export async function POST(request: Request) {
  const { quantity = 1, metadata = {}, order = [] } = await request.json()
  const price = { currency: "usd", unit_amount: 1000 }

  // const productsData = await db
  //   .select()
  //   .from(products)
  //   .where(inArray(products.id, oreder))
  console.log("order", order)

  try {
    const supabase = createRouteHandlerClient({ cookies })
    const {
      data: { user },
    } = await supabase.auth.getUser()

    if (!user) return new NextResponse("User not found.", { status: 402 })

    const cartItems = await db.query.carts.findMany({
      with: { product: true },
    })

    const session = await stripe.checkout.sessions.create({
      //@ts-ignore
      payment_method_types: ["card"],
      billing_address_collection: "required",
      client_reference_id: user.id,
      line_items: cartItems.map((item) => ({
        price_data: {
          currency: "usd",
          product_data: {
            name: item.product.name,
          },

          unit_amount: parseFloat(item.product.price) * 100, // Make sure this is in cents
        },
        quantity: item.quantity,
      })),
      mode: "payment",
      allow_promotion_codes: true,
      success_url: `${getURL()}/dashboard`,
      cancel_url: `${getURL()}/dashboard`,
    })
    return NextResponse.json({ sessionId: session.id })
  } catch (error: any) {
    console.log(error)
    return new NextResponse("Internal Error", { status: 500 })
  }
}
