import { configureStore, combineReducers } from '@reduxjs/toolkit'
import { useDispatch } from 'react-redux'
import { counterSlice } from '../features/counter/counterSlice'

import { setupListeners } from '@reduxjs/toolkit/query'
import { weatherApi } from '../features/weather/weatherApi'

export const rootReducer = combineReducers({
  [counterSlice.name]: counterSlice.reducer,
  [weatherApi.reducerPath]: weatherApi.reducer,
})

export type RootState = ReturnType<typeof rootReducer>

export const store = configureStore({
  reducer: rootReducer,
  devTools: process.env.NODE_ENV !== 'production',
  middleware: getDefaultMiddleware =>
    getDefaultMiddleware().concat(weatherApi.middleware),
})

/**
 * refetchOnMount とrefetchOnReconnect動作に使用されるユーティリティ。
 */
setupListeners(store.dispatch)

export type AppDispatch = typeof store.dispatch
export const useAppDispatch = () => useDispatch<AppDispatch>()
