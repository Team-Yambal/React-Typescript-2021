import { onAuthStateChanged } from 'firebase/auth'
import React from 'react'
import { useSetRecoilState } from 'recoil'
import { userState } from '../store/atoms'
import { firebaseAuth } from '../initialize/firebaseAuth'

type FirebaseAuthListenerProps = { children: React.ReactNode }

export const FirebaseAuthListener = ({
  children,
}: FirebaseAuthListenerProps) => {
  const setUser = useSetRecoilState(userState)

  React.useEffect(() => {
    onAuthStateChanged(firebaseAuth, user => {
      if (user) {
        user.getIdToken().then(idToken => {
          setUser({
            uid: user.uid,
            displayName: user.displayName,
            email: user.email,
            photoURL: user.photoURL,
            emailVerified: user.emailVerified,
            isAnonymous: user.isAnonymous,
            idToken,
          })
        })
      } else {
        setUser(null)
      }
    })
  }, [setUser])

  return <>{children}</>
}
