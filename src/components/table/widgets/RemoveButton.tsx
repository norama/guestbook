import { Button, Typography } from '@mui/material'

interface IRemoveButton {
  onClick: () => void
  disabled?: boolean
}

const RemoveButton = ({ onClick, disabled }: IRemoveButton) => (
  <Button
    type='button'
    onClick={onClick}
    disabled={disabled}
    sx={{
      pt: 1,
      pr: 2,
      pb: 1,
      pl: 1,
      mt: 3,
      mb: 1,
    }}
    variant='contained'
    size='small'>
    <Typography variant='button' sx={{ ml: 1 }}>
      Remove
    </Typography>
  </Button>
)

export default RemoveButton
