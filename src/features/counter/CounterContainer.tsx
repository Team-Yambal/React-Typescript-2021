import React from 'react'
import { useSelector } from 'react-redux'
import { counterSelector } from '../../app/store/selector/CounterSelector'
import { counterSlice } from './counterSlice'
import { useAppDispatch } from '../../app/store/store'
import { Counter } from './Counter'

export const CounterContainer = () => {
  const count = useSelector(counterSelector)
  const dispatch = useAppDispatch()

  const addHandler = React.useCallback(() => {
    dispatch(counterSlice.actions.add({ number: 1 }))
  }, [count])

  return (
    <div>
      <Counter count={count} onClickAdd={addHandler} />
    </div>
  )
}
