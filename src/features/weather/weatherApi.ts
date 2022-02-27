import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

const API_OPEN_METEO = 'https://api.open-meteo.com/v1/'

type Weather = {
  generationtime_ms: number
  latitude: number
  utc_offset_seconds: number
  longitude: number
  elevation: number
  daily: {
    temperature_2m_min: number[]
    precipitation_hours: number[]
    time: string[]
    weathercode: number[]
    temperature_2m_max: number[]
  }
  daily_units: {
    temperature_2m_min: string
    precipitation_hours: string
    time: string
    weathercode: string
    temperature_2m_max: string
  }
}

type GetWeatherProps = {
  latitude: number
  longitude: number
}

export const weatherApi = createApi({
  reducerPath: 'weatherApi',
  baseQuery: fetchBaseQuery({ baseUrl: API_OPEN_METEO }),
  endpoints: builder => ({
    getWeather: builder.query<Weather, GetWeatherProps>({
      query: (query: GetWeatherProps) =>
        `forecast?latitude=${query.latitude}&longitude=${query.longitude}&daily=weathercode,temperature_2m_max,temperature_2m_min,precipitation_hours&timezone=Asia%2FTokyo`,
    }),
  }),
})

export const { useGetWeatherQuery } = weatherApi
