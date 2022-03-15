import React from 'react'
import { Button } from '../../atmicComponents/Button'

import { useFirebaseAuth } from './hooks/useFirebaseAuth'

export const SignIn = () => {
  const { googleSignIn, isLogined } = useFirebaseAuth()
  return (
    <Button onClick={googleSignIn} disabled={isLogined}>
      Google Login
    </Button>
  )
}

export const SignOut = () => {
  const { signOut, isLogined } = useFirebaseAuth()

  return (
    <Button onClick={signOut} disabled={!isLogined}>
      Logout
    </Button>
  )
}

export const DeleteUser = () => {
  const { deleteUser, isLogined } = useFirebaseAuth()

  return (
    <Button onClick={deleteUser} disabled={!isLogined}>
      deleteUser
    </Button>
  )
}
