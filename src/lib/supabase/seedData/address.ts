import { InsertOrderLines } from "../schema";
import db from "../db";
import * as schema from "../schema";

const address: schema.InsertAddress[] = [
  {
    city: "Fremont",
    country: "US",
    line1: "42412 Albrae Street",
    line2: null,
    postal_code: "94538",
    state: "CA",
  },
  {
    city: "Fremont",
    country: "US",
    line1: "42412 Albrae Street",
    line2: null,
    postal_code: "94538",
    state: "CA",
  },
];

const seedAddress = async () => {
  try {
    await db.delete(schema.address);

    const insertedOrders = await db
      .insert(schema.address)
      .values(address)
      .onConflictDoNothing()
      .returning();
    if (insertedOrders != null) console.log(`address are added to the DB.`);
  } catch (err) {
    console.log("Error happen while inserting address", err);
  }
};

export default seedAddress;
