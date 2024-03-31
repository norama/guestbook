import { Chip, ChipOwnProps } from '@mui/material'

interface IColoredChip {
  color: string
  label: string
}

const ColoredChip = ({ color, label }: IColoredChip) => (
  <Chip label={label} color={color as ChipOwnProps['color']} />
)

export default ColoredChip
