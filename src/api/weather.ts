import axios from 'axios'
import { WeatherForecastGetResult } from '../models/weather'

export const fetchWeather = async () => {
  const result = await handleGetRequest<WeatherForecastGetResult>(
    'https://www.jma.go.jp/bosai/forecast/data/forecast/140000.json'
  )
  if (typeof result !== 'undefined') {
    const weathers = result[0].timeSeries?.[0].areas?.[0].weathers!
    return [
      ...weathers,
      // TODO: ヌルポしそうだから要改善
      result[1].tempAverage?.areas?.[0].max!,
      result[1].tempAverage?.areas?.[0].min!,
    ]
  }
}

const handleGetRequest = async <T>(url: string): Promise<T | undefined> => {
  try {
    const res = await axios.get(url)
    return res.data as T
  } catch (error) {
    console.error(error)
    return
  }
}
