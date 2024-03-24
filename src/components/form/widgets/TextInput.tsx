import { Box, InputBaseComponentProps, TextField, Typography } from '@mui/material'
import { ChangeEvent } from 'react'

interface ITextInput {
  label: string
  value: string
  onChange: (event: ChangeEvent) => void
  required?: boolean
  disabled?: boolean
  error?: string | null
  inputProps?: InputBaseComponentProps
}

const TextInput = ({
  label,
  value,
  onChange,
  required,
  disabled,
  error,
  inputProps,
}: ITextInput) => (
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
        inputProps={inputProps}
        InputLabelProps={{ shrink: true }}
      />
    </Box>
    {error && (
      <Box display='flex' width='100%' justifyContent='end'>
        <Typography variant='subtitle2' color='error'>
          {error}
        </Typography>
      </Box>
    )}
  </div>
)

export default TextInput
