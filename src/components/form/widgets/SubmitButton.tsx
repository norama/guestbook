import { Button, Typography } from '@mui/material'
import { Person } from '@mui/icons-material'

interface ISubmitButton {
  disabled?: boolean
}

const SubmitButton = ({ disabled }: ISubmitButton) => (
  <Button
    type='submit'
    formNoValidate
    disabled={disabled}
    sx={{
      borderRadius: 50,
      pt: 1,
      pb: 1,
      pr: 4,
      pl: 3,
    }}
    variant='contained'
    size='small'>
    <Person />
    <Typography variant='button' sx={{ ml: 1 }}>
      Add new visitor
    </Typography>
  </Button>
)

export default SubmitButton
