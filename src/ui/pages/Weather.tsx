import { Suspense, lazy } from 'react'

export const WeatherForecast = () => {
  const LazyComponent = lazy(() =>
    import('../components/LazyWeather').then((module) => ({
      default: module.LazyWeather,
    }))
  )
  return (
    <Suspense fallback={<b>loading...</b>}>
      <LazyComponent />
    </Suspense>
  )
}
