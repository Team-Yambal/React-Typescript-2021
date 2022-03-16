import { SystemProps, x } from '@xstyled/styled-components'
import React from 'react'
import styled from 'styled-components'

type Navs = ((props: NavsProps) => React.ReactElement) & {
  NavItem: typeof NavsNavItem
}

type NavsProps = typeof x.ul.defaultProps & {
  tabs?: boolean
  navItems: React.ReactElement[]
  spacing?: 'narrow' | 'wide'
}

export const Navs: Navs = ({
  tabs,
  navItems,
  spacing = 'wide',
  ...restProps
}: NavsProps) => {
  return (
    <x.ul
      display="flex"
      flexDirection="row"
      pl="0"
      mb="0"
      listStyleType="none"
      borderBottom={tabs && `1px solid #dee2e6`}
      {...restProps}
    >
      {navItems.map(navItem => {
        return React.cloneElement(navItem, { tabs, spacing })
      })}
    </x.ul>
  )
}

type NavsNavItemProps = typeof x.li.defaultProps &
  SystemProps & {
    active?: boolean
    tabs?: boolean
    spacing?: 'narrow' | 'wide'
  }

// eslint-disable-next-line @typescript-eslint/no-unused-vars
const NavsNavItem = styled(({ spacing, ...restProps }: NavsNavItemProps) => {
  return <x.li display="list-item" {...restProps} />
})<NavsNavItemProps>`
  a {
    display: block;
    padding: ${props =>
      props.spacing == 'narrow' ? '0.5rem 0.5rem' : '0.5rem 1rem'};
    text-decoration: none;
    color: inherit;
    ${props =>
      props.tabs
        ? `border: 1px solid transparent;
        border-top-left-radius: 0.25rem;
        border-top-right-radius: 0.25rem;
        margin-bottom: -1px;
        &:hover {
          border-color: #e9ecef #e9ecef #dee2e6;
        }
        `
        : null}
    ${props =>
      props.tabs && props.active
        ? `border-color: #dee2e6 #dee2e6 #fff;
      &:hover {
        border-color: #dee2e6 #dee2e6 #fff;
      }`
        : null}
  }
`

Navs.NavItem = NavsNavItem
