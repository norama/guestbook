import { Box } from '@mui/material'
import GuestBookHeader from './header/GuestBookHeader'
import AddVisitorForm from './form/AddVisitorForm'
import VisitorsTable from './table/VisitorsTable'
import { useLocaleStoragePersistence } from 'stores'

const GuestBook = () => {
  useLocaleStoragePersistence()

  return (
    <>
      <GuestBookHeader />
      <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 5, padding: 5 }}>
        <AddVisitorForm />
        <VisitorsTable />
      </Box>
    </>
  )
}

export default GuestBook
