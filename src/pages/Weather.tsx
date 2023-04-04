import axios from 'axios'

export const WeatherForecast = () => {
  handleGetRequest('https://www.jma.go.jp/bosai/forecast/data/forecast/140000.json')
  return <h1>Weather Page</h1>
}

const handleGetRequest = async (url: string)  => {
  const res = await axios.get(url);
  console.table(res.data)
}

export interface Weather {
  publishingOffice: string;
  reportDatetime: string;
  timeSeries?: (TimeSeriesEntity)[] | null;
  tempAverage?: TempAverageOrPrecipAverage | null;
  precipAverage?: TempAverageOrPrecipAverage1 | null;
}
export interface TimeSeriesEntity {
  timeDefines?: (string)[] | null;
  areas?: (AreasEntity)[] | null;
}
export interface AreasEntity {
  area: Area;
  weatherCodes?: (string)[] | null;
  weathers?: (string)[] | null;
  winds?: (string)[] | null;
  waves?: (string)[] | null;
  pops?: (string)[] | null;
  temps?: (string)[] | null;
  reliabilities?: (string)[] | null;
  tempsMin?: (string)[] | null;
  tempsMinUpper?: (string)[] | null;
  tempsMinLower?: (string)[] | null;
  tempsMax?: (string)[] | null;
  tempsMaxUpper?: (string)[] | null;
  tempsMaxLower?: (string)[] | null;
}
export interface Area {
  name: string;
  code: string;
}
export interface TempAverageOrPrecipAverage {
  areas?: (AreasEntity1)[] | null;
}
export interface AreasEntity1 {
  area: Area;
  min: string;
  max: string;
}
export interface TempAverageOrPrecipAverage1 {
  areas?: (AreasEntity1)[] | null;
}
