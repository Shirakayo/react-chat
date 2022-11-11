import clsx from 'clsx'
import React, { ReactNode } from 'react'
import style from './style.module.scss'

interface Props {
  children: ReactNode
  className?: string
}

export const Icon = ({ children, className }: Props) => {
  return <div className={clsx(style.icon, className)}>{children}</div>
}
