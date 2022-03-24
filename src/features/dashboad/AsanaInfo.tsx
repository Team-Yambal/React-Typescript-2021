import { x } from '@xstyled/styled-components'
import React from 'react'
import { useHistory } from 'react-router'
import {
  useLazyGetAuthCodeURLQuery,
  useLazyGetAsanaUserQuery as useLazyGetAsanaUserQuery,
} from '../../app/store/queries/asanaQueties'
import { useFirebaseAuth } from '../firebase/hooks/useFirebaseAuth'

export const AsanaInfo = () => {
  const { localUser } = useFirebaseAuth()
  const [getAuthCodeUrl, authCodeUrl] = useLazyGetAuthCodeURLQuery()
  const [getAsanaUser, asanaUser] = useLazyGetAsanaUserQuery()
  const history = useHistory()

  React.useEffect(() => {
    if (localUser && localUser.uid && localUser.idToken) {
      getAuthCodeUrl({ uid: localUser.uid })
      getAsanaUser({ uid: localUser.uid, idToken: localUser.idToken })
    }
  }, [localUser])

  /*
  const isAsanaAuthed = React.useMemo(() => {
    return !!asanaUser && !!asanaUser.data?.gid
  }, [asanaUser])
  */

  const hendlerWorkspaceClick = React.useCallback(
    (e: React.MouseEvent<HTMLDivElement>) => {
      const gid = e.currentTarget.dataset.gid
      console.log(gid)
      history.push(`/${gid}`)
    },
    []
  )

  return (
    <x.div>
      {asanaUser.isSuccess && (
        <>
          {authCodeUrl.data?.authorizationCodeURL && (
            <x.a href={authCodeUrl.data.authorizationCodeURL}>
              AsanaAcountLink
            </x.a>
          )}
          <x.div>{JSON.stringify(asanaUser.data, null, 2)}</x.div>
          {asanaUser.data.workspaces?.map(workspace => {
            return (
              <x.div
                key={workspace.gid}
                onClick={hendlerWorkspaceClick}
                data-gid={workspace.gid}
                cursor="pointer"
              >
                {workspace.name} : {workspace.gid}
                <pre>{JSON.stringify(workspace)}</pre>
              </x.div>
            )
          })}
        </>
      )}
      hello
    </x.div>
  )
}
