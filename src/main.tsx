import React from 'react'
import ReactDOM from 'react-dom/client'
import { App } from './App'
import './index.css'
import './App.css'
import { RecoilRoot } from 'recoil'

if (process.env.NODE_ENV === 'development') {
  import('./mock/browser.ts').then((module) => {
    module.worker.start()
  })
}

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <RecoilRoot>
      <App />
    </RecoilRoot>
  </React.StrictMode>
)
