import type { Product } from './Products'

export interface cartItem {
  id: string
  userId: string
  productId: string
  product: Product
}
