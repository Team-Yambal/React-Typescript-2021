import { configureStore } from '@reduxjs/toolkit'
import { useDispatch } from 'react-redux'

import { setupListeners } from '@reduxjs/toolkit/query'
import { weatherQueries } from './queries/weatherQueries'
import { newsQueries } from './queries/newsQueries'
import { createRootReducer } from './reducer'
import { browserHistory } from '../browserHistory'
import { asanaQueries } from './queries/asanaQueties'
import { dbUserQueries } from './queries/dbUserQueries'

export type RootState = ReturnType<typeof rootReducer>

const rootReducer = createRootReducer(browserHistory)

export const store = configureStore({
  reducer: rootReducer,
  devTools: process.env.NODE_ENV !== 'production',
  middleware: getDefaultMiddleware =>
    getDefaultMiddleware()
      .concat(weatherQueries.middleware)
      .concat(newsQueries.middleware)
      .concat(asanaQueries.middleware)
      .concat(dbUserQueries.middleware),
})

/**
 * refetchOnMount とrefetchOnReconnect動作に使用されるユーティリティ。
 */
setupListeners(store.dispatch)

export type AppDispatch = typeof store.dispatch
export const useAppDispatch = () => useDispatch<AppDispatch>()
