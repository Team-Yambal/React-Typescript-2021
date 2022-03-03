export type Weather = {
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
