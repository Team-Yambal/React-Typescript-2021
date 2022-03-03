import { Weather } from '../../../../app/models/Weather'

export type Methods = {
  get: {
    query: {
      latitude: number
      longitude: number
      daily: string
      timezone: string
    }
    resBody: Weather
  }
}
