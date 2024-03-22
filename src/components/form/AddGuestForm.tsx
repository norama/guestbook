import { Card, CardContent, CardActions, Typography } from '@mui/material'
import { Form, Field } from 'react-final-form'
import type { TGuest } from 'types'
import { ResetButton, SubmitButton, TextInput, SelectInput } from './widgets'

const DEPARTMENTS = ['Marketing', 'IT', 'Sales', 'Management', 'Accounting']

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
                  <TextInput
                    label='Full name'
                    value={input.value}
                    onChange={input.onChange}
                    disabled={submitting}
                    error={meta.touched ? meta.error : null}
                  />
                )}
              </Field>
              <Field name='email'>
                {({ input, meta }) => (
                  <TextInput
                    label='Email address'
                    value={input.value}
                    onChange={input.onChange}
                    required={true}
                    disabled={submitting}
                    error={meta.touched ? meta.error : null}
                  />
                )}
              </Field>
              <Field name='department' defaultValue='Marketing'>
                {({ input }) => (
                  <SelectInput
                    label='Department'
                    options={DEPARTMENTS.map((department) => ({
                      label: department,
                      value: department,
                    }))}
                    value={input.value}
                    onChange={input.onChange}
                    required={true}
                    disabled={submitting}
                  />
                )}
              </Field>
              {submitError && <div className='error'>{submitError}</div>}
            </CardContent>
            <CardActions sx={{ padding: 2, gap: 2 }}>
              <ResetButton
                onClick={() => {
                  form.resetFieldState('email')
                  form.reset({ department: 'Marketing' })
                }}
                disabled={submitting || pristine}
              />
              <SubmitButton disabled={submitting} />
            </CardActions>
          </form>
        )}
      />
    </Card>
  )
}

export default AddGuestForm
