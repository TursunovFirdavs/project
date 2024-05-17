import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    like: []
}

const likeReducer = createSlice({
    name: 'like',
    initialState,
    reducers: {
        like: (state: any, action) => {
            const checked = state.like.find((item: any) => item.id === action.payload.id)
            if (!checked) {
                return { ...state, like: [action.payload, ...state.like] }
            }
            return state
        },
        dislike: (state:any, action) => {
            const checked = state.like.filter((item:any) => item.id !== action.payload.id)
            if(checked) {
                return {...state, like:checked}
            }
            return state
        }
    }
})

export default likeReducer.reducer

export const { like, dislike } = likeReducer.actions