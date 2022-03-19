import React from 'react'
import { Switch } from 'react-router'
import { SuspenseRoute } from '../../app/routes/SuspenseRoute'
import { DomainSetting } from '../domainSetting/DomainSetting'
import { Dashboad } from './Dashboad'

export const UserRouter = () => {
  return (
    <Switch>
      <SuspenseRoute
        exact={true}
        path="/"
        fallback={null}
        children={<Dashboad />}
      />
      <SuspenseRoute
        exact={true}
        path="/domain"
        fallback={null}
        children={<DomainSetting />}
      />
    </Switch>
  )
}
