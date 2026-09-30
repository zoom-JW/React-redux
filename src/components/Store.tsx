import { useSelector } from "react-redux"
import type { RootState } from "../store/store"

export const Store = () => {
  const items = useSelector((state: RootState) => state.shop.items)
  const totalPrice = items.reduce((sum, item) => sum + item.price, 0)

  return (
    <div className="store-header">
      <span className="store-header__count">🛒 Корзина: <strong>{items.length}</strong> шт.</span>
      <span className="store-header__price">💰 Итоговая цена: <strong>{totalPrice.toLocaleString('uk-UA')} грн</strong></span>
    </div>
  )
}
