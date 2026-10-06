import { useWeather } from '../hooks/useWeather'

export const LazyWeather = () => {
  const data = useWeather()
  return (
    <>
      <h1>Weather Page</h1>
      <div>{Array.isArray(data) && data.map((v) => <p key={v}>{v}</p>)}</div>
    </>
  )
}
