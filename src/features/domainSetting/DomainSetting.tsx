import React from 'react'
import { useForm } from 'react-hook-form'
import {
  useGetDomainSettingQuery,
  useUpdateDomainSettingMutation,
} from '../../app/store/queries/firebaseQueries'
import { useFirebaseAuth } from '../firebase/hooks/useFirebaseAuth'
import { SignOut } from '../firebase/SignInSiginOut'

export const DomainSetting = () => {
  const { localUser } = useFirebaseAuth()
  const [updateDomainSetting, updateResult] = useUpdateDomainSettingMutation()
  // const [getDomainSetting] = useLazyGetDomainSettingQuery()

  const domain = React.useMemo(() => {
    if (localUser && localUser.email) {
      return localUser.email.split('@')[1]
    }
    return null
  }, [localUser])

  const { data: domainSetting, refetch } = useGetDomainSettingQuery({ domain })

  const { register, handleSubmit } = useForm({
    mode: 'onSubmit',
    defaultValues: {
      domain,
      sheetId: domainSetting?.spreadsheet.id,
    },
  })

  type formData = {
    domain?: string | null
    sheetId?: string
  }

  const onSubmit = (data: formData) => {
    if (data.domain && data.sheetId) {
      updateDomainSetting({
        domain: data.domain,
        sheetId: data.sheetId,
      }).then(() => {
        refetch()
      })
    }
  }

  return (
    <>
      <form onSubmit={handleSubmit(onSubmit)}>
        <input type="text" {...register('domain')} readOnly />
        <input type="text" {...register('sheetId')} />
        <button type="submit">Set</button>
      </form>
      <pre>{JSON.stringify(updateResult.data)}</pre>
      <SignOut />
    </>
  )
}
