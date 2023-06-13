import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import axios from 'axios';

export const fetchWeather = createAsyncThunk(
    'fetchWeather',
    async (city, days) => {
        const options = {
            method: 'GET',
            url: 'https://weatherapi-com.p.rapidapi.com/forecast.json',
            params: {
                q: `${city}`,
                days: `${days}`
            },
            headers: {
                'X-RapidAPI-Key': `${process.env.REACT_APP_APIKEY}`,
                'X-RapidAPI-Host': 'weatherapi-com.p.rapidapi.com'
            }
        }
        try {
            const response = await axios.request(options);
            console.log(response.data);
            return response.data;
        } catch (error) {
            console.error(error);
        }
    }
)

export const weatherSlice = createSlice({
    name: 'weather',
    initialState: {weather:{}},
    reducers: {
        //actions
        getWeather: (state, action) => {
            state = action.payload
        }
    },
    extraReducers: (builder) => {
        builder.addCase(fetchWeather.fulfilled, (state, action) => {
            state.weather = action.payload
        })
    },
})

//action creators
export const { getWeather } = weatherSlice.actions

export default weatherSlice.reducer