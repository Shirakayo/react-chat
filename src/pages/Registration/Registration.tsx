import React, { useState } from 'react'
import { ConfirmCode } from '@/features/registration/confirm-code'
import { Header } from '@/features/registration/header'
import { MailRequest } from '@/features/registration/mail-request'
import { PersonInformation } from '@/features/registration/person-information'
import { useChangeTitle } from '@/hooks/useChangeTitle'
import style from './style.module.scss'

export const Registration = () => {
  const [formStep, setFormStep] = useState(1)
  useChangeTitle('Registration')
  const prevStep = () => {
    if (formStep !== 1) {
      setFormStep((step) => step - 1)
    }
  }
  const forwardStep = () => {
    if (formStep !== 3) {
      setFormStep((step) => step + 1)
    }
  }
  return (
    <div className={style.wrapper}>
      <div className={style.formWrapper}>
        <Header className={style.header} />
        {formStep === 1 && (
          <MailRequest formStep={formStep} nextStep={forwardStep} />
        )}
        {formStep === 2 && (
          <ConfirmCode
            formStep={formStep}
            nextStep={forwardStep}
            prevStep={prevStep}
          />
        )}
        {formStep === 3 && (
          <PersonInformation
            formStep={formStep}
            nextStep={forwardStep}
            prevStep={prevStep}
          />
        )}
      </div>
    </div>
  )
}
