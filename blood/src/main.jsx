import React from 'react'
import ReactDOM from 'react-dom/client'
// import App from './App.jsx'
import Usercard from './component/usercard'
import './index.css'
import Qrgenerator from './component/qrgenerator'
// import './qr.css'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    {/* <App /> */}
    <Usercard />
    {/* <Qrgenerator /> */}
  </React.StrictMode>,
)