import { createApi, fakeBaseQuery } from '@reduxjs/toolkit/query/react'

import api from '../../../api/firebase/$api'
import aspida from '@aspida/axios'
import { AsanaAuthorizationCodeURL } from '../../models/AsanaAuthorizationCodeURL'

// eslint-disable-next-line @typescript-eslint/ban-types
type AsanaQueriesProps = { state?: string }

const asanaApiAxiosClient = api(aspida())

export const asanaQueries = createApi({
  reducerPath: 'asanaApi',
  baseQuery: fakeBaseQuery(),
  endpoints: builder => ({
    getAuthCodeURL: builder.query<AsanaAuthorizationCodeURL, AsanaQueriesProps>(
      {
        queryFn: async (a: AsanaQueriesProps) => {
          if (!a.state) {
            return {
              data: { authorizationCodeURL: '' },
            }
          }
          const response =
            await asanaApiAxiosClient.api.getAsanaAuthorizationCodeURL.$get({
              query: {
                state: a.state,
              },
            })
          return {
            data: response,
          }
        },
      }
    ),
  }),
})

export const { useGetAuthCodeURLQuery, useLazyGetAuthCodeURLQuery } =
  asanaQueries
