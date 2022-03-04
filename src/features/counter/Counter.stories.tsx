import React from 'react'
import { ComponentStory, ComponentMeta } from '@storybook/react'

import { Counter } from './Counter'

export default {
  title: 'Sample/Counter',
  component: Counter,
  parameters: {
    layout: 'fullscreen',
  },
  argTypes: { onClickAdd: { action: 'clicked' } },
} as ComponentMeta<typeof Counter>

const Template: ComponentStory<typeof Counter> = args => <Counter {...args} />

export const Normal = Template.bind({})
Normal.args = {
  count: 0,
}
