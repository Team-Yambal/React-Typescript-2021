import React from 'react'
import renderer from 'react-test-renderer'
import { render, screen } from '@testing-library/react'
import { Counter } from './Counter'

test('Counter', () => {
  // Snapshot
  const component = renderer.create(
    <Counter
      count={1}
      onClickAdd={() => {
        return
      }}
    />
  )
  const tree = component.toJSON()
  expect(tree).toMatchSnapshot()

  // Dom testing
  render(
    <Counter
      count={1}
      onClickAdd={() => {
        return
      }}
    />
  )
  const count = screen.getByText(/1/i)
  expect(count).toBeTruthy()
  const add = screen.getByText(/Add/i)
  expect(add).toBeTruthy()
})
