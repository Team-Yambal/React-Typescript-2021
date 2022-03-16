import { createApi, fakeBaseQuery } from '@reduxjs/toolkit/query/react'

import api from '../../../api/firebase/$api'
import aspida from '@aspida/axios'
import { DomainSetting } from '../../models/DomainSetting'

type GetDomainSettingProps = {
  domain: string
}

const firebaseApiAxiosClient = api(aspida())

export const firebaseQueries = createApi({
  reducerPath: 'firebaseApi',
  baseQuery: fakeBaseQuery(),
  endpoints: builder => ({
    getDomainSetting: builder.query<DomainSetting, GetDomainSettingProps>({
      queryFn: async (a: GetDomainSettingProps) => {
        const domainSetting =
          await firebaseApiAxiosClient.api.domainSetting.$get({
            query: {
              domain: a.domain,
            },
          })
        return {
          data: domainSetting,
        }
      },
    }),
  }),
})

export const {
  useGetDomainSettingQuery,
  useLazyGetDomainSettingQuery,
  usePrefetch,
} = firebaseQueries
