import { yupResolver } from '@hookform/resolvers/yup'
import React from 'react'
import { useForm } from 'react-hook-form'
import * as yup from 'yup'
import { Button } from '@/shared/ui/button'
import style from './style.module.scss'

interface Props {
  formStep: number
  nextStep: () => void
  emailValue: string
  setEmailValue: (value: string) => void
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

export const MailRequest = ({
  formStep,
  nextStep,
  emailValue,
  setEmailValue,
}: Props) => {
  const {
    handleSubmit,
    register,
    formState: { errors },
  } = useForm<FormValues>({
    defaultValues: {
      email: emailValue,
    },
    mode: 'onBlur',
    resolver: yupResolver(schema),
  })

  const onSubmit = (data: FormValues) => {
    setEmailValue(data.email)
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
          disabled={(errors.email?.message)!.length > 0}
          onClick={nextStep}
          className={style.button}
        >
          Next step
        </Button>
      </form>
    </>
  )
}
