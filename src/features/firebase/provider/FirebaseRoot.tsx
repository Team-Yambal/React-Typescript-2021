import React from 'react'
import { RecoilRoot } from 'recoil'
import { FirebaseAuthListener } from './FirebaseAuthListener'

type FirebaseAuthenticationRootProps = {
  children: React.ReactNode
}

export const FirebaseRoot = ({ children }: FirebaseAuthenticationRootProps) => {
  return (
    <RecoilRoot>
      <FirebaseAuthListener>{children}</FirebaseAuthListener>
    </RecoilRoot>
  )
}
