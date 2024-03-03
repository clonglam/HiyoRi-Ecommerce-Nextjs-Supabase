import { create } from "zustand";
import { persistNSync } from "persist-and-sync";

export type WishDetails = {
  updatedAt: Date;
  createdAt: Date;
};

export type WishItems = {
  [productId: string]: WishDetails;
};

export type ProductData = { productId: string; quantity: number };

type WishlistStore = {
  wishlist: WishItems;
  toggleWishItem: (productId: string) => void;
  setWishlist: (list: WishItems) => void;
};

const useWishlistStore = create<WishlistStore>(
  persistNSync(
    (set) => ({
      wishlist: {},
      toggleWishItem: (productId) =>
        set((state) => {
          if (state.wishlist[productId]) {
            const updatedWishlist = { ...state.wishlist };
            delete updatedWishlist[productId];
            return {
              wishlist: updatedWishlist,
            };
          } else {
            return {
              wishlist: {
                ...state.wishlist,
                [productId]: { createdAt: new Date(), updatedAt: new Date() },
              },
            };
          }
        }),
      setWishlist: (wishlist) => set(() => ({ wishlist })),
    }),
    { name: "wishlist" },
  ),
);

export default useWishlistStore;
