import React from 'react'
import { Header } from '@/features/registration/header'
import style from './style.module.scss'

export const Authorization = () => {
  return (
    <div className={style.mainWrapper}>
      <div className={style.formWrapper}>
        <Header className={style.header} />
      </div>
    </div>
  )
}
