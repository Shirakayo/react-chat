import clsx from 'clsx'
import React from 'react'
import koi from '/public/koi.png'
import style from './style.module.scss'

interface Props {
  className?: string
}

export const Header = ({ className }: Props) => {
  return (
    <div className={clsx(style.wrapper, className)}>
      <div className={style.titleWrapper}>
        <img className={style.logo} src={koi} alt="logo" />
        <p className={style.title}>OniChat</p>
      </div>
      <p className={style.subTitle}>
        made by Shirakayo <span className={style.smallSubTitle}>team</span>
      </p>
    </div>
  )
}
