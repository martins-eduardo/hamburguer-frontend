import { ChevronLeft, ChevronRight, Trash } from 'lucide-react'

export function CartItem() {
  return (
    <div className="flex gap-3 items-center">
      <img
        src="./duplo-da-casa.jpg"
        alt="Duplo da Casa"
        className="w-25 rounded-md"
      />

      <div className="flex-1">
        <p className="uppercase font-bold">Duplo da Casa</p>
        <p className="font-bold">R$28,90</p>
        <div className="flex gap-3 mt-1">
          <ChevronLeft
            className="cursor-pointer bg-[#C92A0E] text-white p-1 rounded-md"
            size={25}
          />
          <p className="font-bold">1</p>
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
