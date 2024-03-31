import { Button } from '@mui/material'
import { Restore } from '@mui/icons-material'

interface IResetButton {
  onClick: () => void
  disabled?: boolean
}

const ResetButton = ({ onClick, disabled }: IResetButton) => (
  <Button
    type='button'
    startIcon={<Restore />}
    onClick={onClick}
    disabled={disabled}
    sx={{
      pt: 1,
      pb: 1,
      pr: 2,
      pl: 2,
    }}
    variant='outlined'
    size='medium'>
    RESET FORM
  </Button>
)

export default ResetButton
