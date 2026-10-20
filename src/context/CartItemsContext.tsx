import { type ReactNode, createContext, useState } from 'react'
import type { CartItem, CartItemsContextType } from '../types/CartItem'

type cartItemsProviderProps = {
  children: ReactNode
}

export const CartItemContext = createContext<CartItemsContextType>({
  cartItems: [],
  setCartItems: () => {},
})

export function CartItemsProvider({ children }: cartItemsProviderProps) {
  const [cartItems, setCartItems] = useState<CartItem[]>([])

  return (
    <CartItemContext.Provider
      value={{
        cartItems,
        setCartItems,
      }}
    >
      {children}
    </CartItemContext.Provider>
  )
}
