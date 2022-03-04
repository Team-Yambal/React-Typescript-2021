import React from 'react'
import { Weather as WeatherModel } from '../../app/models/Weather'

export type WeatherProps = {
  weather?: WeatherModel
}

export const Weather = ({ weather }: WeatherProps) => {
  return (
    <div>
      <pre>{JSON.stringify(weather, null, 2)}</pre>
    </div>
  )
}
