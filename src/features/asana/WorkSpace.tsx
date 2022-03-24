import { x } from '@xstyled/styled-components'
import React from 'react'
import { useParams } from 'react-router'
import {
  useLazyGetAsanaUserQuery,
  useLazyGetOwnedPortfoliosQuery,
  useLazyGetTeamsForUserQuery,
  useLazyGetWorkspaceQuery,
} from '../../app/store/queries/asanaQueties'
import { useFirebaseAuth } from '../firebase/hooks/useFirebaseAuth'

export const WorkSpace = () => {
  const { workspaceGid } = useParams<{ workspaceGid: string }>()
  const { localUser } = useFirebaseAuth()
  const [getAsanaUser, asanaUser] = useLazyGetAsanaUserQuery()
  const [getWorkspace, workspace] = useLazyGetWorkspaceQuery()
  const [getTeamsForUser, usersTeams] = useLazyGetTeamsForUserQuery()
  const [getOwnedPoerfolio, portfolios] = useLazyGetOwnedPortfoliosQuery()

  React.useEffect(() => {
    if (localUser && localUser.idToken && workspaceGid) {
      getAsanaUser({
        uid: localUser.uid,
        idToken: localUser.idToken,
      })
      getWorkspace({
        uid: localUser.uid,
        idToken: localUser.idToken,
        workspaceGid,
      })
      getOwnedPoerfolio({
        uid: localUser.uid,
        idToken: localUser.idToken,
        workspaceGid,
      })
    }
  }, [localUser, workspaceGid])

  React.useEffect(() => {
    if (
      localUser &&
      localUser.idToken &&
      workspaceGid &&
      asanaUser &&
      asanaUser.data?.gid
    ) {
      getTeamsForUser({
        uid: localUser.uid,
        idToken: localUser.idToken,
        workspaceGid,
        userGid: asanaUser.data?.gid,
      })
    }
  }, [localUser, workspaceGid, asanaUser])

  return (
    <x.div>
      <x.h2>
        Workspace:{asanaUser.data?.name} {workspace.data?.name}
      </x.h2>
      {usersTeams.data?.map(team => {
        return (
          <x.div key={team.gid}>
            {team.name} : {team.gid}
          </x.div>
        )
      })}
      <hr />
      {portfolios.data?.map(portfolios => {
        return (
          <x.div key={portfolios.gid}>
            {portfolios.name} : {portfolios.gid}
          </x.div>
        )
      })}
    </x.div>
  )
}
