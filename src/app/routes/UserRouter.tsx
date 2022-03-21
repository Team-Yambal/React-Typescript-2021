import React from 'react'
import { Switch } from 'react-router'
import { WorkSpace } from '../../features/asana/WorkSpace'
import { Dashboad } from '../../features/dashboad/Dashboad'
import { SuspenseRoute } from './SuspenseRoute'

export const UserRouter = () => {
  return (
    <Switch>
      <SuspenseRoute
        exact={true}
        path="/:workspaceGid"
        fallback={null}
        children={<WorkSpace />}
      />
      <SuspenseRoute
        exact={false}
        path="/"
        fallback={null}
        children={<Dashboad />}
      />
    </Switch>
  )
}
