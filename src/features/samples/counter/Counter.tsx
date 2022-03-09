import React from 'react'
import { Button } from '../../../atmicComponents/Button'

export type CounterProps = {
  count: number
  onClickAdd: () => void
}

export const Counter = ({ count, onClickAdd }: CounterProps) => {
  return (
    <>
      {count}
      <Button variantColor="primary" onClick={onClickAdd}>
        Add
      </Button>
    </>
  )
}
