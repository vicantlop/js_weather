import { createSlice } from '@reduxjs/toolkit'

export const cardNavbarSlice = createSlice({
    name: 'cardNavbar',
    initialState: {
        selection: "",
    },
    reducers: {
        setCardNavbar: (state, action) => {
            state.selection = action.payload
        }
    },
})

// action creators
export const { setCardNavbar } = cardNavbarSlice.actions

export default cardNavbarSlice.reducer