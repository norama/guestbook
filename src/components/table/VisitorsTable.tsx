import { useState } from 'react'
import { Box, Card, CardContent, Typography } from '@mui/material'
import {
  DataGrid,
  GridColDef,
  GridColumnHeaderParams,
  GridRenderCellParams,
} from '@mui/x-data-grid'
import { ColoredChip, RemoveButton } from './widgets'
import { GuestBookStore, removeVisitors } from 'stores'
import { TDepartment } from 'types'

const COLORS: Record<TDepartment, string> = {
  Marketing: 'sky', //'#2196F3',
  IT: 'secondary', //'#9C27B0',
  Sales: 'info', //'#0288D1',
  Management: 'warning', //'#EF6C00',
  Accounting: 'success', //'#2E7D32',
}

const renderHeader = (params: GridColumnHeaderParams) => <strong>{params.colDef.headerName}</strong>

const COLUMNS: GridColDef[] = [
  {
    field: 'name',
    headerName: 'Visitor',
    width: 200,
    renderHeader,
    renderCell: (params: GridRenderCellParams) => <strong>{params.value}</strong>,
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
    width: 150,
    headerAlign: 'right',
    align: 'right',
    renderHeader,
    renderCell: (params: GridRenderCellParams) =>
      params.value ? (
        <ColoredChip
          label={params.value as TDepartment}
          color={COLORS[params.value as TDepartment]}
        />
      ) : null,
  },
]

const VisitorsTable = () => {
  const [selectedIds, setSelectedIds] = useState<string[]>([])
  const visitors = GuestBookStore.useState((s) => s.visitors)

  return (
    <Card sx={{ minWidth: '60%', padding: 0, height: 'fit-content' }}>
      <CardContent sx={{ padding: 0 }}>
        <Box sx={{ padding: 2 }}>
          <Typography variant='h5'>Visitor management</Typography>
          <RemoveButton
            disabled={!selectedIds.length}
            onClick={() => removeVisitors(selectedIds)}
          />
        </Box>
        <DataGrid
          sx={{ border: 'none', padding: 0 }}
          checkboxSelection
          autoHeight
          rows={visitors}
          columns={COLUMNS}
          onRowSelectionModelChange={(ids) => setSelectedIds(ids as string[])}
        />
      </CardContent>
    </Card>
  )
}

export default VisitorsTable