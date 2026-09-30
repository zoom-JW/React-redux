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
    <div className="product-card">
      <div className="product-card__image-container">
        <img
          src={item.imageUrl}
          alt={item.title}
          className="product-card__image"
          loading="lazy"
        />
        <Button item={item} />
      </div>

      <div className="product-card__body">
        <h3 className="product-card__title">{item.title}</h3>
        <p className="product-card__description">{item.description}</p>
        <div className="product-card__price">
          {item.price.toLocaleString('uk-UA')} грн
        </div>
      </div>
    </div>
  )
}

export default Card
