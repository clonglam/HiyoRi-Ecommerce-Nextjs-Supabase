import db from "../db"
import * as schema from "../schema"

const collections = [
  {
    id: 1,
    label: "Bathroom Planning",
    slug: "bathroom-planning",
    featuredImageId: 1,
  },
  {
    id: 2,
    label: "Kitchen Planning",
    slug: "kitchen-planning",
    featuredImageId: 2,
  },
  {
    id: 3,
    label: "Living Room Planning",
    slug: "living-room-planning",
    featuredImageId: 3,
    order: 9,
  },
  {
    id: 4,
    label: "Bedroom Planning",
    slug: "Bedroom-planning",
    featuredImageId: 4,
  },
]

const seedCollections = async () => {
  try {
    await db.delete(schema.collections)

    const insertedCollections = await db
      .insert(schema.collections)
      .values(collections)
      .onConflictDoNothing()
      .returning()
    if (insertedCollections != null)
      console.log(`collections are added to the DB.`)
  } catch (err) {
    console.log("Error happen while inserting collections", err)
  }
}

export default seedCollections
