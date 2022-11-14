import { yupResolver } from '@hookform/resolvers/yup'
import clsx from 'clsx'
import React from 'react'
import { useForm } from 'react-hook-form'
import { IoIosArrowRoundBack, IoIosArrowRoundForward } from 'react-icons/io'
import { useSelector } from 'react-redux'
import * as yup from 'yup'
import { Button } from '@/shared/ui/button'
import { useAppDispatch } from '@/store'
import { authSelector, setCode } from '@/store/authSlice'
import style from './style.module.scss'

interface Props {
  formStep: number
  nextStep: () => void
  prevStep: () => void
}

interface FormValues {
  code: string
}

const schema = yup.object({
  code: yup
    .string()
    .matches(/^\d+$/, 'The confirmation code must consist of numbers!')
    .required('Enter the confirmation code')
    .min(6, 'Impermissible confirmation code length')
    .max(32, 'Confirmation code length exceeded'),
})

export const ConfirmCode = ({ formStep, nextStep, prevStep }: Props) => {
  const { authData } = useSelector(authSelector)
  const dispatch = useAppDispatch()
  const {
    handleSubmit,
    register,
    formState: { errors, isValid },
  } = useForm({
    defaultValues: {
      code: authData.code,
    },
    resolver: yupResolver(schema),
  })

  const onSubmit = (data: FormValues) => {
    dispatch(setCode(data.code))
    nextStep()
  }
  console.log(errors)
  return (
    <form onSubmit={handleSubmit(onSubmit)} className={style.formWrapper}>
      <div className={style.stepInformation}>
        <div className={style.stepHandle}>
          <Button className={style.stepButton} onClick={prevStep}>
            <IoIosArrowRoundBack fill="white" size={20} />
          </Button>
          <span>{formStep} of 3</span>
          <Button className={style.stepButton} onClick={nextStep}>
            <IoIosArrowRoundForward fill="white" size={20} />
          </Button>
        </div>
        <p className={style.stepInformationTitle}>
          Enter your confirmation code
        </p>
      </div>
      <input {...register('code')} type="text" className={style.input} />
      <small>{errors.code?.message}</small>
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
  )
}
