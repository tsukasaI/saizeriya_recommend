import { useState, useEffect } from 'react'
import { fetchWeather } from '../../infrastructure/weatherApi'

export const useWeather = () => {
  const [data, setData] = useState<string[]>()
  useEffect(() => {
    fetchWeather().then((e) => {
      if (e && typeof e[0] !== 'undefined') {
        setData(e)
      }
    })
  }, [])
  return data
}
