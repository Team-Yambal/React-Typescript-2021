import React from 'react'
import { useGetWeatherQuery } from '../../app/store/queries/weatherQueries'
import { Weather } from './Weather'

export default function WeatherContainer() {
  const { data, error, isLoading, refetch } = useGetWeatherQuery(
    {
      latitude: 35.6785,
      longitude: 139.6823,
    },
    {
      pollingInterval: 5000,
    }
  )

  return (
    <div>
      <button type="button" onClick={refetch}>
        reFetch
      </button>
      <div>{isLoading ? 'loading' : 'loaded'}</div>
      <pre>{JSON.stringify(error, null, 2)}</pre>
      <Weather weather={data} />
    </div>
  )
}
