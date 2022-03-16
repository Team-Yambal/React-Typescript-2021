import React from 'react'
import { ComponentStory, ComponentMeta } from '@storybook/react'

import { Navs } from './Navs'

export default {
  title: 'Sample/Atomic Components/Navigation/Navs',
  component: Navs,
  parameters: {
    layout: 'fullscreen',
  },
  argTypes: { onClick: { action: 'clicked' } },
} as ComponentMeta<typeof Navs>

const Template: ComponentStory<typeof Navs> = args => <Navs {...args} />

export const nabs = Template.bind({})
nabs.args = {
  navItems: [
    <Navs.NavItem key="NavItem1">
      <a>Nav-item 1</a>
    </Navs.NavItem>,
    <Navs.NavItem key="NavItem2">
      <a>Nav-item 2</a>
    </Navs.NavItem>,
  ],
}

export const tabs = Template.bind({})
tabs.args = {
  tabs: true,
  navItems: [
    <Navs.NavItem key="NavItem1" active>
      <a>Nav-item 1</a>
    </Navs.NavItem>,
    <Navs.NavItem key="NavItem2">
      <a>Nav-item 2</a>
    </Navs.NavItem>,
  ],
}
