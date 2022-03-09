import * as React from 'react'

import { AppProvider } from './AppProvider'
import { Route, Switch } from 'react-router-dom'
import { SuspenseRoute } from './routes/SuspenseRoute'
import { Samples } from '../features/samples/Samples'

type AppProps = React.ComponentProps<typeof Switch>

export const App: React.FC<AppProps> = ({ ...routesProps }) => {
  return (
    <AppProvider>
      <Switch {...routesProps}>
        <SuspenseRoute
          exact={false}
          path="/sample"
          fallback={null}
          children={<Samples />}
        />
        <Route children={<>World</>} />
      </Switch>
    </AppProvider>
  )
}
