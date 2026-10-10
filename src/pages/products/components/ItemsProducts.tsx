import { ShoppingCart } from 'lucide-react'
import type { Product } from '../../../types/Products'

export function ItemsProducts({
  id,
  name,
  description,
  price,
  image,
  category,
}: Product) {
  function formatPrice(priceInCents: number) {
    return new Intl.NumberFormat('pt-BR', {
      style: 'currency',
      currency: 'BRL',
    }).format(priceInCents / 100)
  }
  return (
    <div className="flex gap-4">
      <div className="flex w-25 h-20.75 md:w-50 md:h-41.5 shrink-0">
        <img
          src={`./${image}`}
          alt="Duplo Casa"
          className="w-full h-full object-contain"
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
          <div className="flex font-semibold text-xxs md:text-xl text-[#F2DAAC]">
            {formatPrice(price)}
          </div>
          <div className="flex text-white">{<ShoppingCart size={20} />}</div>
        </div>
      </div>
    </div>
  )
}
