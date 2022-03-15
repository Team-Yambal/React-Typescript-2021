import * as React from 'react'

import { AppProvider } from './AppProvider'
import { Link, Route, Switch } from 'react-router-dom'
import { SuspenseRoute } from './routes/SuspenseRoute'
import { Samples } from '../features/samples/Samples'
import { Navbar } from '../atmicComponents/Navbar'
import { Container } from '../atmicComponents/Container'

type AppProps = React.ComponentProps<typeof Switch>

export const App: React.FC<AppProps> = ({ ...routesProps }) => {
  return (
    <AppProvider>
      <Navbar
        backgroundColor="primary"
        brand={
          <Navbar.Brand>
            <Link to="/">My Project</Link>
          </Navbar.Brand>
        }
        color="white"
        navItems={[
          <Navbar.NavItem key="q">
            <Link to="/sample/counter">Samples</Link>
          </Navbar.NavItem>,
        ]}
      />
      <Container>
        <Switch {...routesProps}>
          <SuspenseRoute
            exact={false}
            path="/sample"
            fallback={null}
            children={<Samples />}
          />
          <Route children={<>World</>} />
        </Switch>
      </Container>
    </AppProvider>
  )
}
