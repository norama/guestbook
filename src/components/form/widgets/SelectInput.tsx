import { MenuItem, TextField } from '@mui/material'
import { ChangeEvent } from 'react'
import { TSelectOptions } from 'types'

interface ITextInput {
  label: string
  options: TSelectOptions[]
  value: string
  onChange: (event: ChangeEvent) => void
  disabled?: boolean
}

const SelectInput = ({ label, options, value, onChange, disabled }: ITextInput) => (
  <TextField
    sx={{ mt: 3 }}
    value={value}
    onChange={onChange}
    disabled={disabled}
    select
    label={label}>
    {options.map((option) => (
      <MenuItem value={option.value} key={option.value}>
        {option.label}
      </MenuItem>
    ))}
  </TextField>
)

export default SelectInput
