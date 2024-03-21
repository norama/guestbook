import { AppBar, IconButton, Toolbar, Typography } from '@mui/material'
import { Favorite } from '@mui/icons-material'

const GuestBookHeader = () => (
  <AppBar position='static'>
    <Toolbar sx={{ paddingLeft: 0 }}>
      <IconButton size='large' color='inherit'>
        <Favorite />
      </IconButton>
      <Typography variant='h6' component='div' sx={{ flexGrow: 1 }}>
        Application
      </Typography>
    </Toolbar>
  </AppBar>
)

export default GuestBookHeader
