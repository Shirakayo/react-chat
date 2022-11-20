import * as yup from 'yup'

export const schema = yup.object({
  login: yup
    .string()
    .min(1, 'Minimum 1 characters')
    .max(15, 'Maximum 15 characters'),
  firstname: yup
    .string()
    .matches(/^[A-Za-z ]*$/, 'Please enter valid name')
    .max(40)
    .required(),
  lastname: yup
    .string()
    .matches(/^[A-Za-z ]*$/, 'Please enter valid name')
    .max(40)
    .required(),
  password: yup
    .string()
    .required('Please Enter your password')
    .matches(
      /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%^&*])(?=.{8,})/,
      'Must Contain 8 Characters, One Uppercase, One Lowercase, One Number and One Special Case Character'
    ),
  confirmPassword: yup
    .string()
    .oneOf([yup.ref('password'), null], 'Passwords must match'),
})
