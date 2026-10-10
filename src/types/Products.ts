export interface Product {
  id: string
  name: string
  description: string
  price: number
  image: string
  category: string
  setProducts: React.Dispatch<React.SetStateAction<Product[] | undefined>>
}
