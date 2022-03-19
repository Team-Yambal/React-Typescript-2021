import { User } from 'firebase/auth'
import { atom, selector } from 'recoil'

export type UserState = Pick<
  User,
  'uid' | 'displayName' | 'email' | 'photoURL' | 'emailVerified' | 'isAnonymous'
> & {
  idToken: string
}

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
