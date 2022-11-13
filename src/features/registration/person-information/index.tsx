import React from 'react'

interface Props {
  formStep: number
  nextStep: () => void
  prevStep: () => void
  setPersonalInformation: (value: object) => void
  personInformation: object
}

export const PersonInformation = ({ formStep, nextStep, prevStep }: Props) => {
  return <div>PersonInformation</div>
}
