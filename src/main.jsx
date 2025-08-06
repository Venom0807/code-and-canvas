import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import WhatsappButton from '../components/WhatsappButton.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
    <WhatsappButton />
  </StrictMode>,
)
