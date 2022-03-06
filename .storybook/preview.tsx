import { render } from 'react-dom'
import { GlobalStyle } from '../src/style/GlobalStyle'
import { StoryContext, StoryGetter } from '@storybook/addons'
import { ThemeProvider } from 'styled-components'
import { theme } from '../src/style/theme'

export const parameters = {
  actions: { argTypesRegex: '^on[A-Z].*' },
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/,
    },
  },
}

/**
 * default で story に適用する Decorators
 */
export const decorators = [
  (getStory: StoryGetter, context: StoryContext) => {
    return <ThemeProvider theme={theme}>{getStory(context)}</ThemeProvider>
  },
]

/**
 * GlobalStyle を storybook 全体で1度だけ rendering するための Fucntion
 */
const renderGlobalStyle = () => {
  let el = document.querySelector('#my-global-style')
  if (!el) {
    el = document.createElement('div')
    el.id = 'my-global-style'
    document.body.appendChild(el)
  }

  /**
   * el に対して rendering しているが、
   * createGlobalStyle によって、rendering される `<style />` は自動的に `<head />` 内に追加される。
   */
  render(
    <>
      <GlobalStyle />
    </>,
    el
  )
}

renderGlobalStyle()
