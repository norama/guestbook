export type TDepartment = 'Marketing' | 'IT' | 'Sales' | 'Management' | 'Accounting'

export type TVisitor = {
  name: string
  email: string
  department: TDepartment
}

export type TVisitorForm = TVisitor & {
  agreement: boolean
}

export type TSelectOptions = {
  label: string
  value: string
}
