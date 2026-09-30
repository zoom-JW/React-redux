import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import Card from './Card'
import { fetchProducts } from '../store/shopSlice'
import type { RootState, AppDispatch } from '../store/store'

export const CardList = () => {
  const dispatch = useDispatch<AppDispatch>()
  const { products, status, error } = useSelector((state: RootState) => state.shop)

  useEffect(() => {
    if (status === 'idle') {
      dispatch(fetchProducts())
    }
  }, [status, dispatch])

  return (
    <div className="max-w-6xl mx-auto py-8 px-4">
      <div className="flex justify-between items-baseline mb-6 border-b-2 border-gray-200 pb-3">
        <h2 className="text-3xl font-bold text-gray-800">Каталог товаров</h2>
      </div>

      {status === 'loading' && <div className="text-center text-xl text-gray-500 py-10">Загрузка товаров...</div>}
      
      {status === 'failed' && <div className="text-center text-xl text-red-500 py-10">Ошибка: {error}</div>}

      {status === 'succeeded' && (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {products.map(card => (
            <Card key={card.id} item={card} />
          ))}
        </div>
      )}
    </div>
  )
}

export default CardList