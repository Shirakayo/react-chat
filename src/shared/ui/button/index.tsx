import clsx from 'clsx'
import React, { ReactNode } from 'react'
import style from './style.module.scss'

interface Props {
  className?: string
  children: ReactNode
  onClick?: () => void
  disabled?: boolean
}

export const Button = ({ className, children, onClick, disabled }: Props) => {
  return (
    <button
      disabled={disabled}
      onClick={onClick}
      className={clsx(style.button, className)}
    >
      {children}
    </button>
  )
}
