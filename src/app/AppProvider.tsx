import { ThemeProvider } from '@xstyled/styled-components'
import { ConnectedRouter } from 'connected-react-router'
import React, { ReactNode } from 'react'
import { Provider } from 'react-redux'
import { GlobalStyle } from '../style/GlobalStyle'
import { theme } from '../style/theme'
import { store } from './store/store'
import { browserHistory } from './browserHistory'

type ProviderProps = {
  children: ReactNode
}

export function AppProvider({ children }: ProviderProps) {
  return (
    <Provider store={store}>
      <ConnectedRouter history={browserHistory}>
        <ThemeProvider theme={theme}>
          <GlobalStyle />
          {children}
        </ThemeProvider>
      </ConnectedRouter>
    </Provider>
  )
}
