import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import TailwindProps from './TailwindProps.jsx'
import BgChanger from './BgChanger.jsx'
import PasswordGenerator from './PasswordGenerator.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    {/* <App /> */}
    {/* <TailwindProps/> */}
    {/* <BgChanger/> */}
    <PasswordGenerator/>
  </StrictMode>,
)
