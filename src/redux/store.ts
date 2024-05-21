import { configureStore } from '@reduxjs/toolkit'
import cart from './reducer/cart'
import like from './reducer/like'
import { saveState } from './storage/storage'

export const store = configureStore({
    reducer: {
        cart,
        like
    } 
})

store.subscribe(() => {
    saveState("cart", store.getState().cart);
    saveState("like", store.getState().like);
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch