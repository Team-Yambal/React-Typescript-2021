/* eslint-disable */
// prettier-ignore
import type { AspidaClient } from 'aspida'
// prettier-ignore
import { dataToURLString } from 'aspida'
// prettier-ignore
import type { Methods as Methods0 } from './api/domainSetting'

// prettier-ignore
const api = <T>({ baseURL, fetch }: AspidaClient<T>) => {
  const prefix = (baseURL === undefined ? 'https://us-central1-myproject-eee15.cloudfunctions.net' : baseURL).replace(/\/$/, '')
  const PATH0 = '/api/domainSetting'
  const GET = 'GET'

  return {
    api: {
      domainSetting: {
        get: (option: { query: Methods0['get']['query'], config?: T }) =>
          fetch<Methods0['get']['resBody']>(prefix, PATH0, GET, option).json(),
        $get: (option: { query: Methods0['get']['query'], config?: T }) =>
          fetch<Methods0['get']['resBody']>(prefix, PATH0, GET, option).json().then(r => r.body),
        $path: (option?: { method?: 'get'; query: Methods0['get']['query'] }) =>
          `${prefix}${PATH0}${option && option.query ? `?${dataToURLString(option.query)}` : ''}`
      }
    }
  }
}

// prettier-ignore
export type ApiInstance = ReturnType<typeof api>
// prettier-ignore
export default api
