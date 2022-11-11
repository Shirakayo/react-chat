import React from 'react'
import Header from './header'
import { Peoples } from './peoples'
import style from './style.module.scss'

export const Status = () => {
  return (
    <div className={style.wrapper}>
      <Header />
      <Peoples />
    </div>
  )
}
