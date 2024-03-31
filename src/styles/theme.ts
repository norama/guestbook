import { createTheme } from '@mui/material/styles'

// Augment the palette to include a sky color
declare module '@mui/material/styles' {
  interface Palette {
    sky: Palette['primary']
  }

  interface PaletteOptions {
    sky?: PaletteOptions['primary']
  }
}

const theme = createTheme({
  typography: {
    button: {
      fontWeight: 500,
    },
  },
  palette: {
    primary: {
      main: '#EF5742',
    },
    sky: {
      main: '#2196F3',
      light: '#2196F3',
      dark: '#2196F3',
      contrastText: '#FFFFFF',
    },
  },
  components: {
    MuiCssBaseline: {
      styleOverrides: {
        root: {
          fontFamily: 'Roboto',
          lineHeight: 1.5,
          fontWeight: 400,
        },
        body: {
          margin: 0,
          minWidth: '320px',
          minHeight: '100vh',
          backgroundColor: '#f9f9f9',
        },
      },
    },
    MuiButton: {
      styleOverrides: {
        root: {
          borderRadius: 50,
        },
      },
    },
  },
})

export default theme
