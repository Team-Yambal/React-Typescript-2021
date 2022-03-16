import { SystemProps, x } from '@xstyled/styled-components'
import React, { ReactNode } from 'react'
import styled from 'styled-components'
import { Container } from './Container'
import { Navs } from './Navs'

type Navbar = ((props: NavbarProps) => React.ReactElement) & {
  NavItem: typeof Navs.NavItem
  Brand: typeof NavbarBrand
}

type NavbarProps = typeof x.nav.defaultProps & {
  brand?: ReactNode
  navItems?: JSX.Element[]
}

export const Navbar: Navbar = ({
  children,
  brand,
  navItems,
  ...restProps
}: NavbarProps) => {
  return (
    <x.nav
      position="relative"
      flexWrap={{ _: 'wrap' }}
      display="flex"
      alignItems="center"
      justifyContent={{ _: 'space-between' }}
      pt="0.5rem"
      pb="0.5rem"
      {...restProps}
    >
      <Container
        display="flex"
        alignItems="center"
        justifyContent="space-between"
      >
        {brand}
        <x.div flexGrow={1} alignItems="center">
          {navItems && <Navs navItems={navItems} spacing="narrow" />}
        </x.div>
        <x.div flexGrow={0} flexShrink={0}>
          {children}
        </x.div>
      </Container>
    </x.nav>
  )
}

/**
 * NavbarBrandProps (Navbar.Brand)
 */
type NavbarBrandProps = typeof x.div.defaultProps & SystemProps
const NavbarBrand = styled(({ children, ...restProps }: NavbarBrandProps) => {
  return <x.div {...restProps}>{children}</x.div>
})`
  font-size: 1.25rem;
  margin-right: 1rem;
  a {
    pudding-top: 0.3125rem;
    pudding-bottom:0.3125rem
    text-decoration: none;
    white-space: nowrap;
    color: inherit;
  }
`

Navbar.NavItem = Navs.NavItem
Navbar.Brand = NavbarBrand
