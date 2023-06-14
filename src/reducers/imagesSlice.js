import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import axios from 'axios';

export const fetchImages = createAsyncThunk(
    'fetchImages',
    async (lat, lng) => {
        const options = {
            method: 'GET',
            url: 'https://geocoding-places.p.rapidapi.com/get_geocoding_images/v1',
            params: {
                lat: `${lat}`,
                lng: `${lng}`,
                lang: 'en'
            },
            headers: {
                'X-RapidAPI-Key': `${process.env.REACT_APP_IMAGES_APIKEY}`,
                'X-RapidAPI-Host': 'geocoding-places.p.rapidapi.com'
            }
        };

        try {
            const response = await axios.request(options);
            console.log(response.data);
            return response.data;
        } catch (error) {
            console.error(error);
        }
    }
)

export const imagesSlice = createSlice({
    name: 'images',
    initialState: { images: {} },
    reducers: {},
    extraReducers: (builder) => {
        builder.addCase(fetchImages.fulfilled, (state, action) => {
            state.images = action.payload
        })
    },
})

//action creators
// export const { getWeather } = imagesSlice.actions

export default imagesSlice.reducer