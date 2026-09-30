
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
    <div className="product-card__overlay">
      <button
        type="button"
        className="product-card__add-btn"
        onClick={handleAdd}
      >
        + Добавить
      </button>
      <button
        type="button"
        className="product-card__add-btn"
        onClick={handleClear}
      >
        Очистить
      </button>
    </div>
  )
}