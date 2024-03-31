import { useState } from 'react'
import { Card, CardContent, Typography } from '@mui/material'
import {
  DataGrid,
  GridColDef,
  GridColumnHeaderParams,
  GridRenderCellParams,
} from '@mui/x-data-grid'
import { RemoveButton } from './widgets'
import { GuestBookStore, removeVisitors } from 'stores'
import { TDepartment } from 'types'
import HeaderCell from './HeaderCell'
import NameCell from './NameCell'
import DepartmentCell from './DepartmentCell'

const renderHeader = (params: GridColumnHeaderParams) => (
  <HeaderCell text={params.colDef.headerName ?? ''} />
)

const COLUMNS: GridColDef[] = [
  {
    field: 'name',
    headerName: 'Visitor',
    width: 200,
    renderHeader,
    renderCell: (params: GridRenderCellParams) => <NameCell text={params.value ?? ''} />,
  },
  {
    field: 'email',
    headerName: 'Email',
    flex: 1,
    renderHeader,
  },
  {
    field: 'department',
    headerName: 'Department',
    width: 200,
    headerAlign: 'right',
    align: 'right',
    renderHeader,
    renderCell: (params: GridRenderCellParams) =>
      params.value ? <DepartmentCell department={params.value as TDepartment} /> : null,
  },
]

const VisitorsTable = () => {
  const [selectedIds, setSelectedIds] = useState<string[]>([])
  const visitors = GuestBookStore.useState((s) => s.visitors)

  return (
    <Card>
      <CardContent>
        <Typography variant='h5'>Visitor management</Typography>
        <RemoveButton disabled={!selectedIds.length} onClick={() => removeVisitors(selectedIds)} />
      </CardContent>
      <DataGrid
        sx={{ border: 'none' }}
        checkboxSelection
        autoHeight
        rows={visitors}
        columns={COLUMNS}
        onRowSelectionModelChange={(ids) => setSelectedIds(ids as string[])}
      />
    </Card>
  )
}

export default VisitorsTable
