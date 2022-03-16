import React from 'react'
import { useForm } from 'react-hook-form'
import {
  useLazyGetDomainSettingQuery,
  useUpdateDomainSettingMutation,
} from '../../app/store/queries/firebaseQueries'
import { useFirebaseAuth } from '../firebase/hooks/useFirebaseAuth'
import { SignOut } from '../firebase/SignInSiginOut'

export const DomainSetting = () => {
  const { localUser } = useFirebaseAuth()
  const [updateDomainSetting, setResult] = useUpdateDomainSettingMutation()
  const [getDomainSetting] = useLazyGetDomainSettingQuery()

  const domain = React.useMemo(() => {
    if (localUser?.email) {
      return localUser?.email?.split('@')[1]
    }
    return null
  }, [localUser])

  const { register, handleSubmit } = useForm({
    mode: 'onSubmit',
    defaultValues: {
      domain,
      sheetId: '',
    },
  })

  type formData = {
    domain: string
    sheetId: string
  }

  const onSubmit = (data: formData) => {
    updateDomainSetting({
      domain: data.domain,
      sheetId: data.sheetId,
    }).then(() => {
      getDomainSetting({
        domain: data.domain,
      })
    })
  }

  return (
    <>
      <form onSubmit={handleSubmit(onSubmit)}>
        <input type="text" {...register('domain')} readOnly />
        <input type="text" {...register('sheetId')} />
        <button type="submit">Set</button>
      </form>
      <pre>{JSON.stringify(setResult.data)}</pre>
      <SignOut />
    </>
  )
}
