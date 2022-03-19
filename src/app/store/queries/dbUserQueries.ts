import { createApi, fakeBaseQuery } from '@reduxjs/toolkit/query/react'

import api from '../../../api/firebase/$api'
import aspida from '@aspida/axios'
import { DBUser } from '../../models/DBUser'
import { UserState } from '../../../features/firebase/store/atoms'

type dbUserQueriesProps = {
  localUser: UserState
}

const dbUserClient = api(aspida())

export const dbUserQueries = createApi({
  reducerPath: 'dbUser',
  baseQuery: fakeBaseQuery(),
  endpoints: builder => ({
    getUser: builder.query<DBUser, dbUserQueriesProps>({
      queryFn: async (a: dbUserQueriesProps) => {
        const header = {
          Authorization: `Bearer ${a.localUser.idToken}`,
        }
        const news = await dbUserClient.api.user.$post({
          body: {
            uid: a.localUser.uid,
          },
          headers: header,
        })
        return {
          data: news,
        }
      },
    }),
  }),
})

export const { useGetUserQuery, useLazyGetUserQuery } = dbUserQueries
