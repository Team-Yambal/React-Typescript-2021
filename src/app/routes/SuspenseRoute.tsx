import React from 'react'
import { Route } from 'react-router-dom'

/**
 * https://ja.reactjs.org/docs/concurrent-mode-suspense.html
 */

type SuspenseRouteProps = React.ComponentProps<typeof Route> &
  React.SuspenseProps

export const SuspenseRoute: React.FC<SuspenseRouteProps> = ({
  children,
  fallback,
  ...routeProps
}) => {
  const suspenseProps: React.SuspenseProps = { children, fallback }

  return (
    <Route {...routeProps}>
      <React.Suspense {...suspenseProps} />
    </Route>
  )
}
