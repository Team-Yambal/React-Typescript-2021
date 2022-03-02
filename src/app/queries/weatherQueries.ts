import { createApi, fakeBaseQuery } from '@reduxjs/toolkit/query/react'

import api from '../../api/meteo/$api'
import aspida from '@aspida/axios'
import { Weather } from '../models/Weather'

type GetWeatherProps = {
  latitude: number
  longitude: number
}

const client = api(aspida())

export const weatherQueries = createApi({
  reducerPath: 'weatherApi',
  baseQuery: fakeBaseQuery(),
  endpoints: builder => ({
    getWeather: builder.query<Weather, GetWeatherProps>({
      queryFn: async () => {
        const weather = await client.v1.forecast.$get({
          query: {
            latitude: 35,
            longitude: 135,
            daily:
              'weathercode,temperature_2m_max,temperature_2m_min,precipitation_hours',
            timezone: 'Asia/Tokyo',
          },
        })
        return {
          data: weather,
        }
      },
    }),
  }),
})

export const { useGetWeatherQuery } = weatherQueries
