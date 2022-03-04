import React from 'react'

type CounterProps = {
  count: number
  onClickAdd: () => void
}

export const Counter = ({ count, onClickAdd }: CounterProps) => {
  return (
    <div>
      {count}
      <button onClick={onClickAdd}>Add</button>
    </div>
  )
}
