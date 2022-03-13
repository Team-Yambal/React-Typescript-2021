import React from 'react'
import { ComponentStory, ComponentMeta } from '@storybook/react'

import { Navbar } from './Navbar'

export default {
  title: 'Sample/Atomic Components/Navigation/Navbar',
  component: Navbar,
  parameters: {
    layout: 'fullscreen',
  },
  argTypes: { onClick: { action: 'clicked' } },
} as ComponentMeta<typeof Navbar>

const Template: ComponentStory<typeof Navbar> = args => <Navbar {...args} />

export const primary = Template.bind({})
primary.args = {
  backgroundColor: 'primary',
  color: 'white',
  brand: <Navbar.Brand>Brand</Navbar.Brand>,
  navItems: [
    <Navbar.NavItem key="NavItem1">
      <a>Nav-item 1</a>
    </Navbar.NavItem>,
    <Navbar.NavItem key="NavItem2">
      <a>Nav-item 2</a>
    </Navbar.NavItem>,
  ],
  children: 'children',
}

export const secondary = Template.bind({})
secondary.args = {
  backgroundColor: 'secondary',
  color: 'white',
  brand: <Navbar.Brand>Brand</Navbar.Brand>,
  navItems: [
    <Navbar.NavItem key="NavItem1">
      <a>Nav-item 1</a>
    </Navbar.NavItem>,
    <Navbar.NavItem key="NavItem2">
      <a>Nav-item 2</a>
    </Navbar.NavItem>,
  ],
  children: 'children',
}
