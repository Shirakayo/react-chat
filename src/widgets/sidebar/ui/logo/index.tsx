import React from 'react'
import { Link } from '@/shared/ui/link'
import style from './style.module.scss'

export const Logo = () => {
  return (
    <Link disableActive={true} url="/" className={style.logoLink}>
      <div className={style.logo}>
        <img src="/koi.png" width={40} height={40} alt="logo" />
        <span className={style.logoTitle}>OniChat</span>
      </div>
    </Link>
  )
}
