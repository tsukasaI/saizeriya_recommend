import { useState, useEffect } from 'react'
import { fetchWeather } from '../api/weather'

export const LazyWeather = () => {
  const [data, setData] = useState<string[]>()
  useEffect(() => {
    fetchWeather().then((e) => {
      if (e && typeof e[0] !== 'undefined') {
        setData(e)
      }
    })
  }, [])
  return (
    <>
      <h1>Weather Page</h1>
      <div>{Array.isArray(data) && data.map((v) => <p key={v}>{v}</p>)}</div>
    </>
  )
}
