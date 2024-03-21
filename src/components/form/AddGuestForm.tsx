import {
  Card,
  CardContent,
  CardActions,
  Button,
  Typography,
  TextField,
  Box,
  MenuItem,
} from '@mui/material'
import { Restore, Person } from '@mui/icons-material'

const AddGuestForm = () => {
  return (
    <Card sx={{ minWidth: 350 }}>
      <CardContent>
        <Typography variant='h6'>Add new visitor</Typography>
        <Typography variant='body2' component='div'>
          Fill name, email address and the department.
        </Typography>
        <Box marginTop={3}>
          <TextField fullWidth size='small' label='Full name' InputLabelProps={{ shrink: true }} />
        </Box>
        <Box marginTop={3}>
          <TextField
            required
            fullWidth
            size='small'
            label='Email address'
            InputLabelProps={{ shrink: true }}
          />
        </Box>
        <Box marginTop={3}>
          <TextField
            select
            fullWidth
            size='small'
            label='Department'
            value='Marketing'
            InputLabelProps={{ shrink: true }}>
            <MenuItem value='Marketing'>Marketing</MenuItem>
            <MenuItem value='IT'>IT</MenuItem>
            <MenuItem value='Sales'>Sales</MenuItem>
            <MenuItem value='Management'>Management</MenuItem>
            <MenuItem value='Accounting'>Accounting</MenuItem>
          </TextField>
        </Box>
      </CardContent>
      <CardActions sx={{ padding: 2, gap: 2 }}>
        <Button
          sx={{
            borderRadius: 50,
            pt: 1,
            pb: 1,
            pr: 2,
            pl: 1,
          }}
          variant='outlined'
          size='small'>
          <Restore />{' '}
          <Typography variant='button' sx={{ ml: 1 }}>
            Reset form
          </Typography>
        </Button>
        <Button
          sx={{
            borderRadius: 50,
            pt: 1,
            pb: 1,
            pr: 4,
            pl: 3,
          }}
          variant='contained'
          size='small'>
          <Person />{' '}
          <Typography variant='button' sx={{ ml: 1 }}>
            Add new visitor
          </Typography>
        </Button>
      </CardActions>
    </Card>
  )
}

export default AddGuestForm
