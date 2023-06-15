import { configureStore, getDefaultMiddleware } from '@reduxjs/toolkit'
import weatherReducer from './weatherSlice'
import CardNavbarSelection from './cardSlice'
import logger from 'redux-logger'

export const store = configureStore({
  reducer: {
    weather: weatherReducer,
    cardSelection: CardNavbarSelection,
  },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(logger),
})