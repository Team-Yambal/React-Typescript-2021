import * as React from 'react'
import ReactDOM from 'react-dom'
import { AppProvider } from './app/AppProvider'
import { CounterContainer } from './features/counter/CounterContainer'
import WeatherContainer from './features/weather/WeatherContainer'
import NewsContainer from './features/news/NewsContainer'
import Hello from './Hello'

ReactDOM.render(
  <React.StrictMode>
    <AppProvider>
      <Hello />
      <CounterContainer />
      <WeatherContainer />
      <NewsContainer />
    </AppProvider>
  </React.StrictMode>,
  document.getElementById('app')
)
