import { x } from '@xstyled/styled-components'
import React from 'react'

type ContainerProps = typeof x.div.defaultProps

export const Container: React.FC<ContainerProps> = React.forwardRef(
  function Container({ children, ...restProps }, ref) {
    return (
      <x.div
        w="100%"
        maxWidth={{
          sm: '540px',
          md: '720px',
          lg: '960px',
          xl: '1140px',
        }}
        px="12px"
        mx="auto"
        ref={ref}
        {...restProps}
      >
        {children}
      </x.div>
    )
  }
)
