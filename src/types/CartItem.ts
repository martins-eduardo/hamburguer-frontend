import type { Product } from './Products'

export interface CartItem {
  id: string
  userId: string
  productId: string
  quantity: number
  product: Product
}

export interface CartItemsContextType {
  cartItems: CartItem[]
  setCartItems: React.Dispatch<React.SetStateAction<CartItem[]>>
}
