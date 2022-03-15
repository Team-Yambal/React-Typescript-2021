import {
  deleteUser,
  GoogleAuthProvider,
  signInWithPopup,
  signOut,
} from 'firebase/auth'
import React from 'react'
import { useRecoilValue } from 'recoil'

import { firebaseAuth } from '../initialize/firebaseAuth'
import { isLogined, userState } from '../store/atoms'

export const useFirebaseAuth = () => {
  // firebase user
  const user = firebaseAuth.currentUser

  // state user
  const localUser = useRecoilValue(userState)

  // is logined?
  const _isLogined = useRecoilValue(isLogined)

  // sign-in
  const _googleSignIn = React.useCallback(() => {
    const provider = new GoogleAuthProvider()
    firebaseAuth.languageCode = 'ja'
    signInWithPopup(firebaseAuth, provider)
  }, [user])

  // sign-out
  const _signOut = React.useCallback(() => {
    signOut(firebaseAuth)
  }, [user])

  // delete user
  const _deleteUser = React.useCallback(() => {
    if (user) {
      deleteUser(user)
    }
  }, [user])

  /**
   * TODO
   * https://firebase.google.com/docs/auth/web/manage-users?hl=ja
   */

  return {
    user,
    localUser: localUser,
    isLogined: _isLogined,
    googleSignIn: _googleSignIn,
    signOut: _signOut,
    deleteUser: _deleteUser,
  }
}
