export interface Product {
  id: string
  name: string
  description: string
  price: number
  image: string
  category: string
}

export type ProductProps = Product & {
  setProducts: React.Dispatch<React.SetStateAction<Product[] | undefined>>
}
