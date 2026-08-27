import { ShoppingCart } from 'lucide-react'
import duploDaCasa from '../../../../public/duplo-da-casa.png'

export function ItemsProducts() {
  return (
    <div className="flex gap-4">
      <div className="flex w-25 h-20.75 md:w-50 md:h-41.5 shrink-0">
        <img
          src={duploDaCasa}
          alt="Duplo Casa"
          className="w-full h-full object-contain"
        />
      </div>
      <div className="flex flex-col justify-between">
        <div className="flex flex-col">
          <div className="flex text-white font-semibold text-sm md:text-xl uppercase">
            Duplo da casa
          </div>
          <div className="flex md:text-lg text-xs text-[#848484]">
            Dois suculentos hambúrgueres de 120g, queijo cheddar derretido,
            maionese da casa e picles no pão brioche tostado.
          </div>
        </div>
        <div className="flex gap-3 items-center justify-end">
          <div className="flex font-semibold text-xxs md:text-xl text-[#F2DAAC]">
            R$28.90
          </div>
          <div className="flex text-white">
            <ShoppingCart size={20} />
          </div>
        </div>
      </div>
    </div>
  )
}
