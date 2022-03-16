import { combineReducers } from 'redux'
import { connectRouter } from 'connected-react-router'
import { History } from 'history'

import { counterSlice } from '../../features/samples/counter/counterSlice'
import { weatherQueries } from './queries/weatherQueries'
import { newsQueries } from './queries/newsQueries'
import { firebaseQueries } from './queries/firebaseQueries'

export const createRootReducer = (history: History) => {
  return combineReducers({
    router: connectRouter(history),
    [counterSlice.name]: counterSlice.reducer,
    [weatherQueries.reducerPath]: weatherQueries.reducer,
    [newsQueries.reducerPath]: newsQueries.reducer,
    [firebaseQueries.reducerPath]: firebaseQueries.reducer,
  })
}
