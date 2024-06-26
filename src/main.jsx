import 'bootstrap-icons/font/bootstrap-icons.css'
import 'bootstrap/dist/css/bootstrap.min.css'
import React from 'react'
import ReactDOM from 'react-dom/client'
// import { registerSW } from 'virtual:pwa-register'
import App from './App.jsx'
import './index.css'

// const updateSW = registerSW({
//   onNeedRefresh() {
//     if (confirm('New content available. Reload?')) {
//       updateSW(true)
//     }
//   },
// })

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
)
