import React from 'react'
import ReactDOM from 'react-dom/client'
import { App } from './App'
import './index.css'
import './App.css'

if (import.meta.env.DEV) {
  import('./mock/browser').then((module) => {
    module.worker.start()
  })
}

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
)
