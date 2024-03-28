import { Grid } from '@mui/material'
import GuestBookHeader from './header/GuestBookHeader'
import AddVisitorForm from './form/AddVisitorForm'
import VisitorsTable from './table/VisitorsTable'
import { useLocaleStoragePersistence } from 'stores'

const GuestBook = () => {
  useLocaleStoragePersistence()

  return (
    <>
      <GuestBookHeader />
      <Grid container padding={2} spacing={2}>
        <Grid item xs={8} md={4}>
          <AddVisitorForm />
        </Grid>
        <Grid item xs={12} md={8}>
          <VisitorsTable />
        </Grid>
      </Grid>
    </>
  )
}

export default GuestBook
