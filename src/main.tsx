import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import { ThemeProvider } from '@mui/material/styles'
import GuestBook from './components/GuestBook.tsx'
import theme from './styles/theme'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <GuestBook />
    </ThemeProvider>
  </React.StrictMode>,
)
