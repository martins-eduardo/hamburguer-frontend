import { useEffect, useState } from 'react'
import { api } from '../../lib/api'
import type { Product } from '../../types/Products'
import { ItemsProducts } from './components/ItemsProducts'

export function Products() {
  const [category, setCategory] = useState('Hamburguer')
  const [loading, setLoading] = useState(false)
  const [products, setProducts] = useState<Product[]>()

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

  const filteredProducts = products?.filter((product) => {
    return product.category === category
  })

  useEffect(() => {
    getProducts()
  }, [])

  return (
    <div className="flex flex-col w-full justify-center items-start gap-4 px-3 md:px-0 my-3 md:my-5">
      <div className="flex gap-4">
        <div
          className={getCategoryClass('Hamburguer')}
          onClick={() => {
            handleChangeCategory('Hamburguer')
          }}
        >
          Hamburguer
        </div>
        <div
          className={getCategoryClass('Bebidas')}
          onClick={() => {
            handleChangeCategory('Bebidas')
          }}
        >
          Bebidas
        </div>
        <div
          className={getCategoryClass('Porçoẽs')}
          onClick={() => {
            handleChangeCategory('Porçoẽs')
          }}
        >
          Porções
        </div>
      </div>

      <p className="flex text-lg md:text-xl font-semibold text-[#F2DAAC] uppercase">
        {category}
      </p>
      <div className="flex flex-col gap-6">
        {filteredProducts?.map((product) => (
          <ItemsProducts
            key={product.id}
            id={product.id}
            name={product.name}
            description={product.description}
            price={product.price}
            image={product.image}
            category={product.category}
            setProducts={setProducts}
          />
        ))}
      </div>
    </div>
  )
}
