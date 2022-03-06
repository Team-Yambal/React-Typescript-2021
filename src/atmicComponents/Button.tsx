import { x } from '@xstyled/styled-components'
import React from 'react'

type ButtonVariants = {
  variantColor: 'primary' | 'secondary' | 'success' | 'danger' | 'info'
}

const buttonVariants = {
  variantColor: {
    primary: {
      backgroundColor: {
        _: 'primary',
        hover: 'primaryDarken',
      },
      borderColor: {
        _: 'primary',
      },
      color: 'white',
    },
    secondary: {
      backgroundColor: {
        _: 'secondary',
        hover: 'secondaryDarken',
      },
      borderColor: {
        _: 'secondary',
      },
      color: 'white',
    },
    success: {
      backgroundColor: {
        _: 'alert',
      },
    },
    danger: {
      backgroundColor: {
        _: 'tertiary',
      },
    },
    info: {
      backgroundColor: {
        _: 'textLink',
      },
    },
  },
}

export type ButtonProps = typeof x.button.defaultProps & {
  variantColor?: ButtonVariants['variantColor']
}

export const Button: React.FC<ButtonProps> = React.forwardRef(function Button(
  { children, variantColor = 'primary', ...restProps },
  ref
) {
  return (
    <x.button
      ref={ref}
      position="relative"
      display="inline-flex"
      appearance="none"
      alignItems="center"
      justifyContent="center"
      verticalAlign="middle"
      cursor={{
        disabled: 'not-allowed',
      }}
      padding={'0.375rem 0.75rem'}
      border={'1px solid transparent'}
      borderRadius="0.25rem"
      transition={
        'color .15s ease-in-out,background-color .15s ease-in-out,border-color .15s ease-in-out,box-shadow .15s ease-in-out;'
      }
      outline={{ _: 0, focus: 0 }}
      fontWeight={400}
      userSelect="none"
      {...buttonVariants.variantColor[variantColor]}
      {...restProps}
    >
      {children}
    </x.button>
  )
})
