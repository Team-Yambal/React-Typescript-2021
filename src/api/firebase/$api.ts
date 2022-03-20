/* eslint-disable */
// prettier-ignore
import type { AspidaClient } from 'aspida'
// prettier-ignore
import { dataToURLString } from 'aspida'
// prettier-ignore
import type { Methods as Methods0 } from './api/asana/me'
// prettier-ignore
import type { Methods as Methods1 } from './api/domainSetting'
// prettier-ignore
import type { Methods as Methods2 } from './api/getAsanaAuthorizationCodeURL'
// prettier-ignore
import type { Methods as Methods3 } from './api/user'

// prettier-ignore
const api = <T>({ baseURL, fetch }: AspidaClient<T>) => {
  const prefix = (baseURL === undefined ? 'https://us-central1-myproject-eee15.cloudfunctions.net' : baseURL).replace(/\/$/, '')
  const PATH0 = '/api/asana/me'
  const PATH1 = '/api/domainSetting'
  const PATH2 = '/api/getAsanaAuthorizationCodeURL'
  const PATH3 = '/api/user'
  const GET = 'GET'
  const POST = 'POST'

  return {
    api: {
      asana: {
        me: {
          post: (option: { body: Methods0['post']['reqBody'], headers: Methods0['post']['reqHeaders'], config?: T }) =>
            fetch<Methods0['post']['resBody']>(prefix, PATH0, POST, option).json(),
          $post: (option: { body: Methods0['post']['reqBody'], headers: Methods0['post']['reqHeaders'], config?: T }) =>
            fetch<Methods0['post']['resBody']>(prefix, PATH0, POST, option).json().then(r => r.body),
          $path: () => `${prefix}${PATH0}`
        }
      },
      domainSetting: {
        get: (option: { query: Methods1['get']['query'], config?: T }) =>
          fetch<Methods1['get']['resBody']>(prefix, PATH1, GET, option).json(),
        $get: (option: { query: Methods1['get']['query'], config?: T }) =>
          fetch<Methods1['get']['resBody']>(prefix, PATH1, GET, option).json().then(r => r.body),
        post: (option: { body: Methods1['post']['reqBody'], config?: T }) =>
          fetch<Methods1['post']['resBody']>(prefix, PATH1, POST, option).json(),
        $post: (option: { body: Methods1['post']['reqBody'], config?: T }) =>
          fetch<Methods1['post']['resBody']>(prefix, PATH1, POST, option).json().then(r => r.body),
        $path: (option?: { method?: 'get'; query: Methods1['get']['query'] }) =>
          `${prefix}${PATH1}${option && option.query ? `?${dataToURLString(option.query)}` : ''}`
      },
      getAsanaAuthorizationCodeURL: {
        get: (option: { query: Methods2['get']['query'], config?: T }) =>
          fetch<Methods2['get']['resBody']>(prefix, PATH2, GET, option).json(),
        $get: (option: { query: Methods2['get']['query'], config?: T }) =>
          fetch<Methods2['get']['resBody']>(prefix, PATH2, GET, option).json().then(r => r.body),
        $path: (option?: { method?: 'get'; query: Methods2['get']['query'] }) =>
          `${prefix}${PATH2}${option && option.query ? `?${dataToURLString(option.query)}` : ''}`
      },
      user: {
        post: (option: { body: Methods3['post']['reqBody'], headers: Methods3['post']['reqHeaders'], config?: T }) =>
          fetch<Methods3['post']['resBody']>(prefix, PATH3, POST, option).json(),
        $post: (option: { body: Methods3['post']['reqBody'], headers: Methods3['post']['reqHeaders'], config?: T }) =>
          fetch<Methods3['post']['resBody']>(prefix, PATH3, POST, option).json().then(r => r.body),
        $path: () => `${prefix}${PATH3}`
      }
    }
  }
}

// prettier-ignore
export type ApiInstance = ReturnType<typeof api>
// prettier-ignore
export default api
