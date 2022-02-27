import React from 'react'
import renderer from 'react-test-renderer'
import { render, screen } from '@testing-library/react'
import Hello from './Hello'

test('Hello Component', () => {
  // Snapshot
  const component = renderer.create(<Hello />)
  const tree = component.toJSON()
  expect(tree).toMatchSnapshot()

  // Dom testing
  render(<Hello />)
  const element = screen.getByText(/Hello World/i)
  expect(element).toBeTruthy()
})
