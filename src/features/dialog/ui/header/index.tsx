import React from 'react'
import { useChangeTitle } from '@/hooks/useChangeTitle'
import { Interface } from './interface'
import style from './style.module.scss'

interface Props {
  username?: string
  status?: string
}

export const Header = ({ username, status }: Props) => {
  useChangeTitle(`${username}`)
  return (
    <div className={style.headerWrapper}>
      <div className={style.userInfo}>
        <p className={style.userInfoUsername}>{username}</p>
        <small className={style.userInfoStatus}>{status}</small>
      </div>
      <Interface />
    </div>
  )
}
