import { createGlobalStyle } from 'styled-components'
import { normalize } from 'polished'

/**
 * createGlobalStyle
 * @see https://styled-components.com/docs/api#createglobalstyle
 *
 * normalize(normalize)
 * @see https://polished.js.org/docs/#normalize
 */

export const GlobalStyle = createGlobalStyle`
  ${normalize()}
`
