import { createGlobalStyle } from '@xstyled/styled-components'
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

  html {
    font-size: 10px;
  }

  body {
    font-size: 1.4rem;
    line-height: 1.5;

    font-family: system-ui,-apple-system,"Segoe UI",Roboto,"Helvetica Neue",Arial,"Noto Sans","Liberation Sans",sans-serif,"Apple Color Emoji","Segoe UI Emoji","Segoe UI Symbol","Noto Color Emoji";
  }

  h1, h2, h3, h4, h5, h6 {
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

  h6 {
    font-size: 1rem;
  }

  p {
    margin-top: 0;
    margin-bottom: 1rem;
  }
`
