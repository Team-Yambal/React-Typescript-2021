import { x } from '@xstyled/styled-components'
import React from 'react'
import { useForm } from 'react-hook-form'
import { Button } from '../../../atmicComponents/Button'

export const SampleForm = () => {
  const { register, handleSubmit } = useForm({
    mode: 'onSubmit',
    defaultValues: {
      text: 'text',
    },
  })
  const [formData, setFormData] = React.useState({})

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const onSubmit = (data: any) => {
    setFormData(data)
  }

  return (
    <>
      <x.form onSubmit={handleSubmit(onSubmit)}>
        <x.input {...register('text')}></x.input>
        <Button type="submit">Submit</Button>
      </x.form>
      <pre>{JSON.stringify(formData, null, 2)}</pre>
    </>
  )
}
