export interface Props {
  formStep: number
  prevStep: () => void
}

export interface FormField {
  login: string
  firstname: string
  lastname: string
  password: string
  confirmPassword: string
}
