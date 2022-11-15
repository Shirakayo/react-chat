import React from 'react'
import loader from './loader.svg'
import style from './style.module.scss'

export const Loader = () => {
  return (
    <div className={style.loaderWrapper}>
      <img className={style.loader} src={loader} alt="loader" />
    </div>
  )
}
