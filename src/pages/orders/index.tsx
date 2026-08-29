import { Calendar, Clock, User } from 'lucide-react'
import { useState } from 'react'
import { Order } from './components/Order'

export function Orders() {
  const [category, setCategory] = useState('Pendente')

  function handleChangeCategory(newCategory: string) {
    setCategory(newCategory)
  }

  function getCategoryClass(categoryName: string) {
    const categorySelected =
      'flex h-7 md:h-9 w-24 md:w-32 text-sm md:text-base cursor-pointer bg-[#F2DAAC] items-center justify-center font-semibold rounded-sm'

    const categoryNotSelected =
      'flex h-7 md:h-9 w-24 md:w-32 text-sm md:text-base cursor-pointer bg-transparent border border-[#F2DAAC] text-[#F2DAAC] hover:bg-[#F2DAAC] hover:text-[#161410] items-center justify-center font-semibold rounded-sm'

    if (category === categoryName) {
      return categorySelected
    }

    return categoryNotSelected
  }
  return (
    <div className="flex flex-col w-full justify-center items-start gap-4 px-3 md:px-0 my-3 md:my-5">
      <div className="flex gap-4">
        <div
          className={getCategoryClass('Pendente')}
          onClick={() => {
            handleChangeCategory('Pendente')
          }}
        >
          Pendente
        </div>
        <div
          className={getCategoryClass('Retirado')}
          onClick={() => {
            handleChangeCategory('Retirado')
          }}
        >
          Retirado
        </div>
        <div
          className={getCategoryClass('Cancelado')}
          onClick={() => {
            handleChangeCategory('Cancelado')
          }}
        >
          Cancelado
        </div>
      </div>
      <div className="grid grid-cols-2 md:grid-cols-3 w-full gap-4">
        <Order
          id={1}
          status="Pendente"
          date="28/08/2026"
          name="Eduardo Martins"
          start="14:59"
          value={157.78}
        />
      </div>
    </div>
  )
}
