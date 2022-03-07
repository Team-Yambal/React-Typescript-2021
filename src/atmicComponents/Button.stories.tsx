import React from 'react'
import { ComponentStory, ComponentMeta } from '@storybook/react'

import { Button } from './Button'

export default {
  title: 'Sample/Atomic Components/Button',
  component: Button,
  parameters: {
    layout: 'fullscreen',
  },
  argTypes: { onClick: { action: 'clicked' } },
} as ComponentMeta<typeof Button>

export const list = () => {
  return (
    <div>
      <Button variantColor="primary" mr="8px">
        primary
      </Button>
      <Button variantColor="secondary">secondary</Button>
    </div>
  )
}

const Template: ComponentStory<typeof Button> = args => <Button {...args} />

export const primary = Template.bind({})
primary.args = {
  variantColor: 'primary',
  children: 'primary',
}

export const secondary = Template.bind({})
secondary.args = {
  variantColor: 'secondary',
  children: 'secondary',
}
