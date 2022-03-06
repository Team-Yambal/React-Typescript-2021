import { createApi, fakeBaseQuery } from '@reduxjs/toolkit/query/react'

import api from '../../../api/newsapi/$api'
import aspida from '@aspida/axios'
import { News } from '../../models/News'

type NewsQueriesProps = {
  category: string
  apiKey?: string
}

const newsapiAxiosClient = api(aspida())

export const newsQueries = createApi({
  reducerPath: 'newsApi',
  baseQuery: fakeBaseQuery(),
  endpoints: builder => ({
    getNews: builder.query<News, NewsQueriesProps>({
      queryFn: async (a: NewsQueriesProps) => {
        if (!a.apiKey) {
          const errorNews: News = {
            status: 'apiKey not set',
            totalResults: 0,
            articles: [],
          }
          return {
            data: errorNews,
          }
        }
        const news = await newsapiAxiosClient.v2.top_headlines.$get({
          query: {
            category: a.category,
            apiKey: a.apiKey,
            country: 'jp',
          },
        })
        return {
          data: news,
        }
      },
    }),
  }),
})

export const { useGetNewsQuery } = newsQueries
