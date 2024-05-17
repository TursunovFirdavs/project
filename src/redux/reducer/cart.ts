import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    cart: []
}

const cartReducer = createSlice({
    name: 'cart',
    initialState,
    reducers: {
        addToCart: (state:any, action:any) => {
            const checked = state.cart.find((item: any) => item.id === action.payload.id)
            if(!checked) {
                return {...state, cart: [
                    {
                        ...action.payload,
                        productCount: 1,
                    }, ...state.cart
                ]}
            }
        },
        removeFromCart: (state, action) => {
            const checked = state.cart.filter((item:any) => item.id !== action.payload.id)
            return {...state, cart: checked}
        },
        toggleAmount: (state:any, action:any) => {
            if(action.payload.type == 'add') {
                const newCart = state.cart.map((item:any) => {
                    if(item.id === action.payload.id) {
                        return {
                            ...item,
                            productCount: item.productCount + 1,
                            totalPrice: (item.productCount - 1) * parseInt(item.price)
                        }
                    }
                    return item
                })
                return {...state, cart: newCart}
            }
            else if(action.payload.type == 'remove') {
                const newCart = state.cart.map((item: any) => {
                    if(item.id === action.payload.id) {
                        return {
                            ...item,
                            productCount: item.productCount - 1,
                            totalPrice: (item.productCount - 1) * item.price
                        }
                    }
                    return item
                })
                return {...state, cart: newCart}
            }
        }
    }
})

export default cartReducer.reducer

export const { addToCart, removeFromCart, toggleAmount } = cartReducer.actions