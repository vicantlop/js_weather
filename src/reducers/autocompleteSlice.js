import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import axios from 'axios';

export const fetchAutocompleteList = createAsyncThunk(
    'fetchAutocompleteList',
    async (value) => {
        const options = {
            method: 'GET',
            url: 'https://weatherapi-com.p.rapidapi.com/search.json',
            params: { q: `${value}` },
            headers: {
                'X-RapidAPI-Key': `${process.env.REACT_APP_WEATHER_APIKEY}`,
                'X-RapidAPI-Host': 'weatherapi-com.p.rapidapi.com'
            }
        }
        try {
            const response = await axios.request(options);
            return response.data;
        } catch (error) {
            console.error(error);
        }
    }
)

export const autocompleteSlice = createSlice({
    name: 'autocompleteList',
    initialState: {
        autocompleteList: [],
    },
    reducers: {},
    extraReducers: (builder) => {
        builder.addCase(fetchAutocompleteList.fulfilled, (state, action) => {
            state.autocompleteList = action.payload
        })
    },
})

//action creators
// export const { setCardNavbar, deleteCity } = autocompleteSlice.actions

export default autocompleteSlice.reducer