import { Box, TextField, Typography } from '@mui/material'
import { ChangeEvent } from 'react'

interface ITextInput {
  label: string
  value: string
  onChange: (event: ChangeEvent) => void
  required?: boolean
  disabled?: boolean
  error?: string | null
}

const TextInput = ({ label, value, onChange, required, disabled, error }: ITextInput) => (
  <div>
    <Box marginTop={3}>
      <TextField
        value={value}
        onChange={onChange}
        required={required}
        disabled={disabled}
        fullWidth
        size='small'
        label={label}
        InputLabelProps={{ shrink: true }}
      />
    </Box>
    {error && (
      <Box display='flex' width='100%' justifyContent='end'>
        <Typography variant='subtitle2' color='primary'>
          {error}
        </Typography>
      </Box>
    )}
  </div>
)

export default TextInput
