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
import { Form, Field } from 'react-final-form'
import type { TGuest } from 'types'

const AddGuestForm = () => {
  const onSubmit = (values: TGuest) => {
    console.log('values', values)
  }

  return (
    <Card sx={{ minWidth: 350 }}>
      <Form
        onSubmit={onSubmit}
        validate={(values) => {
          const errors: Record<string, string> = {}
          if (!values.email) {
            errors.email = 'Email is required'
          }
          return errors
        }}
        render={({ submitError, handleSubmit, form, submitting, pristine }) => (
          <form onSubmit={handleSubmit}>
            <CardContent>
              <Typography variant='h6'>Add new visitor</Typography>
              <Typography variant='body2' component='div'>
                Fill name, email address and the department.
              </Typography>
              <Field name='name'>
                {({ input, meta }) => (
                  <div>
                    <Box marginTop={3}>
                      <TextField
                        {...input}
                        fullWidth
                        size='small'
                        label='Full name'
                        InputLabelProps={{ shrink: true }}
                      />
                    </Box>
                    {(meta.error || meta.submitError) && meta.touched && (
                      <span>{meta.error || meta.submitError}</span>
                    )}
                  </div>
                )}
              </Field>
              <Field name='email'>
                {({ input, meta }) => (
                  <div>
                    <Box marginTop={3}>
                      <TextField
                        {...input}
                        required
                        fullWidth
                        size='small'
                        label='Email address'
                        InputLabelProps={{ shrink: true }}
                      />
                    </Box>
                    {meta.error && meta.touched && (
                      <Box display='flex' width='100%' justifyContent='end'>
                        <Typography variant='subtitle2' color='primary'>
                          {meta.error}
                        </Typography>
                      </Box>
                    )}
                  </div>
                )}
              </Field>
              <Field name='department' defaultValue='Marketing'>
                {({ input, meta }) => (
                  <div>
                    <Box marginTop={3}>
                      <TextField
                        {...input}
                        select
                        fullWidth
                        size='small'
                        label='Department'
                        InputLabelProps={{ shrink: true }}>
                        <MenuItem value='Marketing'>Marketing</MenuItem>
                        <MenuItem value='IT'>IT</MenuItem>
                        <MenuItem value='Sales'>Sales</MenuItem>
                        <MenuItem value='Management'>Management</MenuItem>
                        <MenuItem value='Accounting'>Accounting</MenuItem>
                      </TextField>
                    </Box>
                    {meta.error && meta.touched && <span>{meta.error}</span>}
                  </div>
                )}
              </Field>
              {submitError && <div className='error'>{submitError}</div>}
            </CardContent>
            <CardActions sx={{ padding: 2, gap: 2 }}>
              <Button
                type='button'
                onClick={() => {
                  form.resetFieldState('email')
                  form.reset({ department: 'Marketing' })
                }}
                disabled={submitting || pristine}
                sx={{
                  borderRadius: 50,
                  pt: 1,
                  pb: 1,
                  pr: 2,
                  pl: 1,
                }}
                variant='outlined'
                size='small'>
                <Restore />
                <Typography variant='button' sx={{ ml: 1 }}>
                  Reset form
                </Typography>
              </Button>
              <Button
                type='submit'
                formNoValidate
                disabled={submitting}
                sx={{
                  borderRadius: 50,
                  pt: 1,
                  pb: 1,
                  pr: 4,
                  pl: 3,
                }}
                variant='contained'
                size='small'>
                <Person />
                <Typography variant='button' sx={{ ml: 1 }}>
                  Add new visitor
                </Typography>
              </Button>
            </CardActions>
          </form>
        )}
      />
    </Card>
  )
}

export default AddGuestForm
