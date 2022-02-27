import React from 'react'
import { useSelector } from 'react-redux'
import { counterSelector } from './CounterSelector'
import { counterSlice } from './counterSlice'
import { useAppDispatch } from '../../app/store'

export const CounterContainer = () => {
  const count = useSelector(counterSelector)
  const dispatch = useAppDispatch()

  const addHandler = React.useCallback(() => {
    dispatch(counterSlice.actions.add({ number: 1 }))
  }, [count])

  return (
    <div>
      {count}
      <button type="button" onClick={addHandler}>
        Add
      </button>
    </div>
  )
}
