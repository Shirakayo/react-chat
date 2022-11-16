import { yupResolver } from '@hookform/resolvers/yup'
import clsx from 'clsx'
import React from 'react'
import { useForm } from 'react-hook-form'
import { useSelector } from 'react-redux'
import * as yup from 'yup'
import { Button } from '@/shared/ui/button'
import { FormNavigation } from '@/shared/ui/form-navigation'
import { useAppDispatch } from '@/store'
import { authSelector, setPersonInfo } from '@/store/authSlice'
import style from './style.module.scss'

interface Props {
  formStep: number
  prevStep: () => void
}

interface FormField {
  login: string
  firstname: string
  lastname: string
  password: string
  confirmPassword: string
}

const schema = yup.object({
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
    .required('No password provided.')
    .min(8, 'Password is too short - should be 8 chars minimum.')
    .matches(/[a-zA-Z]/, 'Password can only contain Latin letters.'),
  confirmPassword: yup
    .string()
    .oneOf([yup.ref('password'), null], 'Passwords must match'),
})

export const PersonInformation = ({ formStep, prevStep }: Props) => {
  const dispatch = useAppDispatch()
  const { authData } = useSelector(authSelector)
  const {
    handleSubmit,
    register,
    getValues,
    formState: { errors, isValid },
  } = useForm<FormField>({
    mode: 'onChange',
    resolver: yupResolver(schema),
    defaultValues: {
      login: authData.login,
      firstname: authData.firstname,
      lastname: authData.lastname,
    },
  })

  const handleData = () => {
    const data = getValues()
    dispatch(setPersonInfo(data))
  }

  const onSubmit = (data: FormField) => {
    console.log(data)
  }

  return (
    <>
      <form onSubmit={handleSubmit(onSubmit)} className={style.form}>
        <FormNavigation
          handleData={handleData}
          prevStep={prevStep}
          removeNextStep
          title="Enter your personal information"
          formStep={formStep}
        />
        <input
          {...register('login')}
          type="text"
          placeholder="Login"
          className={clsx(style.loginInput, style.input)}
        />
        <div className={style.fullNameFields}>
          <input
            className={style.input}
            placeholder="Firstname"
            {...register('firstname')}
            type="text"
          />
          <input
            className={style.input}
            placeholder="Lastname"
            {...register('lastname')}
            type="text"
          />
        </div>
        <input
          {...register('password')}
          type="password"
          placeholder="Password*"
          className={clsx(style.loginInput, style.input)}
        />
        <input
          {...register('confirmPassword')}
          type="password"
          placeholder="Confirm Password*"
          className={clsx(style.loginInput, style.input)}
        />
        <Button
          disabled={!isValid}
          className={clsx(
            style.button,
            isValid ? style.buttonValid : style.buttonInvalid
          )}
        >
          Sign Up
        </Button>
      </form>
    </>
  )
}
