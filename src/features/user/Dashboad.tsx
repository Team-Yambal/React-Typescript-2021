import { x } from '@xstyled/styled-components'
import React from 'react'
import { useGetDomainSettingQuery } from '../../app/store/queries/firebaseQueries'
import { useFirebaseAuth } from '../firebase/hooks/useFirebaseAuth'
import { SheetSummary } from './SheetSummary'

export const Dashboad = () => {
  const { localUser } = useFirebaseAuth()
  const domain = React.useMemo(() => {
    if (localUser?.email) {
      return localUser?.email?.split('@')[1]
    }
    return null
  }, [localUser])
  const domainSetting = useGetDomainSettingQuery({ domain })
  return (
    <x.div>
      <SheetSummary
        checked={domainSetting.data?.spreadsheet.status === 'checked'}
        summary={domainSetting.data?.spreadsheet.summary}
      />
    </x.div>
  )
}
