import { create } from "zustand";
import { persistNSync } from "persist-and-sync";
import { useMutation } from "@urql/next";
import { createCartMutation, updateCartsMutation } from "../query";

export type CartItem = {
  quantity: number;
};

export type CartItems = { [productId: string]: CartItem };
export type ProductData = { productId: string; quantity: number };

type CartStore = {
  cart: CartItems;
  addProductToCart: (id: string, quantity: number) => void;
  removeProduct: (id: string) => void;
  removeAllProducts: () => void;
};

const useCartStore = create<CartStore>(
  persistNSync(
    (set) => ({
      cart: {},
      addProductToCart: async (id, quantity) => {
        set((state) => {
          const existingProduct = state.cart[id];

          const newQuantity = existingProduct
            ? existingProduct.quantity + quantity
            : 1;
          return {
            cart: {
              ...state.cart,
              [id]: { quantity: newQuantity },
            },
          };
        });
      },
      removeProduct: (id) =>
        set((state) => {
          const updatedCart = { ...state.cart };
          delete updatedCart[id];
          return {
            cart: updatedCart,
          };
        }),
      removeAllProducts: () => set(() => ({ cart: {} })),
    }),
    { name: "cart", storage: "cookies" },
  ),
);

export const calcProductCountStorage = (cartItems: CartItems) => {
  if (!cartItems) return 0;
  return Object.values(cartItems).reduce((acc, cur) => acc + cur.quantity, 0);
};

export default useCartStore;
