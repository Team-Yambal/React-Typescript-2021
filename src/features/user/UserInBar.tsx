import { x } from '@xstyled/styled-components'
import React from 'react'
import { Button } from '../../atmicComponents/Button'
import { useFirebaseAuth } from '../firebase/hooks/useFirebaseAuth'

export const UserInBar = () => {
  const { user, isLogined, signOut, googleSignIn } = useFirebaseAuth()

  return (
    <x.div display="flex" alignItems="center">
      {isLogined ? (
        <>
          {user?.displayName} <Button onClick={signOut}>Logout</Button>
        </>
      ) : (
        <>
          <Button onClick={googleSignIn}>Login</Button>
        </>
      )}
    </x.div>
  )
}
