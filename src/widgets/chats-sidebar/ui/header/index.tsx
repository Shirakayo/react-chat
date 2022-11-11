import React from 'react'
import { BiDotsVerticalRounded } from 'react-icons/bi'
import { Icon } from '@/shared/ui/icon'
import { Profile } from '@/shared/ui/profile'
import style from './style.module.scss'

export const Header = () => {
  const user = {
    fullName: 'Andrey Pugachev',
  }
  return (
    <div className={style.wrapper}>
      <div className={style.account}>
        <Profile url="mock-profile.jpg" />
        <div className={style.accountInfo}>
          <h2 className={style.accountInfoTitle}>{user.fullName}</h2>
          <span className={style.accountInfoDescription}>My account</span>
        </div>
      </div>
      <Icon>
        <BiDotsVerticalRounded size={25} />
      </Icon>
    </div>
  )
}
