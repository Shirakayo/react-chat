import React from 'react'
import style from './style.module.scss'

export const Loader = () => {
  return (
    <div className={style.loaderWrapper}>
      <div className={style.loader} />
    </div>
  )
}
