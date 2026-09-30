import { useState } from 'react'
import Card from './Card'
import type { CardItem } from './Card'

const SAMPLE_DESCRIPTIONS = [
  'Эргономичный дизайн и превосходные материалы для максимального комфорта.',
  'Компактное решение для ежедневного использования с расширенным функционалом.',
  'Высокая производительность, надежность и премиальный внешний вид.',
  'Стильный аксессуар, который гармонично дополнит любое пространство.',
  'Универсальное устройство с интуитивным управлением и долговечностью.',
  'Современные технологии и продуманный функционал в каждой детали.',
  'Идеальный баланс цены и премиального качества сборки.',
  'Практичный выбор для работы, отдыха и творческих задач.',
  'Инновационный продукт с повышенной энергоэффективностью и удобством.'
]

const INITIAL_CARDS: CardItem[] = Array.from({ length: 9 }, (_, index) => ({
  id: index + 1,
  title: `Товар #${index + 1}`,
  description: SAMPLE_DESCRIPTIONS[index % SAMPLE_DESCRIPTIONS.length],
  price: Math.floor(Math.random() * 8500) + 1500,
  imageUrl: `https://picsum.photos/seed/shop-item-${index + 1}/500/350`
}))

export const CardList = () => {
  const [cards] = useState<CardItem[]>(INITIAL_CARDS)


  return (
    <div className="card-list-container">
      <div className="card-list-header">
        <h2 className="card-list-title">Каталог товаров</h2>

      </div>

      <div className="card-list-grid">
        {cards.map(card => (
          <Card key={card.id} item={card} />
        ))}
      </div>
    </div>
  )
}

export default CardList