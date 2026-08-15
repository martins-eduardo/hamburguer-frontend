import { useState } from 'react'
import {} from 'react-router-dom'

export function Products() {
  const [category, setCategory] = useState('Hamburguer')

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
    <div className="flex w-full justify-start items-center gap-4 px-3 md:px-0 my-3 md:my-5">
      <div
        className={getCategoryClass('Hamburguer')}
        onClick={() => {
          handleChangeCategory('Hamburguer')
        }}
      >
        Hamburguer
      </div>
      <div
        className={getCategoryClass('Drinks')}
        onClick={() => {
          handleChangeCategory('Drinks')
        }}
      >
        Bebidas
      </div>
      <div
        className={getCategoryClass('Portion')}
        onClick={() => {
          handleChangeCategory('Portion')
        }}
      >
        Porções
      </div>
    </div>
  )
}
