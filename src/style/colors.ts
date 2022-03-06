import { darken, lighten } from 'polished'

export const colors = {
  blue: '#0d6efd',
  indigo: '#6610f2',
  purple: '#6f42c1',
  pink: '#d63384',
  red: '#dc3545',
  orange: '#fd7e14',
  yellow: '#ffc107',
  green: '#198754',
  teal: '#20c997',
  cyan: '#0dcaf0',
  white: '#fff',
  gray: '#6c757d',
  grayLighten: lighten(0.375, '#6c757d'),
  grayDark: '#343a40',
  blueDarken: darken(0.05, '#0d6efd'),
  grayDarken: darken(0.05, '#6c757d'),
  light: '#f8f9fa',
  dark: '#212529',
}
