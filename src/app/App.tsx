import * as React from 'react'
import { CounterContainer } from '../features/counter/CounterContainer'
import NewsContainer from '../features/news/NewsContainer'
import WeatherContainer from '../features/weather/WeatherContainer'
import { AppProvider } from './AppProvider'

export const App = () => {
  return (
    <AppProvider>
      <CounterContainer />
      <WeatherContainer />
      <NewsContainer />
    </AppProvider>
  )
}
