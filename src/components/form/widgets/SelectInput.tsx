import { Box, InputBaseComponentProps, MenuItem, TextField } from '@mui/material'
import { ChangeEvent } from 'react'
import { TSelectOptions } from 'types'

interface ITextInput {
  label: string
  options: TSelectOptions[]
  value: string
  onChange: (event: ChangeEvent) => void
  disabled?: boolean
  inputProps?: InputBaseComponentProps
}

const SelectInput = ({ label, options, value, onChange, disabled, inputProps }: ITextInput) => (
  <Box marginTop={3}>
    <TextField
      value={value}
      onChange={onChange}
      disabled={disabled}
      select
      fullWidth
      size='small'
      label={label}
      InputLabelProps={{ shrink: true }}
      inputProps={inputProps}>
      {options.map((option) => (
        <MenuItem value={option.value} key={option.value}>
          {option.label}
        </MenuItem>
      ))}
    </TextField>
  </Box>
)

export default SelectInput
