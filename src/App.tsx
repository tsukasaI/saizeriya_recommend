import { Recommend } from './pages/Recommend'
import { GrandMenu } from './pages/GrandMenu'
import { Route, BrowserRouter, Routes } from 'react-router-dom'

export const App: React.FC = () => {

  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Recommend />} />
          <Route path="/menu" element={<GrandMenu />} />
        </Routes>
      </BrowserRouter>
    </div>
  )
}
