import db from "../db"
import * as schema from "../schema"
import { InsertShopOrders } from "../schema"

const orders: InsertShopOrders[] = [
  {
    id: "1",
    amountTotal: "5301.00",
    amountSubtotal: "6000.00",
    paymentStatus: "Paid",
    email: "hugolam922@gmail.com",
    name: "Hugo",
    paymentMethodTypes: "",
    addressId: "2",
    userId: "02b6ecb6-f7a8-463f-9230-75c6cc48f492",
  },
]

const seedShopOrders = async () => {
  try {
    await db.delete(schema.shopOrders)

    const insertedCollections = await db
      .insert(schema.shopOrders)
      .values(orders)
      .onConflictDoNothing()
      .returning()
    if (insertedCollections != null) console.log(`orders are added to the DB.`)
  } catch (err) {
    console.log("Error happen while inserting collections", err)
  }
}

export default seedShopOrders
