import * as React from 'react'
import ReactDOM from 'react-dom'
import { AppProvider } from './app/AppProvider'
import { CounterContainer } from './features/counter/CounterContainer'
import Hello from './Hello'

ReactDOM.render(
  <React.StrictMode>
    <AppProvider>
      <Hello />
      <CounterContainer />
    </AppProvider>
  </React.StrictMode>,
  document.getElementById('app')
)
