import { Box, Checkbox, FormControlLabel, InputBaseComponentProps, Typography } from '@mui/material'
import { ChangeEvent } from 'react'

interface ICheckboxInput {
  label: string
  checked?: boolean
  onChange: (event: ChangeEvent) => void
  required?: boolean
  disabled?: boolean
  inputProps?: InputBaseComponentProps
}

const CheckboxInput = ({
  label,
  checked,
  onChange,
  required,
  disabled,
  inputProps,
}: ICheckboxInput) => (
  <Box marginTop={3}>
    <FormControlLabel
      required={required}
      control={
        <Checkbox
          checked={!!checked}
          onChange={onChange}
          disabled={disabled}
          inputProps={inputProps}
        />
      }
      label={<Typography variant='subtitle2'>{label}</Typography>}
    />
  </Box>
)

export default CheckboxInput
