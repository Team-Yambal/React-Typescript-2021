import * as React from 'react'

import { CounterContainer } from '../features/counter/CounterContainer'
/*
import NewsContainer from '../features/news/NewsContainer'
import WeatherContainer from '../features/weather/WeatherContainer'
*/
import { AppProvider } from './AppProvider'
import { Route, Switch } from 'react-router-dom'
import { SuspenseRoute } from './SuspenseRoute'

type AppProps = React.ComponentProps<typeof Switch>

export const App: React.FC<AppProps> = ({ ...routesProps }) => {
  return (
    <AppProvider>
      <Switch {...routesProps}>
        <SuspenseRoute
          exact={true}
          path="/sample"
          fallback={null}
          children={
            <>
              <CounterContainer />
            </>
          }
        />
        <Route children={<>World</>} />
      </Switch>
    </AppProvider>
  )
}
