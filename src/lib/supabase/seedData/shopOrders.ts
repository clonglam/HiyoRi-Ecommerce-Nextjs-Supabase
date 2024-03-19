import db from "../db";
import * as schema from "../schema";
import { InsertOrders } from "../schema";

const orders: InsertOrders[] = [
  {
    id: "1",
    amount: "5301.00",
    currency: "cad",
    order_status: "Paid",
    payment_status: "paid",
    email: "email@domain.com",
    name: "Hugo",
    payment_method: "",
    addressId: "2",
    user_id: "02b6ecb6-f7a8-463f-9230-75c6cc48f492",
  },
];

const seedShopOrders = async () => {
  try {
    await db.delete(schema.orders);

    const insertedCollections = await db
      .insert(schema.orders)
      .values(orders)
      .onConflictDoNothing()
      .returning();
    if (insertedCollections != null) console.log(`orders are added to the DB.`);
  } catch (err) {
    console.log("Error happen while inserting collections", err);
  }
};

export default seedShopOrders;
