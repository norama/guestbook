import { Button } from '@mui/material'
import { Person } from '@mui/icons-material'

interface ISubmitButton {
  disabled?: boolean
}

const SubmitButton = ({ disabled }: ISubmitButton) => (
  <Button
    type='submit'
    startIcon={<Person />}
    disabled={disabled}
    sx={{
      pt: 1,
      pb: 1,
      pr: 3,
      pl: 3,
    }}
    variant='contained'
    size='medium'>
    ADD NEW VISITOR
  </Button>
)

export default SubmitButton
