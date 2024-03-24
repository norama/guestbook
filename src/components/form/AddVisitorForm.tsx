import { Card, CardContent, CardActions, Typography } from '@mui/material'
import { Form, Field } from 'react-final-form'
import type { TVisitorForm } from 'types'
import { ResetButton, SubmitButton, TextInput, SelectInput, CheckboxInput } from './widgets'
import { addVisitor } from 'stores'
import { FormApi } from 'final-form'

const DEPARTMENTS = ['Marketing', 'IT', 'Sales', 'Management', 'Accounting']

const AddVisitorForm = () => {
  const resetForm = (form: FormApi<TVisitorForm, Partial<TVisitorForm>>) => {
    form.resetFieldState('email')
    form.reset({ department: 'Marketing' })
  }

  const handleSubmit = (
    values: TVisitorForm,
    form: FormApi<TVisitorForm, Partial<TVisitorForm>>,
  ) => {
    const visitor = {
      name: values.name,
      email: values.email,
      department: values.department,
    }
    addVisitor(visitor)
    resetForm(form)
  }

  return (
    <Card sx={{ minWidth: 350, height: 'fit-content' }}>
      <Form
        onSubmit={handleSubmit}
        validate={(values) => {
          const errors: Record<string, string> = {}
          if (!values.email) {
            errors.email = 'Email is required'
          }
          return errors
        }}
        render={({ submitError, handleSubmit, form, submitting, pristine, values }) => (
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
                    inputProps={{ 'data-cy': 'name' }}
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
                    inputProps={{ 'data-cy': 'email' }}
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
                    disabled={submitting}
                    inputProps={{ 'data-cy': 'department' }}
                  />
                )}
              </Field>
              <Field name='agreement' type='checkbox'>
                {({ input }) => (
                  <CheckboxInput
                    label='I agree to be added to the table'
                    checked={input.checked}
                    onChange={input.onChange}
                    disabled={submitting}
                    inputProps={{ 'data-cy': 'agreement' }}
                  />
                )}
              </Field>
              {submitError && <div className='error'>{submitError}</div>}
            </CardContent>
            <CardActions sx={{ padding: 2, gap: 2 }}>
              <ResetButton onClick={() => resetForm(form)} disabled={submitting || pristine} />
              <SubmitButton disabled={!values.agreement || submitting} />
            </CardActions>
          </form>
        )}
      />
    </Card>
  )
}

export default AddVisitorForm
