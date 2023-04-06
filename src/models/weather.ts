
export type WeatherForecastGetResult = [Weather, Temp]

interface Weather {
  publishingOffice: string
  reportDatetime: string
  timeSeries?: TimeSeriesEntity[] | null
}
interface TimeSeriesEntity {
  timeDefines?: string[] | null
  areas?: AreasEntity[] | null
}
interface AreasEntity {
  area: Area
  weatherCodes?: string[] | null
  weathers?: string[] | null
  winds?: string[] | null
  waves?: string[] | null
  pops?: string[] | null
  temps?: string[] | null
}
interface Area {
  name: string
  code: string
}

interface Temp {
  publishingOffice: string
  reportDatetime: string
  timeSeries?: TimeSeriesEntity[] | null
  tempAverage: TempAverageOrPrecipAverage
  precipAverage: TempAverageOrPrecipAverage
}
interface TimeSeriesEntity {
  timeDefines?: string[] | null
  areas?: AreasEntity[] | null
}
interface AreasEntity {
  area: Area
  weatherCodes?: string[] | null
  pops?: string[] | null
  reliabilities?: string[] | null
  tempsMin?: string[] | null
  tempsMinUpper?: string[] | null
  tempsMinLower?: string[] | null
  tempsMax?: string[] | null
  tempsMaxUpper?: string[] | null
  tempsMaxLower?: string[] | null
}
interface Area {
  name: string
  code: string
}
interface TempAverageOrPrecipAverage {
  areas?: AreasEntity1[] | null
}
interface AreasEntity1 {
  area: Area
  min: string
  max: string
}
