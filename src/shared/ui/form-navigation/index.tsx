import React from 'react'
import { IoIosArrowRoundBack, IoIosArrowRoundForward } from 'react-icons/io'
import { Button } from '@/shared/ui/button'
import style from './style.module.scss'

interface Props {
  prevStep?: () => void
  nextStep?: () => void
  formStep: number
  removePrevStep?: boolean
  removeNextStep?: boolean
  title: string
  isValid?: boolean
  handleData?: () => void
}

export const FormNavigation = ({
  prevStep,
  nextStep,
  formStep,
  handleData,
  removePrevStep = false,
  removeNextStep = false,
  title,
  isValid,
}: Props) => {
  const handleBack = () => {
    handleData?.()
    prevStep?.()
  }

  return (
    <div className={style.stepInformation}>
      <div className={style.stepHandle}>
        {!removePrevStep && (
          <Button className={style.stepButton} onClick={handleBack}>
            <IoIosArrowRoundBack fill="white" size={20} />
          </Button>
        )}
        <span>{formStep} of 2</span>
        {!removeNextStep && (
          <Button
            className={style.stepButton}
            disabled={!isValid}
            onClick={nextStep}
          >
            <IoIosArrowRoundForward fill="white" size={20} />
          </Button>
        )}
      </div>
      <p className={style.stepInformationTitle}>{title}</p>
    </div>
  )
}
