import React, { useState } from 'react'
import { MailRequest } from '@/features/registration/mail-request'
import { PersonInformation } from '@/features/registration/person-information'
import { useChangeTitle } from '@/hooks/useChangeTitle'
import { Header } from '@/shared/ui/auth-header'
import { Link } from '@/shared/ui/link'
import { LOGIN_ROUTE } from '@/utils/paths'
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
    if (formStep !== 2) {
      setFormStep((step) => step + 1)
    }
  }
  return (
    <div className={style.wrapper}>
      <div className={style.formWrapper}>
        <div className={style.form}>
          <Header className={style.header} />
          {formStep === 1 && (
            <MailRequest formStep={formStep} nextStep={forwardStep} />
          )}
          {formStep === 2 && (
            <PersonInformation formStep={formStep} prevStep={prevStep} />
          )}
          <div className={style.loginField}>
            <span className={style.linkTitle}>Are you already registered?</span>
            <Link className={style.link} url={LOGIN_ROUTE}>
              Log in
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}
