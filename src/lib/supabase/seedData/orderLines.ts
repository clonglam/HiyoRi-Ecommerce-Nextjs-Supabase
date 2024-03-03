import { InsertOrderLines } from "./../schema";
import db from "../db";
import * as schema from "../schema";

const orderLines: InsertOrderLines[] = [
  {
    id: "1",
    orderId: "1",
    productId: "1",
    quantity: 3,
    price: "367.99",
  },
  {
    id: "2",
    orderId: "1",
    productId: "2",
    quantity: 1,
    price: "12.66",
  },
  {
    id: "3",
    orderId: "1",
    productId: "3",
    quantity: 2,
    price: "612.99",
  },
];

const seedOrderLines = async () => {
  try {
    await db.delete(schema.orderLines);

    const insertedOrders = await db
      .insert(schema.orderLines)
      .values(orderLines)
      .onConflictDoNothing()
      .returning();
    if (insertedOrders != null) console.log(`orderlines are added to the DB.`);
  } catch (err) {
    console.log("Error happen while inserting orderlines", err);
  }
};

export default seedOrderLines;
