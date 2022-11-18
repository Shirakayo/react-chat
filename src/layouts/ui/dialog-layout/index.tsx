import React, { ReactNode } from 'react'
import { DialogSideBar } from '@/widgets/dialog-sidebar'
import style from './style.module.scss'

interface Props {
  children: ReactNode
}

export const DialogLayout = ({ children }: Props) => {
  return (
    <div className={style.wrapper}>
      {children}
      <DialogSideBar />
    </div>
  )
}
