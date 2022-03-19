import React, { ReactNode } from 'react'
import { useFirebaseAuth } from '../firebase/hooks/useFirebaseAuth'

type AuthProps = {
  anonymouse: ReactNode
  user: ReactNode
}

export const Auth = ({ user, anonymouse }: AuthProps) => {
  const { isLogined } = useFirebaseAuth()
  if (isLogined) {
    return <>{user}</>
  } else {
    return <>{anonymouse}</>
  }
}
