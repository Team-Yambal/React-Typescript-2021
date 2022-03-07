import React from 'react'
import { useGetWeatherQuery } from '../../app/store/queries/weatherQueries'
import { Weather } from './Weather'

export default function WeatherContainer() {
  const { data } = useGetWeatherQuery(
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
      <Weather weather={data} />
    </div>
  )
}
