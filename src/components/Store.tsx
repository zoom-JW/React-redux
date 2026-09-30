import { useSelector } from "react-redux"
import type { RootState } from "../store/store"

export const Store = () => {
  const items = useSelector((state: RootState) => state.shop.items)
  const totalPrice = items.reduce((sum, item) => sum + item.price, 0)

  return (
    <div className="max-w-6xl mx-auto my-6 p-4 bg-white rounded-xl shadow flex justify-between items-center border border-gray-100">
      <span className="text-lg text-gray-700">🛒 Корзина: <strong className="text-gray-900 font-bold">{items.length}</strong> шт.</span>
      <span className="text-lg text-emerald-600">💰 Итоговая цена: <strong className="font-bold">{totalPrice.toLocaleString('uk-UA')} грн</strong></span>
    </div>
  )
}
