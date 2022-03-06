import React from 'react'
import { NewsArticle } from '../../app/models/News'
import styled, { x } from '@xstyled/styled-components'

export const Wrapper = styled(x.a)``

export type NewsItemProps = typeof x.a.defaultProps & {
  article: NewsArticle
}

export const NewsItem = ({ article, ...restProps }: NewsItemProps) => {
  const date = new Date(article.publishedAt)
  return (
    <Wrapper
      href={article.url}
      target="_news"
      textDecoration="none"
      color="inherit"
      display="block"
      {...restProps}
    >
      <x.article display="flex">
        <x.div
          w={'100px'}
          h="100px"
          backgroundImage={`url(${article.urlToImage})`}
          backgroundSize="cover"
          backgroundPosition={'center'}
          flexShrink={0}
          borderRadius="4%"
          mr="0.5rem"
        />
        <x.div w="100%" display="flex" flexDirection="column">
          <x.h4>{article.title}</x.h4>
          <x.p h="100%" mt="0">
            {article.description}
          </x.p>
          <x.div fontSize="0.7rem" textAlign="right">
            {article.author} : {date.toString()}
          </x.div>
        </x.div>
      </x.article>
    </Wrapper>
  )
}
