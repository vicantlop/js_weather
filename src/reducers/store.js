import { configureStore, getDefaultMiddleware } from '@reduxjs/toolkit'
import weatherReducer from './weatherSlice'
import autocompleteList from './autocompleteSlice'
import logger from 'redux-logger'

export const store = configureStore({
  reducer: {
    weather: weatherReducer,
    autocompleteList,
  },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(logger),
})