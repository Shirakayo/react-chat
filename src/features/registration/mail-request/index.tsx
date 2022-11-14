import { yupResolver } from '@hookform/resolvers/yup'
import React from 'react'
import { useForm } from 'react-hook-form'
import { useSelector } from 'react-redux'
import * as yup from 'yup'
import { Button } from '@/shared/ui/button'
import { useAppDispatch } from '@/store'
import { authSelector, setEmail } from '@/store/authSlice'
import style from './style.module.scss'
import clsx from 'clsx'

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
    mode: 'onChange',
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
        <div className={style.stepInformation}>
          <span>{formStep} of 3</span>
          <p className={style.stepInformationTitle}>
            Enter your e-mail address
          </p>
        </div>
        <input
          {...register('email')}
          className={style.inputField}
          placeholder="Email*"
          type="email"
        />
        <small className={style.errorMessage}>{errors.email?.message}</small>
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
