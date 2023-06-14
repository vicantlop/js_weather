import { configureStore, getDefaultMiddleware } from '@reduxjs/toolkit'
import weatherReducer from './weatherSlice'
import imagesReducer from './imagesSlice'
import logger from 'redux-logger'

export const store = configureStore({
  reducer: {
    weather: weatherReducer,
    images: imagesReducer
  },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(logger),
})