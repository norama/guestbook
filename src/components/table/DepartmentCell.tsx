import { ColoredChip } from './widgets'
import { TDepartment } from 'types'

const COLORS: Record<TDepartment, string> = {
  Marketing: 'sky',
  IT: 'secondary',
  Sales: 'info',
  Management: 'warning',
  Accounting: 'success',
}

interface IDepartmentCell {
  department: TDepartment
}

const DepartmentCell = ({ department }: IDepartmentCell) => (
  <ColoredChip label={department} color={COLORS[department]} />
)

export default DepartmentCell
