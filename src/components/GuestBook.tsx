import { Box } from '@mui/material'
import AddGuestForm from './form/AddGuestForm'
import GuestBookHeader from './header/GuestBookHeader'

const GuestBook = () => (
  <>
    <GuestBookHeader />
    <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 5, padding: 5 }}>
      <AddGuestForm />
      <AddGuestForm />
    </Box>
  </>
)

export default GuestBook
