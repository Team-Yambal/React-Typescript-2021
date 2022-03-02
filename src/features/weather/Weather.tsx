import React from 'react'
import { Weather } from '../../app/models/Weather'

export type WeatherProps = {
  weather?: Weather
}

export const WeatherComponent = ({ weather }: WeatherProps) => {
  return (
    <div>
      <pre>{JSON.stringify(weather, null, 2)}</pre>
    </div>
  )
}
