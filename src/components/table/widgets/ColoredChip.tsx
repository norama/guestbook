import { Chip, ChipOwnProps } from '@mui/material'

interface IColoredChip {
  color: string
  label: string
}

const ColoredChip = ({ color, label }: IColoredChip) => (
  <Chip
    label={label}
    size='medium'
    color={color as ChipOwnProps['color']}
    sx={{ textTransform: 'uppercase' }}
  />
)

export default ColoredChip
