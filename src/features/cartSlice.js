import { createSlice } from '@reduxjs/toolkit'

const cartSlice = createSlice({
    name: "cart",
    initialState: {
        value: 0,
    },
    reducers: {
        increment: (state) => {
            state.value += 1;
        }
    }
});

export const {
    increment
} = cartSlice.actions

export const selectCount = (state) => state.cart.value

export default cartSlice.reducer