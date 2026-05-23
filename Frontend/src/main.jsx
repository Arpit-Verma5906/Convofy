import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './style/global.css'
import './style/animations.css'
import './style/theme.css'
import AppRouter from './app/Router'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <AppRouter />
  </StrictMode>,
)
