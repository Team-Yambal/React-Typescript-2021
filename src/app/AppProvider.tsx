import React, { ReactNode } from 'react'
import { Provider } from 'react-redux'
import { ThemeProvider } from 'styled-components'
import { GlobalStyle } from '../style/GlobalStyle'
import { theme } from '../style/theme'
import { store } from './store/store'

type ProviderProps = {
  children: ReactNode
}

export function AppProvider({ children }: ProviderProps) {
  return (
    <Provider store={store}>
      <ThemeProvider theme={theme}>
        <GlobalStyle />
        {children}
      </ThemeProvider>
    </Provider>
  )
}
