import React from 'react'
import styled from 'styled-components'

type CounterProps = {
  count: number
  onClickAdd: () => void
}

const Count = styled.span`
  color: ${props => props.theme.text};
`

export const Counter = ({ count, onClickAdd }: CounterProps) => {
  return (
    <div>
      <Count>{count}</Count>
      <button onClick={onClickAdd}>Add</button>
    </div>
  )
}
