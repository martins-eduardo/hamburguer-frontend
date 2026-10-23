import { ChevronLeft, ChevronRight, Trash } from 'lucide-react'
import { formatPrice } from '../utils/formatterPrice'

interface cartItemProps {
  title: string
  price: number
  image: string
  quantity: number
}

export function CartItem({ title, price, image, quantity }: cartItemProps) {
  return (
    <div className="flex gap-3 items-center">
      <img src={`./${image}`} alt="Duplo da Casa" className="w-25 rounded-md" />

      <div className="flex-1">
        <p className="uppercase font-bold text-sm">{title}</p>
        <p className="font-bold text-sm">{formatPrice(price)}</p>
        <div className="flex gap-3 mt-1 items-center">
          <ChevronLeft
            className="cursor-pointer bg-[#C92A0E] text-white p-1 rounded-md"
            size={25}
          />
          <p className="font-bold">{quantity}</p>
          <ChevronRight
            className="cursor-pointer bg-[#C92A0E] text-white p-1 rounded-md"
            size={25}
          />
        </div>
      </div>

      <Trash size={18} className="cursor-pointer" />
    </div>
  )
}
