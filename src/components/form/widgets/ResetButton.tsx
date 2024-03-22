import { Button, Typography } from '@mui/material'
import { Restore } from '@mui/icons-material'

interface IResetButton {
  onClick: () => void
  disabled?: boolean
}

const ResetButton = ({ onClick, disabled }: IResetButton) => (
  <Button
    type='button'
    onClick={onClick}
    disabled={disabled}
    sx={{
      borderRadius: 50,
      pt: 1,
      pb: 1,
      pr: 2,
      pl: 1,
    }}
    variant='outlined'
    size='small'>
    <Restore />
    <Typography variant='button' sx={{ ml: 1 }}>
      Reset form
    </Typography>
  </Button>
)

export default ResetButton
