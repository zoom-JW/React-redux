import { useDispatch } from 'react-redux'
import { addItem, clearItems } from '../store/shopSlice'
import type { CardItem } from './Card'

interface ButtonProps {
  item: CardItem
}

export const Button = ({ item }: ButtonProps) => {
  const dispatch = useDispatch()

  const handleAdd = () => {
    dispatch(addItem(item))
  }

  const handleClear = () => {
    dispatch(clearItems())
  }

  return (
    <div className="flex gap-3">
      <button
        type="button"
        className="bg-blue-600 hover:bg-blue-700 text-white font-semibold py-2 px-4 rounded-lg shadow-md hover:shadow-lg transition-colors active:scale-95"
        onClick={handleAdd}
      >
        + Добавить
      </button>
      <button
        type="button"
        className="bg-red-500 hover:bg-red-600 text-white font-semibold py-2 px-4 rounded-lg shadow-md hover:shadow-lg transition-colors active:scale-95"
        onClick={handleClear}
      >
        Очистить
      </button>
    </div>
  )
}