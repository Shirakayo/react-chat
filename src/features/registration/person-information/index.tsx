import React from 'react'

interface Props {
  formStep: number
  nextStep: () => void
  prevStep: () => void
}

export const PersonInformation = ({ formStep, nextStep, prevStep }: Props) => {
  return <div>
    <button onClick={prevStep}>prev</button>
  </div>
}
