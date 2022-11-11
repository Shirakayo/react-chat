import React from 'react'
import { Link } from '@/shared/ui/link'
import style from './style.module.scss'

export const Logo = () => {
  return (
    <Link disableActive={true} url="/" className={style.logoLink}>
      <div className={style.logo}>
        <img src="/logo-medium.png" width={35} height={35} alt="logo" />
      </div>
    </Link>
  )
}
