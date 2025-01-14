/* eslint-disable */
// prettier-ignore
import type { AspidaClient } from 'aspida'
// prettier-ignore
import { dataToURLString } from 'aspida'
// prettier-ignore
import type { Methods as Methods0 } from './api/asana/autorizationCodeUrl'
// prettier-ignore
import type { Methods as Methods1 } from './api/asana/getOwnedPortfolios'
// prettier-ignore
import type { Methods as Methods2 } from './api/asana/getTeamInOrg'
// prettier-ignore
import type { Methods as Methods3 } from './api/asana/getTeamsForUser'
// prettier-ignore
import type { Methods as Methods4 } from './api/asana/me'
// prettier-ignore
import type { Methods as Methods5 } from './api/asana/workspace'
// prettier-ignore
import type { Methods as Methods6 } from './api/domainSetting'
// prettier-ignore
import type { Methods as Methods7 } from './api/user'

// prettier-ignore
const api = <T>({ baseURL, fetch }: AspidaClient<T>) => {
  const prefix = (baseURL === undefined ? 'https://us-central1-myproject-eee15.cloudfunctions.net' : baseURL).replace(/\/$/, '')
  const PATH0 = '/api/asana/autorizationCodeUrl'
  const PATH1 = '/api/asana/getOwnedPortfolios'
  const PATH2 = '/api/asana/getTeamInOrg'
  const PATH3 = '/api/asana/getTeamsForUser'
  const PATH4 = '/api/asana/me'
  const PATH5 = '/api/asana/workspace'
  const PATH6 = '/api/domainSetting'
  const PATH7 = '/api/user'
  const GET = 'GET'
  const POST = 'POST'

  return {
    api: {
      asana: {
        autorizationCodeUrl: {
          get: (option: { query: Methods0['get']['query'], config?: T }) =>
            fetch<Methods0['get']['resBody']>(prefix, PATH0, GET, option).json(),
          $get: (option: { query: Methods0['get']['query'], config?: T }) =>
            fetch<Methods0['get']['resBody']>(prefix, PATH0, GET, option).json().then(r => r.body),
          $path: (option?: { method?: 'get'; query: Methods0['get']['query'] }) =>
            `${prefix}${PATH0}${option && option.query ? `?${dataToURLString(option.query)}` : ''}`
        },
        getOwnedPortfolios: {
          post: (option: { body: Methods1['post']['reqBody'], headers: Methods1['post']['reqHeaders'], config?: T }) =>
            fetch<Methods1['post']['resBody']>(prefix, PATH1, POST, option).json(),
          $post: (option: { body: Methods1['post']['reqBody'], headers: Methods1['post']['reqHeaders'], config?: T }) =>
            fetch<Methods1['post']['resBody']>(prefix, PATH1, POST, option).json().then(r => r.body),
          $path: () => `${prefix}${PATH1}`
        },
        getTeamInOrg: {
          post: (option: { body: Methods2['post']['reqBody'], headers: Methods2['post']['reqHeaders'], config?: T }) =>
            fetch<Methods2['post']['resBody']>(prefix, PATH2, POST, option).json(),
          $post: (option: { body: Methods2['post']['reqBody'], headers: Methods2['post']['reqHeaders'], config?: T }) =>
            fetch<Methods2['post']['resBody']>(prefix, PATH2, POST, option).json().then(r => r.body),
          $path: () => `${prefix}${PATH2}`
        },
        getTeamsForUser: {
          post: (option: { body: Methods3['post']['reqBody'], headers: Methods3['post']['reqHeaders'], config?: T }) =>
            fetch<Methods3['post']['resBody']>(prefix, PATH3, POST, option).json(),
          $post: (option: { body: Methods3['post']['reqBody'], headers: Methods3['post']['reqHeaders'], config?: T }) =>
            fetch<Methods3['post']['resBody']>(prefix, PATH3, POST, option).json().then(r => r.body),
          $path: () => `${prefix}${PATH3}`
        },
        me: {
          post: (option: { body: Methods4['post']['reqBody'], headers: Methods4['post']['reqHeaders'], config?: T }) =>
            fetch<Methods4['post']['resBody']>(prefix, PATH4, POST, option).json(),
          $post: (option: { body: Methods4['post']['reqBody'], headers: Methods4['post']['reqHeaders'], config?: T }) =>
            fetch<Methods4['post']['resBody']>(prefix, PATH4, POST, option).json().then(r => r.body),
          $path: () => `${prefix}${PATH4}`
        },
        workspace: {
          post: (option: { body: Methods5['post']['reqBody'], headers: Methods5['post']['reqHeaders'], config?: T }) =>
            fetch<Methods5['post']['resBody']>(prefix, PATH5, POST, option).json(),
          $post: (option: { body: Methods5['post']['reqBody'], headers: Methods5['post']['reqHeaders'], config?: T }) =>
            fetch<Methods5['post']['resBody']>(prefix, PATH5, POST, option).json().then(r => r.body),
          $path: () => `${prefix}${PATH5}`
        }
      },
      domainSetting: {
        get: (option: { query: Methods6['get']['query'], config?: T }) =>
          fetch<Methods6['get']['resBody']>(prefix, PATH6, GET, option).json(),
        $get: (option: { query: Methods6['get']['query'], config?: T }) =>
          fetch<Methods6['get']['resBody']>(prefix, PATH6, GET, option).json().then(r => r.body),
        post: (option: { body: Methods6['post']['reqBody'], config?: T }) =>
          fetch<Methods6['post']['resBody']>(prefix, PATH6, POST, option).json(),
        $post: (option: { body: Methods6['post']['reqBody'], config?: T }) =>
          fetch<Methods6['post']['resBody']>(prefix, PATH6, POST, option).json().then(r => r.body),
        $path: (option?: { method?: 'get'; query: Methods6['get']['query'] }) =>
          `${prefix}${PATH6}${option && option.query ? `?${dataToURLString(option.query)}` : ''}`
      },
      user: {
        post: (option: { body: Methods7['post']['reqBody'], headers: Methods7['post']['reqHeaders'], config?: T }) =>
          fetch<Methods7['post']['resBody']>(prefix, PATH7, POST, option).json(),
        $post: (option: { body: Methods7['post']['reqBody'], headers: Methods7['post']['reqHeaders'], config?: T }) =>
          fetch<Methods7['post']['resBody']>(prefix, PATH7, POST, option).json().then(r => r.body),
        $path: () => `${prefix}${PATH7}`
      }
    }
  }
}

// prettier-ignore
export type ApiInstance = ReturnType<typeof api>
// prettier-ignore
export default api
