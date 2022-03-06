import * as React from 'react'
import { CounterContainer } from '../features/counter/CounterContainer'
import NewsContainer from '../features/news/NewsContainer'
import WeatherContainer from '../features/weather/WeatherContainer'
import { AppProvider } from './AppProvider'

export const App = () => {
  return (
    <AppProvider>
      <CounterContainer m="1rem" />
      <WeatherContainer />
      <NewsContainer
        p="0.25rem"
        m="0.25rem"
        border="solid 1px gray"
        borderColor="grayLighten"
      />
    </AppProvider>
  )
}
