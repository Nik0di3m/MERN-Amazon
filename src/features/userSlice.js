import { createSlice } from '@reduxjs/toolkit'

const userSlice = createSlice({
    name: "user",
    age: "21",
    initialState: {
        name: 'Nikodem',
        age: "21"
    },
    reducers: {
        change: (state) => {
            state.name = "Norbert"
        }
    }
});

export const {
    change
} = userSlice.actions;

export const selectUser = (state) => state.user.name

export default userSlice.reducer