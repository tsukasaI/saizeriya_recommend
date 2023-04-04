import { Recommend } from './pages/Recommend'
import { GrandMenu } from './pages/GrandMenu'
import { WeatherForecast } from './pages/Weather'
import { Route, BrowserRouter, Routes } from 'react-router-dom'

export const App: React.FC = () => {

  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Recommend />} />
          <Route path="/menu" element={<GrandMenu />} />
          <Route path="/wheather" element={<WeatherForecast />} />
        </Routes>
      </BrowserRouter>
    </div>
  )
}
