import React from 'react'
import { useFirebaseAuth } from './hooks/useFirebaseAuth'

export const User = () => {
  const { user } = useFirebaseAuth()
  return (
    <>
      {user?.photoURL && <img src={user?.photoURL} />}
      <pre>{JSON.stringify(user, null, 2)}</pre>
    </>
  )
}
