import { configureStore } from '@reduxjs/toolkit'
import cart from './reducer/cart'
import like from './reducer/like'

export const store = configureStore({
    reducer: {
        cart,
        like
    }
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch