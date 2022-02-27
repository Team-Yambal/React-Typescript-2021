import React from 'react'
import { useGetWeatherQuery } from './weatherApi'

export default function WeatherContainer() {
  const { data, error, isLoading, isFetching, requestId, refetch } =
    useGetWeatherQuery(
      {
        latitude: 35.6785,
        longitude: 139.6823,
      },
      {
        pollingInterval: 5000,
      }
    )

  const {
    data: data2,
    isFetching: isFetching2,
    requestId: requestId2,
  } = useGetWeatherQuery(
    {
      latitude: 35.6785,
      longitude: 150.6823,
    },
    {
      pollingInterval: 11000,
    }
  )

  return (
    <div>
      <button type="button" onClick={refetch}>
        reFetch
      </button>
      <div>{isLoading ? 'loading' : 'loaded'}</div>
      <pre>{JSON.stringify(error, null, 2)}</pre>
      <pre>
        {data?.daily.temperature_2m_max[0]}:
        {isFetching ? 'fetching' : 'fetched'}({requestId})
      </pre>
      <pre>
        {data2?.daily.temperature_2m_max[0]}:{' '}
        {isFetching2 ? 'fetching' : 'fetched'}({requestId2})
      </pre>
    </div>
  )
}