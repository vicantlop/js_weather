import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import axios from 'axios';

export const fetchWeather = createAsyncThunk(
    'fetchWeather',
    async (city) => {
        const options = {
            method: 'GET',
            url: 'https://weatherapi-com.p.rapidapi.com/forecast.json',
            params: {
                q: `${city}`,
                days: `3`
            },
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

export const weatherSlice = createSlice({
    name: 'weather',
    initialState: {
        cities: [],
    },
    reducers: {
        setCardNavbar: (state, action) => {
            state.cities[action.payload.index].selected = action.payload.selected;
        },
        deleteCity: (state, action) => {
            state.cities.splice(action.payload,1)
        }
    },
    extraReducers: (builder) => {
        builder.addCase(fetchWeather.fulfilled, (state, action) => {
            state.cities.push(action.payload)
        })
    },
})

//action creators
export const { setCardNavbar, deleteCity } = weatherSlice.actions

export default weatherSlice.reducer