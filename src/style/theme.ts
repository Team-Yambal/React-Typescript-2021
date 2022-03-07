import { defaultTheme } from '@xstyled/styled-components'
import { colors } from './colors'

export const theme = {
  ...defaultTheme,
  colors: {
    blue: colors.blue,
    indigo: colors.indigo,
    purple: colors.purple,
    pink: colors.pink,
    red: colors.red,
    orange: colors.orange,
    yellow: colors.yellow,
    green: colors.green,
    teal: colors.teal,
    cyan: colors.cyan,
    white: '#fff',
    gray: colors.gray,
    grayLighten: colors.grayLighten,
    grayDark: colors.grayDarken,
    primary: colors.blue,
    primaryDarken: colors.blueDarken,
    secondary: colors.gray,
    secondaryDarken: colors.grayDarken,
    success: colors.green,
    info: colors.cyan,
    warning: colors.yellow,
    danger: colors.red,
    light: colors.light,
    dark: colors.dark,
  },
}
