import { User } from 'firebase/auth'
import { atom, selector } from 'recoil'

type UserState = Pick<
  User,
  'uid' | 'displayName' | 'email' | 'photoURL' | 'emailVerified' | 'isAnonymous'
>

export const userState = atom<UserState | null>({
  key: 'userState',
  default: null,
})

export const isLogined = selector<boolean>({
  key: 'isLogined',
  get: ({ get }) => {
    const user = get(userState)
    return !!user
  },
})
