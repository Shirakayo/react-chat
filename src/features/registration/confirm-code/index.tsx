import { yupResolver } from '@hookform/resolvers/yup'
import React from 'react'
import { useForm } from 'react-hook-form'
import { IoIosArrowRoundBack, IoIosArrowRoundForward } from 'react-icons/io'
import * as yup from 'yup'
import { Button } from '@/shared/ui/button'
import style from './style.module.scss'

interface Props {
  formStep: number
  nextStep: () => void
  prevStep: () => void
}

const schema = yup.object({
  code: yup.string().matches(/^\d+$/),
})

export const ConfirmCode = ({ formStep, nextStep, prevStep }: Props) => {
  const {
    handleSubmit,
    register,
    formState: { errors },
  } = useForm({
    mode: 'onBlur',
    resolver: yupResolver(schema),
  })

  const onSubmit = (data: object) => {
    console.log(data)
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <div className={style.stepInformation}>
        <div className={style.stepHandle}>
          <Button onClick={prevStep}>
            <IoIosArrowRoundBack fill="white" size={20} />
          </Button>
          <span>{formStep} of 3</span>
          <Button onClick={nextStep}>
            <IoIosArrowRoundForward fill="white" size={20} />
          </Button>
        </div>
        <p className={style.stepInformationTitle}>
          Enter your confirmation code
        </p>
      </div>
      <input {...register('code')} type="text" />
    </form>
  )
}
