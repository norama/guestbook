export type TDepartment = 'Marketing' | 'IT' | 'Sales' | 'Management' | 'Accounting'

export type TGuest = {
  name: string
  email: string
  department: TDepartment
}

export type TSelectOptions = {
  label: string
  value: string
}
