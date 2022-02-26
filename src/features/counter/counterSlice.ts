import { createSlice, PayloadAction } from '@reduxjs/toolkit'

type CounterState = {
  count: number
}

const initialState: CounterState = {
  count: 0,
}

export const counterSlice = createSlice({
  name: 'counter',
  initialState,
  reducers: {
    add: (
      state,
      action: PayloadAction<{
        number: number
      }>
    ) => {
      /**
       * Redux でのState更新の要件であるImmutableをRedux-Toolkitが保証しているので更新がシンプル
       */
      const { number } = action.payload
      state.count = state.count + number
    },
  },
})
