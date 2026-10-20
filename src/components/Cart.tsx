import { X } from 'lucide-react'
import {
  type Dispatch,
  type SetStateAction,
  useContext,
  useEffect,
} from 'react'
import { CartItemContext } from '../context/CartItemsContext'
import { api } from '../lib/api'
import { Button } from './Button'
import { CartItem } from './CartItem'

interface cartProps {
  setShowCart: Dispatch<SetStateAction<boolean>>
}

export function Cart({ setShowCart }: cartProps) {
  const { cartItems, setCartItems } = useContext(CartItemContext)

  async function handleCartItems() {
    try {
      const response = await api.get('/cartItems', {
        withCredentials: true,
      })
      setCartItems(response.data)
    } catch (error) {
      console.error(error)
    }
  }

  useEffect(() => {
    handleCartItems()
  }, [])

  return (
    <div className="flex flex-col gap-6 w-93.75 fixed top-0 h-screen right-0 bg-[#F2DAAC] p-5 z-1">
      <div className="flex justify-between">
        <X className="cursor-pointer" onClick={() => setShowCart(false)} />
        <p className="uppercase font-bold">Meu carrinho</p>
      </div>

      <div className="flex-1 flex flex-col gap-4">
        {cartItems?.map((item) => (
          <CartItem
            key={item.product.id}
            title={item.product.name}
            price={item.product.price}
            image={item.product.image}
          />
        ))}
      </div>

      <Button content="Finalizar pedido" variants="default" />
    </div>
  )
}
