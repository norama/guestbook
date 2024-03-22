import { Box, MenuItem, TextField } from '@mui/material'
import { ChangeEvent } from 'react'
import { TSelectOptions } from 'types'

interface ITextInput {
  label: string
  options: TSelectOptions[]
  value: string
  onChange: (event: ChangeEvent) => void
  required?: boolean
  disabled?: boolean
}

const SelectInput = ({ label, options, value, onChange, required, disabled }: ITextInput) => (
  <Box marginTop={3}>
    <TextField
      value={value}
      onChange={onChange}
      required={required}
      disabled={disabled}
      select
      fullWidth
      size='small'
      label={label}
      InputLabelProps={{ shrink: true }}>
      {options.map((option) => (
        <MenuItem value={option.value} key={option.value}>
          {option.label}
        </MenuItem>
      ))}
    </TextField>
  </Box>
)

export default SelectInput
