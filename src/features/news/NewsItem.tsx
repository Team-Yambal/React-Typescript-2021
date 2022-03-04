import React from 'react'
import { NewsArticle } from '../../app/models/News'

export type NewsItemProps = {
  article: NewsArticle
}

export const NewsItem = ({ article }: NewsItemProps) => {
  const date = new Date(article.publishedAt)
  return (
    <article>
      <h1>{article.title}</h1>
      <p>{article.description}</p>
      <img src={article.urlToImage} />
      <a href={article.url}>{article.url}</a>
      <div>
        {article.author}@{article.source.name}
      </div>
      <div>{date.toString()}</div>
    </article>
  )
}
