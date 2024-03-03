import db from "../db";
import * as schema from "../schema";

const collections = [
  {
    id: "1",
    label: "Bathroom",
    slug: "bathroom",
    title: "Elevate Your Bathroom Experience",
    description:
      "Transform your bathroom with our premium essentials, blending luxury, functionality, and style. Shop now for the ultimate in comfort and elegance.",
    featuredImageId: "1",
  },
  {
    id: "2",
    label: "Kitchen",
    title: "Elevate Your Kitchen Experience",
    slug: "kitchen-planning",
    description: "",
    featuredImageId: "2",
  },
  {
    id: "3",
    label: "Living Room",
    title: "Elevate Your Kitchen Experience",
    slug: "living-room-planning",
    description: "",
    featuredImageId: "3",
    order: 9,
  },
  {
    id: "4",
    label: "Bedroom",
    title: "Elevate Your Bedroom Experience",
    slug: "Bedroom-planning",
    description: "",
    featuredImageId: "4",
  },
];

const seedCollections = async () => {
  try {
    await db.delete(schema.collections);

    const insertedCollections = await db
      .insert(schema.collections)
      .values(collections)
      .onConflictDoNothing()
      .returning();
    if (insertedCollections != null)
      console.log(`collections are added to the DB.`);
  } catch (err) {
    console.log("Error happen while inserting collections", err);
  }
};

export default seedCollections;
