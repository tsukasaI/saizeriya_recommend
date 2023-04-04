import React from 'react'
import ReactDOM from 'react-dom/client'
import { Recommend } from './pages/Recommend'
import { GrandMenu } from './pages/GrandMenu'
import { Route, BrowserRouter, Routes } from 'react-router-dom'
import './index.css'
import './App.css'

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Recommend />} />
        <Route path="/menu" element={<GrandMenu />} />
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
)
