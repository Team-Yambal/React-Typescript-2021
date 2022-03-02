import React from 'react'
import { useGetNewsQuery } from '../../app/queries/newsQueries'

export default function NewsContainer() {
  const { data } = useGetNewsQuery({
    category: 'technology',
    apiKey: process.env.NEWSAPI_API_KEY,
  })

  return (
    <div>
      <pre>{JSON.stringify(data, null, 2)}</pre>
    </div>
  )
}
