import { X } from 'lucide-react'
import type { Dispatch, SetStateAction } from 'react'
import { Button } from './Button'
import { CartItem } from './CartItem'

interface cartProps {
  setShowCart: Dispatch<SetStateAction<boolean>>
}

export function Cart({ setShowCart }: cartProps) {
  return (
    <div className="flex flex-col gap-6 w-93.75 fixed top-0 h-screen right-0 bg-[#F2DAAC] p-5">
      <div className="flex justify-between">
        <X className="cursor-pointer" onClick={() => setShowCart(false)} />
        <p className="uppercase font-bold">Meu carrinho</p>
      </div>

      <div className="flex-1 flex flex-col gap-4">
        <CartItem />
        <CartItem />
      </div>

      <Button content="Finalizar pedido" variants="default" />
    </div>
  )
}
