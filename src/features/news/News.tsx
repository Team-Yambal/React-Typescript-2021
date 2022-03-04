import React from 'react'
import { News as NewsModel } from '../../app/models/News'

export type NewsProps = {
  news?: NewsModel
}

export const Weather = ({ news }: NewsProps) => {
  return (
    <div>
      <pre>{JSON.stringify(news, null, 2)}</pre>
    </div>
  )
}
