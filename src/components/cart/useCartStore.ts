import { create } from "zustand"

export interface CartItem {
  id: string
  quantity: number
  productId: number
  userId: string | null
  createdAt: string // Assuming ISO string format
}

interface CartState {
  items: CartItem[]
  addItem: (item: CartItem) => void
  removeItem: (productId: number) => void
  updateItemQuantity: (productId: number, quantity: number) => void
  clearCart: () => void
  syncCart: (cartItems: CartItem[]) => void
}

const useCartStore = create<CartState>((set) => ({
  items: [],
  addItem: (item) =>
    set((state) => {
      const itemIndex = state.items.findIndex(
        (i) => i.productId === item.productId
      )
      if (itemIndex > -1) {
        // If item exists, update it
        const updatedItems = state.items.map((i, index) => {
          if (index === itemIndex) {
            return { ...i, quantity: i.quantity + item.quantity }
          }
          return i
        })
        return { items: updatedItems }
      } else {
        // If item does not exist, add it
        return { items: [...state.items, item] }
      }
    }),
  removeItem: (productId) =>
    set((state) => ({
      items: state.items.filter((item) => item.productId !== productId),
    })),
  updateItemQuantity: (productId, quantity) =>
    set((state) => ({
      items: state.items.map((item) =>
        item.productId === productId ? { ...item, quantity: quantity } : item
      ),
    })),
  clearCart: () => set(() => ({ items: [] })),
  syncCart: (cartItems: CartItem[]) =>
    set((state) => {
      const updatedItems = state.items.slice() // Create a shallow copy of the current items

      cartItems.forEach((cloudItem) => {
        const localItemIndex = updatedItems.findIndex(
          (item) => item.productId === cloudItem.productId
        )
        if (localItemIndex > -1) {
          // Compare the 'createdAt' timestamps to determine which item is newer
          const localItem = updatedItems[localItemIndex]
          if (new Date(cloudItem.createdAt) > new Date(localItem.createdAt)) {
            // If the cloud item is newer, replace the local item
            updatedItems[localItemIndex] = cloudItem
          }
        } else {
          // If the item does not exist locally, add it
          updatedItems.push(cloudItem)
        }
      })

      return { items: updatedItems }
    }),
}))

export default useCartStore
