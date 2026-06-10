import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './style/global.css'
import './style/animations.css'
import './style/theme.css'
import AppRouter from './app/Router'
import { AuthProvider } from './components/context/AuthContext'
import { ThemeProvider } from './components/context/ThemeContext'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <ThemeProvider>
      <AuthProvider>
        <AppRouter />
      </AuthProvider>
    </ThemeProvider>
  </StrictMode>,
)
