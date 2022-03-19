import { x } from '@xstyled/styled-components'
import React from 'react'
import { useLazyGetAuthCodeURLQuery } from '../../app/store/queries/asanaQueties'
import { useLazyGetUserQuery } from '../../app/store/queries/dbUserQueries'
import { useFirebaseAuth } from '../firebase/hooks/useFirebaseAuth'

export const AsanaAcountLink = () => {
  const { localUser } = useFirebaseAuth()
  const [getAuthCodeUrl, authCodeUrl] = useLazyGetAuthCodeURLQuery()
  const [getDBUser, dbUser] = useLazyGetUserQuery()

  React.useEffect(() => {
    if (localUser && localUser.uid) {
      getDBUser({ localUser: localUser })
      getAuthCodeUrl({ state: localUser.uid })
    }
  }, [localUser])

  return (
    <x.div>
      <pre>{JSON.stringify(dbUser.data, null, 2)}</pre>
      {authCodeUrl.data?.authorizationCodeURL && (
        <x.a href={authCodeUrl.data.authorizationCodeURL}>AsanaAcountLink</x.a>
      )}
    </x.div>
  )
}
