import { createSlice, createAsyncThunk, type PayloadAction } from '@reduxjs/toolkit'
import type { CardItem } from '../components/Card'

export const fetchProducts = createAsyncThunk(
  'shop/fetchProducts',
  async () => {
    const response = await fetch('https://fakestoreapi.com/products')
    if (!response.ok) {
      throw new Error('Failed to fetch products')
    }
    const data = await response.json()
    // Map the API response to match our CardItem interface
    return data.map((item: any) => ({
      id: item.id,
      title: item.title,
      description: item.description,
      price: item.price * 40, // Convert to UAH roughly
      imageUrl: item.image,
    })) as CardItem[]
  }
)

interface CardState {
  items: CardItem[] // Cart items
  products: CardItem[] // Available products from API
  status: 'idle' | 'loading' | 'succeeded' | 'failed'
  error: string | null
}

const initialState: CardState = {
  items: [],
  products: [],
  status: 'idle',
  error: null,
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
  extraReducers: (builder) => {
    builder
      .addCase(fetchProducts.pending, (state) => {
        state.status = 'loading'
      })
      .addCase(fetchProducts.fulfilled, (state, action) => {
        state.status = 'succeeded'
        state.products = action.payload
      })
      .addCase(fetchProducts.rejected, (state, action) => {
        state.status = 'failed'
        state.error = action.error.message || 'Что-то пошло не так'
      })
  },
})

export const { addItem, clearItems } = shopSlice.actions
export default shopSlice.reducer
