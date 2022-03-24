import { createApi, fakeBaseQuery } from '@reduxjs/toolkit/query/react'

import api from '../../../api/firebase/$api'
import aspida from '@aspida/axios'
import { AsanaAuthorizationCodeURL } from '../../models/asana/authorizationCodeURL'
import { AsanaUser } from '../../models/asana/user'
import { AsanaWorkspace } from '../../models/asana/workspace'
import { AsanaTeam } from '../../models/asana/team'
import { AsanaPortfolio } from '../../models/asana/portfolio'

// eslint-disable-next-line @typescript-eslint/ban-types
type getAuthCodeURLProps = { uid?: string }
type AsanaUserProps = {
  uid: string
  idToken: string
}
type AsanaWorkspaceProps = {
  uid: string
  workspaceGid: string
  idToken: string
}
type GetTeamsInAOrgProps = {
  uid: string
  workspaceGid: string
  idToken: string
}

type GetTeamsForUserProps = {
  uid: string
  userGid: string
  workspaceGid: string
  idToken: string
}

type GetOwnedPortfolios = {
  uid: string
  workspaceGid: string
  idToken: string
}

const asanaApiAxiosClient = api(aspida())

export const asanaQueries = createApi({
  reducerPath: 'asanaApi',
  baseQuery: fakeBaseQuery(),
  endpoints: builder => ({
    getAuthCodeURL: builder.query<
      AsanaAuthorizationCodeURL,
      getAuthCodeURLProps
    >({
      queryFn: async (a: getAuthCodeURLProps) => {
        if (!a.uid) {
          return {
            data: { authorizationCodeURL: '' },
          }
        }
        const response =
          await asanaApiAxiosClient.api.asana.autorizationCodeUrl.$get({
            query: {
              uid: a.uid,
            },
          })
        return {
          data: response,
        }
      },
    }),
    getAsanaUser: builder.query<AsanaUser, AsanaUserProps>({
      queryFn: async (a: AsanaUserProps) => {
        const header = {
          Authorization: `Bearer ${a.idToken}`,
        }
        const response = await asanaApiAxiosClient.api.asana.me.$post({
          body: {
            uid: a.uid,
          },
          headers: header,
        })
        return {
          data: response,
        }
      },
    }),
    getWorkspace: builder.query<AsanaWorkspace, AsanaWorkspaceProps>({
      queryFn: async (a: AsanaWorkspaceProps) => {
        const header = {
          Authorization: `Bearer ${a.idToken}`,
        }
        const response = await asanaApiAxiosClient.api.asana.workspace.$post({
          body: {
            uid: a.uid,
            gid: a.workspaceGid,
          },
          headers: header,
        })
        return {
          data: response,
        }
      },
    }),
    getTeamsInAOrg: builder.query<AsanaTeam[], GetTeamsInAOrgProps>({
      queryFn: async (a: GetTeamsInAOrgProps) => {
        const header = {
          Authorization: `Bearer ${a.idToken}`,
        }
        const response = await asanaApiAxiosClient.api.asana.getTeamInOrg.$post(
          {
            body: {
              uid: a.uid,
              workspaceGid: a.workspaceGid,
            },
            headers: header,
          }
        )
        return {
          data: response,
        }
      },
    }),
    getTeamsForUser: builder.query<AsanaTeam[], GetTeamsForUserProps>({
      queryFn: async (a: GetTeamsForUserProps) => {
        const header = {
          Authorization: `Bearer ${a.idToken}`,
        }
        const response =
          await asanaApiAxiosClient.api.asana.getTeamsForUser.$post({
            body: {
              uid: a.uid,
              userGid: a.userGid,
              orgGid: a.workspaceGid,
            },
            headers: header,
          })
        return {
          data: response,
        }
      },
    }),
    getOwnedPortfolios: builder.query<AsanaPortfolio[], GetOwnedPortfolios>({
      queryFn: async (a: GetTeamsForUserProps) => {
        const header = {
          Authorization: `Bearer ${a.idToken}`,
        }
        const response =
          await asanaApiAxiosClient.api.asana.getOwnedPortfolios.$post({
            body: {
              uid: a.uid,
              workspaceGid: a.workspaceGid,
            },
            headers: header,
          })
        return {
          data: response,
        }
      },
    }),
  }),
})

export const {
  useGetAuthCodeURLQuery,
  useLazyGetAuthCodeURLQuery,
  useGetAsanaUserQuery,
  useLazyGetAsanaUserQuery,
  useGetWorkspaceQuery,
  useLazyGetWorkspaceQuery,
  useGetTeamsInAOrgQuery,
  useLazyGetTeamsInAOrgQuery,
  useGetTeamsForUserQuery,
  useLazyGetTeamsForUserQuery,
  useGetOwnedPortfoliosQuery,
  useLazyGetOwnedPortfoliosQuery,
} = asanaQueries
