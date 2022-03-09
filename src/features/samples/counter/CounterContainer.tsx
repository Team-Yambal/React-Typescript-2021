import React from 'react'
import { useSelector } from 'react-redux'
import { counterSelector } from '../../../app/store/selector/CounterSelector'
import { counterSlice } from './counterSlice'
import { useAppDispatch } from '../../../app/store/store'
import { Counter } from './Counter'
import { x } from '@xstyled/styled-components'

type CounterContainerProps = typeof x.div.defaultProps

export const CounterContainer = ({ ...props }: CounterContainerProps) => {
  const count = useSelector(counterSelector)
  const dispatch = useAppDispatch()

  const addHandler = React.useCallback(() => {
    dispatch(counterSlice.actions.add({ number: 1 }))
  }, [count])

  return (
    <x.div {...props}>
      <Counter count={count} onClickAdd={addHandler} {...props} />
    </x.div>
  )
}
