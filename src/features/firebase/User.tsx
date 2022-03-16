import React from 'react'
import { useGetDomainSettingQuery } from '../../app/store/queries/firebaseQueries'
import { useFirebaseAuth } from './hooks/useFirebaseAuth'
import { SignOut } from './SignInSiginOut'

export const User = () => {
  const { user } = useFirebaseAuth()

  const domain = React.useMemo(() => {
    if (user?.email) {
      return user?.email?.split('@')[1]
    }
    return null
  }, [user])

  const { data } = useGetDomainSettingQuery({
    domain,
  })

  return (
    <>
      {user?.photoURL && <img src={user?.photoURL} />}
      <SignOut />
      <pre>{JSON.stringify(user, null, 2)}</pre>
      <pre>{JSON.stringify(data)}</pre>
    </>
  )
}
