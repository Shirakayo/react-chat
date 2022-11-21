import React from 'react'
import { Profile } from '@/shared/ui/profile'
import style from './style.module.scss'

interface Props {
  avatar: string
  name: string
  status: string
}

export const UserInfo = ({ avatar, name, status }: Props) => {
  return (
    <div className={style.wrapper}>
      <div className={style.contentWrapper}>
        <Profile width={70} height={70} url={avatar} />
        <div>
          <p className={style.username}>{name}</p>
          <span className={style.status}>{status}</span>
        </div>
      </div>
    </div>
  )
}
