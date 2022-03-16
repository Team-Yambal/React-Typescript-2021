import React, { ReactNode } from 'react'
import { useLazyGetDomainSettingQuery } from '../../app/store/queries/firebaseQueries'
import { useFirebaseAuth } from '../firebase/hooks/useFirebaseAuth'

type AuthProps = {
  anonymouse: ReactNode
  notSetting: ReactNode
  user: ReactNode
}

export const Auth = ({ user, anonymouse, notSetting }: AuthProps) => {
  const { isLogined, localUser } = useFirebaseAuth()
  const [trigger, result] = useLazyGetDomainSettingQuery()

  React.useEffect(() => {
    if (isLogined && localUser?.email) {
      const domain = localUser.email.split('@')[1]
      trigger({
        domain,
      })
    }
  }, [isLogined, localUser])

  if (isLogined) {
    if (result.data?.status == 'ok') {
      return <>{user}</>
    } else if (result.data?.status == 'none') {
      return <>{notSetting}</>
    } else {
      return <>error</>
    }
  } else {
    return <>{anonymouse}</>
  }
}
