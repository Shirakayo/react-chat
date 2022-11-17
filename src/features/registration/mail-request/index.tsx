import { yupResolver } from '@hookform/resolvers/yup'
import clsx from 'clsx'
import React from 'react'
import { useForm } from 'react-hook-form'
import { useSelector } from 'react-redux'
import * as yup from 'yup'
import { Button } from '@/shared/ui/button'
import { FormNavigation } from '@/shared/ui/form-navigation'
import { useAppDispatch } from '@/store'
import { authSelector, setEmail } from '@/store/authSlice'
import style from './style.module.scss'

interface Props {
  formStep: number
  nextStep: () => void
}

interface FormValues {
  email: string
}

const schema = yup.object().shape({
  email: yup
    .string()
    .matches(
      /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
      'Enter a correct e-mail address'
    )
    .required("Don't you have any mail?"),
})

export const MailRequest = ({ formStep, nextStep }: Props) => {
  const dispatch = useAppDispatch()
  const { authData } = useSelector(authSelector)
  const {
    handleSubmit,
    register,
    formState: { errors, isValid },
  } = useForm<FormValues>({
    defaultValues: {
      email: authData.email,
    },
    mode: 'onBlur',
    resolver: yupResolver(schema),
  })

  const onSubmit = (data: FormValues) => {
    dispatch(setEmail(data.email))
    nextStep()
  }
  return (
    <>
      <form
        className={style.form}
        autoComplete="off"
        onSubmit={handleSubmit(onSubmit)}
      >
        <FormNavigation
          nextStep={nextStep}
          isValid={isValid}
          title="Enter your e-mail address"
          removePrevStep
          formStep={formStep}
        />
        <input
          {...register('email')}
          className={clsx(
            style.inputField,
            errors.email?.message && style.error
          )}
          title={errors.email?.message}
          placeholder="Email*"
          type="email"
        />
        <Button
          disabled={!isValid}
          className={clsx(
            style.button,
            isValid ? style.buttonValid : style.buttonInvalid
          )}
        >
          Next step
        </Button>
      </form>
    </>
  )
}
