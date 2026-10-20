import { ShoppingCart } from 'lucide-react'
import { useContext, useState } from 'react'
import { UserContext } from '../../../context/UserContext'
import { api } from '../../../lib/api'
import type { ProductProps } from '../../../types/Products'
import { formatPrice } from '../../../utils/formatterPrice'

export function ItemsProducts({
  id,
  name,
  description,
  price,
  image,
  category,
  setProducts,
}: ProductProps) {
  const { user } = useContext(UserContext)
  const [loading, setLoading] = useState(false)
  async function getProducts() {
    try {
      setLoading(true)
      const response = await api.get('/products')

      setProducts(response.data)
    } catch (error) {
      console.log(error)
    } finally {
      setLoading(false)
    }
  }

  async function deleteProduct() {
    try {
      setLoading(true)
      const response = await api.delete(`/deleteProduct/${id}`)
      getProducts()
    } catch (error) {
      console.log(error)
    } finally {
      setLoading(false)
    }
  }

  return (
    <div className="flex gap-4">
      <div className="flex w-25 h-20.75 md:w-50 md:h-41.5 shrink-0">
        <img
          src={`./${image}`}
          alt={`${image}`}
          className="w-full h-full object-fill rounded-md"
        />
      </div>
      <div className="flex flex-col justify-between">
        <div className="flex flex-col">
          <div className="flex text-white font-semibold text-sm md:text-xl uppercase">
            {name}
          </div>
          <div className="flex md:text-lg text-xs text-[#848484]">
            {description}
          </div>
        </div>
        <div className="flex gap-3 items-center justify-end">
          {user?.role === 'ADMIN' && (
            <div
              className="flex text-white font-semibold text-xs md:text-md uppercase bg-red-700 p-1 rounded-md cursor-pointer"
              onClick={() => {
                deleteProduct()
              }}
            >
              Deletar
            </div>
          )}
          <div className="flex font-semibold text-xxs md:text-xl text-[#F2DAAC]">
            {formatPrice(price)}
          </div>
          <div className="flex text-white">{<ShoppingCart size={20} />}</div>
        </div>
      </div>
    </div>
  )
}
