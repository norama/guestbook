import { TextField } from '@mui/material'
import { ChangeEvent } from 'react'

interface ITextInput {
  label: string
  value: string
  onChange: (event: ChangeEvent) => void
  type?: string
  required?: boolean
  disabled?: boolean
  error?: string | null
}

const TextInput = ({
  label,
  value,
  onChange,
  type = 'text',
  required,
  disabled,
  error,
}: ITextInput) => (
  <TextField
    sx={{ mt: 3 }}
    value={value}
    type={type}
    onChange={onChange}
    required={required}
    disabled={disabled}
    label={label}
    error={!!error}
    helperText={error}
  />
)

export default TextInput
