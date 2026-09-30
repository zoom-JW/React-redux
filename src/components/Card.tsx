import { Button } from "./Button"

export interface CardItem {
  id: number
  title: string
  description: string
  price: number
  imageUrl: string
}

interface CardProps {
  item: CardItem
}

export const Card = ({ item }: CardProps) => {
  return (
    <div className="flex flex-col bg-white rounded-xl overflow-hidden shadow-md hover:shadow-xl transition-all duration-300 hover:-translate-y-1 group">
      <div className="relative w-full h-56 bg-gray-100 overflow-hidden">
        <img
          src={item.imageUrl}
          alt={item.title}
          className="w-full h-full object-cover block transition-transform duration-300 group-hover:scale-105"
          loading="lazy"
        />
        <div className="absolute inset-0 bg-black/40 flex items-center justify-center opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 backdrop-blur-[2px]">
          <Button item={item} />
        </div>
      </div>

      <div className="flex flex-col p-5 flex-grow">
        <h3 className="text-lg font-semibold text-gray-800 mb-2 line-clamp-1">{item.title}</h3>
        <p className="text-sm text-gray-500 leading-relaxed mb-4 flex-grow line-clamp-3">{item.description}</p>
        <div className="text-xl font-bold text-emerald-600">
          {item.price.toLocaleString('uk-UA')} грн
        </div>
      </div>
    </div>
  )
}

export default Card
