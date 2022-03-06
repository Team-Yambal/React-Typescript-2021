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

  h1, h2, h3, h4, h5, h5 {
    margin-top: 0;
    margin-bottom: 0.5rem;
    font-weight: 500;
    line-height: 1.2;
  }

  h1 {
    font-size: calc(1.425rem + 2.1vw);
  }

  h2 {
    font-size: calc(1.325rem + .9vw);
  }

  h3 {
    font-size: calc(1.3rem + .6vw);
  }

  h4 {
    font-size: calc(1.275rem + .3vw);
  }

  h5 {
    font-size: 1.25rem;
  }

  h5 {
    font-size: 1rem;
  }
`
