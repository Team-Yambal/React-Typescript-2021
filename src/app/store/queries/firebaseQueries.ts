import { createApi, fakeBaseQuery } from '@reduxjs/toolkit/query/react'

import api from '../../../api/firebase/$api'
import aspida from '@aspida/axios'
import { DomainSetting } from '../../models/DomainSetting'

type GetDomainSettingProps = {
  domain: string | null
}

type SetDomainSettingProps = {
  domain: string
  sheetId: string
}

const firebaseApiAxiosClient = api(aspida())
const TAG_TYPE = 'domainSetting'

export const firebaseQueries = createApi({
  reducerPath: 'firebaseApi',
  baseQuery: fakeBaseQuery(),
  tagTypes: [TAG_TYPE],
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
      providesTags: (_result, _error, arg) => {
        return [{ type: TAG_TYPE, id: arg.domain || 'dummyDomain' }]
      },
    }),
    updateDomainSetting: builder.mutation<DomainSetting, SetDomainSettingProps>(
      {
        queryFn: async (a: SetDomainSettingProps) => {
          const domainSetting =
            await firebaseApiAxiosClient.api.domainSetting.$post({
              body: {
                domain: a.domain,
                sheetId: a.sheetId,
              },
            })
          return {
            data: domainSetting,
          }
        },
        invalidatesTags: (_result, _error, arg) => {
          return [{ type: TAG_TYPE, id: arg.domain || 'dummyDomain' }]
        },
      }
    ),
  }),
})

export const {
  useGetDomainSettingQuery,
  useLazyGetDomainSettingQuery,
  usePrefetch,
  useUpdateDomainSettingMutation,
} = firebaseQueries
