import clsx from 'clsx'
import React, { ChangeEvent, InputHTMLAttributes } from 'react'
import { FieldValues, UseFormRegister } from 'react-hook-form'
import style from './style.module.scss'

interface Props extends InputHTMLAttributes<HTMLInputElement> {
  placeholder?: string
  className?: string
  onBlur?: () => void
  onChange: (event: ChangeEvent<HTMLInputElement>) => void
  value?: string
  register?: UseFormRegister<FieldValues>
}

export const Input = ({
  placeholder,
  className,
  onChange,
  onBlur,
  value,
  register,
}: Props) => {
  return (
    <input
      {...register}
      placeholder={placeholder}
      className={clsx(style.input, className)}
      onChange={onChange}
      onBlur={onBlur}
      value={value}
    />
  )
}
