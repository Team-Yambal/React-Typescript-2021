import { x } from '@xstyled/styled-components'
import React from 'react'
import { useParams } from 'react-router'
import { useLazyGetWorkspaceQuery } from '../../app/store/queries/asanaQueties'
import { useFirebaseAuth } from '../firebase/hooks/useFirebaseAuth'

export const WorkSpace = () => {
  const { workspaceGid } = useParams<{ workspaceGid: string }>()
  const { localUser } = useFirebaseAuth()
  const [getWorkspace, workspace] = useLazyGetWorkspaceQuery()

  React.useEffect(() => {
    if (localUser && localUser.idToken && workspaceGid) {
      getWorkspace({
        uid: localUser.uid,
        idToken: localUser.idToken,
        workspaceGid,
      })
    }
  }, [localUser, workspaceGid])

  return (
    <x.div>
      <x.h2>Workspace:{workspace.data?.name}</x.h2>
      <x.pre>{workspaceGid}</x.pre>
      <x.pre>{JSON.stringify(workspace.data)}</x.pre>
    </x.div>
  )
}
