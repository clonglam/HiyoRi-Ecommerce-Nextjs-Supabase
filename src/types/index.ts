import { Icons } from "@/components/layouts/icons";
// import { type Product } from "@/supabase/schema"
import type { FileWithPath } from "react-dropzone";

export type BaseEntity = {
  id: string;
  createdAt: number;
};
export interface NavItem {
  title: string;
  href?: string;
  disabled?: boolean;
  external?: boolean;
  icon?: keyof typeof Icons;
  label?: string;
  description?: string;
}

export interface NavItemWithChildren extends NavItem {
  items: NavItemWithChildren[];
}

export interface NavItemWithOptionalChildren extends NavItem {
  items?: NavItemWithChildren[];
}

export type MainNavItem = NavItemWithOptionalChildren;

export type SidebarNavItem = NavItemWithChildren;

export type UserRole = "user" | "admin";

export type Option = {
  label: string;
  value: string;
};

export type FileWithPreview = FileWithPath & {
  preview: string;
};

export type StoredFile = {
  id: string;
  name: string;
  url: string;
};

export type CartItem = {
  productId: number;
  quantity: number;
};

export type ImageType = {
  alt: string;
  src: string;
};
export interface CheckoutItem extends CartItem {
  price: number;
}

// export interface CartLineItem
//   extends Pick<
//     Product,
//     "id" | "name" | "images" | "price" | "inventory" | "storeId"
//   > {
//   storeName: string | null
// }

export type SubscriptionPlan = {
  name: string;
  description: string;
  stripePriceId: string;
  monthlyPrice?: number | null;
};
