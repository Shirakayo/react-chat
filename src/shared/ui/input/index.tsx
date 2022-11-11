import clsx from 'clsx'
import React, { ChangeEvent } from 'react'
import style from './style.module.scss'

interface Props {
  placeholder?: string
  className?: string
  onBlur?: () => void
  onChange: (event: ChangeEvent<HTMLInputElement>) => void
  value: string
}

export const Input = ({
  placeholder,
  className,
  onChange,
  onBlur,
  value,
}: Props) => {
  return (
    <input
      placeholder={placeholder}
      className={clsx(style.input, className)}
      onChange={onChange}
      onBlur={onBlur}
      value={value}
    />
  )
}