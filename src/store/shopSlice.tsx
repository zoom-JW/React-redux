import { createSlice, type PayloadAction } from '@reduxjs/toolkit'
import type { CardItem } from '../components/Card'

interface CardState {
  items: CardItem[]
}

const initialState: CardState = {
  items: [],
}

const shopSlice = createSlice({
  name: 'shop',
  initialState,
  reducers: {
    addItem(state, action: PayloadAction<CardItem>) {
      state.items.push(action.payload)
    },
    clearItems(state) {
      state.items = []
    },
  },
})

export const { addItem, clearItems } = shopSlice.actions
export default shopSlice.reducer

