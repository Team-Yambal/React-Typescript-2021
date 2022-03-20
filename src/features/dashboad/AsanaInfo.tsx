import { x } from '@xstyled/styled-components'
import React from 'react'
import {
  useLazyGetAuthCodeURLQuery,
  useLazyGetUserQuery as useLazyGetAsanaUserQuery,
} from '../../app/store/queries/asanaQueties'
import { useFirebaseAuth } from '../firebase/hooks/useFirebaseAuth'

export const AsanaInfo = () => {
  const { localUser } = useFirebaseAuth()
  const [getAuthCodeUrl, authCodeUrl] = useLazyGetAuthCodeURLQuery()
  const [getAsanaUser, asanaUser] = useLazyGetAsanaUserQuery()

  React.useEffect(() => {
    if (localUser && localUser.uid) {
      getAuthCodeUrl({ state: localUser.uid })
      getAsanaUser({ uid: localUser.uid, idToken: localUser.idToken })
    }
  }, [localUser])

  const isAsanaAuthed = React.useMemo(() => {
    return !!asanaUser && !!asanaUser.data?.gid
  }, [asanaUser])

  return (
    <x.div>
      {asanaUser.isSuccess && (
        <>
          {!isAsanaAuthed && authCodeUrl.data?.authorizationCodeURL && (
            <x.a href={authCodeUrl.data.authorizationCodeURL}>
              AsanaAcountLink
            </x.a>
          )}
          <pre>{JSON.stringify(asanaUser.data, null, 2)}</pre>
        </>
      )}
    </x.div>
  )
}
