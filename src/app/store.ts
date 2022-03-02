import { configureStore, combineReducers } from '@reduxjs/toolkit'
import { useDispatch } from 'react-redux'
import { counterSlice } from '../features/counter/counterSlice'

import { setupListeners } from '@reduxjs/toolkit/query'
import { weatherQueries } from './queries/weatherQueries'
import { newsQueries } from './queries/newsQueries'

export const rootReducer = combineReducers({
  [counterSlice.name]: counterSlice.reducer,
  [weatherQueries.reducerPath]: weatherQueries.reducer,
  [newsQueries.reducerPath]: newsQueries.reducer,
})

export type RootState = ReturnType<typeof rootReducer>

export const store = configureStore({
  reducer: rootReducer,
  devTools: process.env.NODE_ENV !== 'production',
  middleware: getDefaultMiddleware =>
    getDefaultMiddleware()
      .concat(weatherQueries.middleware)
      .concat(newsQueries.middleware),
})

/**
 * refetchOnMount とrefetchOnReconnect動作に使用されるユーティリティ。
 */
setupListeners(store.dispatch)

export type AppDispatch = typeof store.dispatch
export const useAppDispatch = () => useDispatch<AppDispatch>()
