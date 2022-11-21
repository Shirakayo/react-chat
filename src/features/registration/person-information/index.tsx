import { yupResolver } from '@hookform/resolvers/yup'
import clsx from 'clsx'
import React from 'react'
import { useForm } from 'react-hook-form'
import { useSelector } from 'react-redux'
import { schema } from '@/features/registration/person-information/schema'
import {
  FormField,
  Props,
} from '@/features/registration/person-information/types'
import { Button } from '@/shared/ui/button'
import { FormNavigation } from '@/shared/ui/form-navigation'
import { useAppDispatch } from '@/store'
import {
  authSelector,
  requestRegistrationUser,
  setPersonInfo,
} from '@/store/slices/authSlice'
import style from './style.module.scss'

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
      username: authData.username,
      firstname: authData.firstname,
      lastname: authData.lastname,
    },
  })

  const handleData = () => {
    const data = getValues()
    dispatch(setPersonInfo(data))
  }

  const onSubmit = (data: FormField) => {
    dispatch(
      requestRegistrationUser({
        email: authData.email,
        username: data.username,
        password: data.password,
        firstname: data.firstname,
        lastname: data.lastname,
      })
    )
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
          {...register('username')}
          type="text"
          title={errors.username?.message}
          placeholder="Login"
          className={clsx(style.input, errors.username?.message && style.error)}
        />
        <div className={style.fullNameFields}>
          <input
            className={clsx(
              style.input,
              errors.firstname?.message && style.error
            )}
            title={errors.firstname?.message}
            placeholder="Firstname"
            {...register('firstname')}
            type="text"
          />
          <input
            className={clsx(
              style.input,
              errors.lastname?.message && style.error
            )}
            title={errors.lastname?.message}
            placeholder="Lastname"
            {...register('lastname')}
            type="text"
          />
        </div>
        <input
          {...register('password')}
          type="password"
          title={errors.password?.message}
          placeholder="Password*"
          className={clsx(style.input, errors.password?.message && style.error)}
        />
        <input
          {...register('confirmPassword')}
          type="password"
          title={errors.confirmPassword?.message}
          placeholder="Confirm Password*"
          className={clsx(
            style.input,
            errors.confirmPassword?.message && style.error
          )}
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
