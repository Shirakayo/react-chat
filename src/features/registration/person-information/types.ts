export interface Props {
  formStep: number
  prevStep: () => void
}

export interface FormField {
  username: string
  firstname: string
  lastname: string
  password: string
  confirmPassword: string
}
