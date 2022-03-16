import * as React from 'react'

import { AppProvider } from './AppProvider'
import { Link, Switch } from 'react-router-dom'
import { Navbar } from '../atmicComponents/Navbar'
import { Container } from '../atmicComponents/Container'
import { SignIn } from '../features/firebase/SignInSiginOut'
import { User } from '../features/firebase/User'
import { Auth } from '../features/auth/Auth'
import { DomainSetting } from '../features/domainSetting/DomainSetting'

type AppProps = React.ComponentProps<typeof Switch>

export const App: React.FC<AppProps> = () => {
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
        <Auth
          anonymouse={<SignIn />}
          user={<User />}
          notSetting={<DomainSetting />}
        />
      </Container>
    </AppProvider>
  )
}
