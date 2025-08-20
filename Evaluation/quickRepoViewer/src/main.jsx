import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { ThemeProvider } from './components/Context.jsx'

const light = {
    backgroundColor : "white",
    color : "black"
}

const dark = {
    backgroundColor : "black",
    color : "white"
}

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <ThemeProvider value={light}>
    <App />
    </ThemeProvider>
  </StrictMode>,
)
