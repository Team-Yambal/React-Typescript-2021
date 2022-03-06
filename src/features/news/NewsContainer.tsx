import React from 'react'
import { useGetNewsQuery } from '../../app/store/queries/newsQueries'
import { NewsItem } from './NewsItem'

export default function NewsContainer() {
  const { data } = useGetNewsQuery({
    category: 'technology',
    apiKey: process.env.NEWSAPI_API_KEY,
  })

  return (
    <div>
      {data?.articles.map(article => {
        return <NewsItem article={article} key={article.url} />
      })}
    </div>
  )
}
