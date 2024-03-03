import db from "../db";
import * as schema from "../schema";
import { InsertProducts } from "../schema";

const products: InsertProducts[] = [
  {
    id: "1",
    name: "Product 1",
    slug: "proudct-1",
    description: `Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.`,
    featured: true,
    badge: "new_product",
    rating: "4",
    tags: [],
    featuredImageId: "1",
    collectionId: "1",
    stock: 20,
  },
  {
    id: "2",
    name: "Product 2",
    slug: "proudct-2",
    description: `Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.`,
    rating: "3.5",
    featured: true,
    featuredImageId: "2",
    collectionId: "2",
    badge: "featured",
    stock: 32,
  },
  {
    id: "3",
    name: "Product 3",
    slug: "proudct-3",
    featured: true,
    description: `Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.`,
    rating: "5",
    featuredImageId: "3",
    collectionId: "1",
    stock: 30,
  },
  {
    id: "4",
    name: "Product 4",
    slug: "proudct-4",
    featured: true,
    description: `Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.`,
    rating: "2",
    featuredImageId: "4",
    collectionId: "2",
    badge: "best_sale",
    stock: 1,
  },
  {
    id: "5",
    name: "Product 5",
    slug: "proudct-5",
    featured: true,
    description: `Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.`,
    rating: "5",
    featuredImageId: "1",
    collectionId: "1",
    badge: "best_sale",
    stock: 0,
  },
];

const seedProducts = async () => {
  try {
    await db.delete(schema.products);
    await db
      .insert(schema.products)
      .values(products)
      .onConflictDoNothing()
      .returning();
  } catch (err) {
    console.log("Error happen while inserting collections", err);
  }
};

export default seedProducts;
