import React, { useMemo } from 'react'
import { Weather as WeatherModel } from '../../../app/models/Weather'
import { x } from '@xstyled/styled-components'

export type WeatherProps = {
  weather?: WeatherModel
}

export const Weather = ({ weather }: WeatherProps) => {
  const WIDTH = 400
  const HEIGHT = 200
  const LEFT_MARGIN = 50
  const RIGHT_MARGIN = 50
  const BOTTOM_MARGIN = 20
  const TEMP_MAX = 40
  const TEMP_MIN = -10
  const PRECIOITATION_MAX = 150

  const daily: WeatherModel['daily'] = useMemo(() => {
    if (weather) {
      return weather.daily
    }
    return {
      temperature_2m_max: [],
      precipitation_hours: [],
      time: [],
      weathercode: [],
      temperature_2m_min: [],
    }
  }, [weather])

  const unit = useMemo(() => {
    if (weather) {
      return weather.daily_units
    }
    return {
      temperature_2m_min: '',
      precipitation_hours: '',
      time: '',
      weathercode: '',
      temperature_2m_max: '',
    }
  }, [weather])

  const dateLabels = useMemo(() => {
    if (weather) {
      return weather.daily.time.map(time => {
        const d = new Date(time)
        return `${d.getMonth() + 1}/${d.getDate()}`
      })
      return []
    }
    return []
  }, [daily])

  const wStep = useMemo(() => {
    return (WIDTH - LEFT_MARGIN - RIGHT_MARGIN) / (daily.time.length - 1)
  }, [daily])

  const hStep = useMemo(() => {
    return (HEIGHT - BOTTOM_MARGIN) / (TEMP_MAX - TEMP_MIN)
  }, [daily])

  const temperature2mMaxPoints = useMemo(() => {
    const a = daily.temperature_2m_max.map((max, index) => {
      return `${index * wStep + LEFT_MARGIN}, ${
        HEIGHT - BOTTOM_MARGIN - hStep * (max - TEMP_MIN)
      }`
    })
    return a.join(' ')
  }, [daily.temperature_2m_max])

  const temperature2mMinPoints = useMemo(() => {
    const a = daily.temperature_2m_min.map((min, index) => {
      return `${index * wStep + LEFT_MARGIN}, ${
        HEIGHT - BOTTOM_MARGIN - hStep * (min - TEMP_MIN)
      }`
    })
    return a.join(' ')
  }, [daily.temperature_2m_min])

  const precipitationHours = useMemo(() => {
    const phStep = HEIGHT / PRECIOITATION_MAX
    const a = daily.precipitation_hours.map((value, index) => {
      return `${index * wStep + LEFT_MARGIN}, ${
        HEIGHT - BOTTOM_MARGIN - value * phStep
      }`
    })
    return a.join(' ')
  }, [daily.temperature_2m_min])

  return (
    <x.div>
      <x.svg w={`${WIDTH}px`} height={`${HEIGHT}px`}>
        <x.g>
          <x.line
            x1={LEFT_MARGIN}
            y1={HEIGHT - hStep * (0 - TEMP_MIN)}
            x2={WIDTH - RIGHT_MARGIN}
            y2={HEIGHT - hStep * (0 - TEMP_MIN)}
            fill="none"
            stroke="grayLighten"
          />
          <x.line
            x1={LEFT_MARGIN}
            y1={HEIGHT - BOTTOM_MARGIN}
            x2={WIDTH - RIGHT_MARGIN}
            y2={HEIGHT - BOTTOM_MARGIN}
            fill="none"
            stroke="grayLighten"
          />
          <x.text x="0" y={HEIGHT / 2} font-size="10px" textAnchor="start">
            {unit.temperature_2m_max}
          </x.text>
          <x.text x={WIDTH} y={HEIGHT / 2} font-size="10px" textAnchor="end">
            {unit.precipitation_hours}
          </x.text>
          {dateLabels.map((label, index) => {
            return (
              <x.text
                x={index * wStep + LEFT_MARGIN}
                y={HEIGHT - BOTTOM_MARGIN / 2 + 6}
                key={index}
                textAnchor="middle"
                fontSize="10px"
              >
                {label}
              </x.text>
            )
          })}
        </x.g>
        <x.polyline points={temperature2mMaxPoints} fill="none" stroke="red" />
        <x.polyline
          points={temperature2mMinPoints}
          fill="none"
          stroke="green"
        />
        <x.polyline points={precipitationHours} fill="none" stroke="blue" />
      </x.svg>
    </x.div>
  )
}
