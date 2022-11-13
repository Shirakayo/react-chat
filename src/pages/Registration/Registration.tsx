import React, { useState } from 'react'
import { ConfirmCode } from '@/features/registration/confirm-code'
import { Header } from '@/features/registration/header'
import { MailRequest } from '@/features/registration/mail-request'
import { PersonInformation } from '@/features/registration/person-information'
import style from './style.module.scss'

export const Registration = () => {
  const [formStep, setFormStep] = useState(1)
  const [emailValue, setEmailValue] = useState('')
  const [codeValue, setCodeValue] = useState('')
  const [personInformation, setPersonalInformation] = useState({})

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
          <MailRequest
            setEmailValue={setEmailValue}
            emailValue={emailValue}
            formStep={formStep}
            nextStep={forwardStep}
          />
        )}
        {formStep === 2 && (
          <ConfirmCode
            codeValue={codeValue}
            setCodeValue={setCodeValue}
            formStep={formStep}
            nextStep={forwardStep}
            prevStep={prevStep}
          />
        )}
        {formStep === 3 && (
          <PersonInformation
            personInformation={personInformation}
            setPersonalInformation={setPersonalInformation}
            formStep={formStep}
            nextStep={forwardStep}
            prevStep={prevStep}
          />
        )}
      </div>
    </div>
  )
}
