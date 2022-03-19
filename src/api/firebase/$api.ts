/* eslint-disable */
// prettier-ignore
import type { AspidaClient } from 'aspida'
// prettier-ignore
import { dataToURLString } from 'aspida'
// prettier-ignore
import type { Methods as Methods0 } from './api/domainSetting'
// prettier-ignore
import type { Methods as Methods1 } from './api/getAsanaAuthorizationCodeURL'
// prettier-ignore
import type { Methods as Methods2 } from './api/user'

// prettier-ignore
const api = <T>({ baseURL, fetch }: AspidaClient<T>) => {
  const prefix = (baseURL === undefined ? 'https://us-central1-myproject-eee15.cloudfunctions.net' : baseURL).replace(/\/$/, '')
  const PATH0 = '/api/domainSetting'
  const PATH1 = '/api/getAsanaAuthorizationCodeURL'
  const PATH2 = '/api/user'
  const GET = 'GET'
  const POST = 'POST'

  return {
    api: {
      domainSetting: {
        get: (option: { query: Methods0['get']['query'], config?: T }) =>
          fetch<Methods0['get']['resBody']>(prefix, PATH0, GET, option).json(),
        $get: (option: { query: Methods0['get']['query'], config?: T }) =>
          fetch<Methods0['get']['resBody']>(prefix, PATH0, GET, option).json().then(r => r.body),
        post: (option: { body: Methods0['post']['reqBody'], config?: T }) =>
          fetch<Methods0['post']['resBody']>(prefix, PATH0, POST, option).json(),
        $post: (option: { body: Methods0['post']['reqBody'], config?: T }) =>
          fetch<Methods0['post']['resBody']>(prefix, PATH0, POST, option).json().then(r => r.body),
        $path: (option?: { method?: 'get'; query: Methods0['get']['query'] }) =>
          `${prefix}${PATH0}${option && option.query ? `?${dataToURLString(option.query)}` : ''}`
      },
      getAsanaAuthorizationCodeURL: {
        get: (option: { query: Methods1['get']['query'], config?: T }) =>
          fetch<Methods1['get']['resBody']>(prefix, PATH1, GET, option).json(),
        $get: (option: { query: Methods1['get']['query'], config?: T }) =>
          fetch<Methods1['get']['resBody']>(prefix, PATH1, GET, option).json().then(r => r.body),
        $path: (option?: { method?: 'get'; query: Methods1['get']['query'] }) =>
          `${prefix}${PATH1}${option && option.query ? `?${dataToURLString(option.query)}` : ''}`
      },
      user: {
        post: (option: { body: Methods2['post']['reqBody'], headers: Methods2['post']['reqHeaders'], config?: T }) =>
          fetch<Methods2['post']['resBody']>(prefix, PATH2, POST, option).json(),
        $post: (option: { body: Methods2['post']['reqBody'], headers: Methods2['post']['reqHeaders'], config?: T }) =>
          fetch<Methods2['post']['resBody']>(prefix, PATH2, POST, option).json().then(r => r.body),
        $path: () => `${prefix}${PATH2}`
      }
    }
  }
}

// prettier-ignore
export type ApiInstance = ReturnType<typeof api>
// prettier-ignore
export default api
