import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { BrowserRouter } from 'react-router-dom'
import { ThemeProvider } from './utils/ThemeContext.jsx';
import { FavoritesProvider } from './utils/FavoriteContext.jsx'


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <ThemeProvider>
    <FavoritesProvider>
    <BrowserRouter>
    <App />
    </BrowserRouter>
    </FavoritesProvider>
    </ThemeProvider>
  </React.StrictMode>,
)
