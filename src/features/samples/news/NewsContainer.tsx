import React from 'react'
import { useGetNewsQuery } from '../../../app/store/queries/newsQueries'
import { NewsItem, Wrapper as NewsItemWrapper } from './NewsItem'
import styled, { x } from '@xstyled/styled-components'

const Wrapper = styled(x.div)`
  ${/* sc-selector */ NewsItemWrapper}:not(:last-child) {
    margin-bottom: 0.5rem;
    padding-bottom: 0.5rem;
    border-bottom-width: 1px;
    border-bottom-style: solid;
  }
`

type NewsContainerProps = typeof x.div.defaultProps

export default function NewsContainer({ ...restProps }: NewsContainerProps) {
  const { data } = useGetNewsQuery({
    category: 'technology',
    apiKey: process.env.NEWSAPI_API_KEY,
  })

  return (
    <Wrapper {...restProps}>
      {data?.articles.map(article => {
        return (
          <NewsItem
            article={article}
            key={article.url}
            borderBottomColor="grayLighten"
          />
        )
      })}
    </Wrapper>
  )
}
