import { Card, CardContent, CardActions, Typography } from '@mui/material'
import { Form, Field } from 'react-final-form'
import type { TVisitorForm } from 'types'
import { ResetButton, SubmitButton, TextInput, SelectInput, CheckboxInput } from './widgets'
import { addVisitor } from 'stores'
import { FormApi } from 'final-form'
import { checkVisitorEmail } from 'stores/guestbook'

const DEPARTMENTS = ['Marketing', 'IT', 'Sales', 'Management', 'Accounting']
const OPTIONS = DEPARTMENTS.map((department) => ({
  label: department,
  value: department,
}))

const DEF_DEPARTMENT = 'Marketing'

const AddVisitorForm = () => {
  const resetForm = (form: FormApi<TVisitorForm, Partial<TVisitorForm>>) => {
    form.resetFieldState('email')
    form.reset({ department: 'Marketing' })
  }

  const handleSubmit = (
    { name, email, department }: TVisitorForm,
    form: FormApi<TVisitorForm, Partial<TVisitorForm>>,
  ) => {
    addVisitor({ name, email, department })
    resetForm(form)
  }

  const validateForm = (values: TVisitorForm) => {
    const errors: Record<string, string> = {}
    if (!values.email) {
      errors.email = 'Email is required'
    } else if (!checkVisitorEmail(values.email)) {
      errors.email = 'Visitor with this email already exists'
    }
    return errors
  }

  return (
    <Card>
      <Form
        onSubmit={handleSubmit}
        validate={validateForm}
        render={({ submitError, handleSubmit, form, submitting, pristine, values }) => (
          <form onSubmit={handleSubmit}>
            <CardContent>
              <Typography variant='h6'>Add new visitor</Typography>
              <Typography variant='body2'>Fill name, email address and the department.</Typography>
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
                    type='email'
                    required={true}
                    disabled={submitting}
                    error={meta.touched ? meta.error : null}
                  />
                )}
              </Field>
              <Field name='department' defaultValue={DEF_DEPARTMENT}>
                {({ input }) => (
                  <SelectInput
                    label='Department'
                    options={OPTIONS}
                    value={input.value}
                    onChange={input.onChange}
                    disabled={submitting}
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
                  />
                )}
              </Field>
              {submitError && <div className='error'>{submitError}</div>}
            </CardContent>
            <CardActions>
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
