import React from 'react'
import { Header } from './header'
import { Interface } from './interface'
import style from './style.module.scss'
import { UserContacts } from './user-contacts'
import { UserInfo } from './user-info'

interface Props {
  file: string[]
  photos: string[]
  username: string
  name: string
  mobile: string
  status: string
  bioStatus: string
  avatar: string
}

export const DialogSideBar = ({
  bioStatus,
  file,
  photos,
  username,
  mobile,
  status,
  name,
  avatar,
}: Props) => {
  return (
    <div className={style.asideWrapper}>
      <Header />
      <UserInfo status={status} avatar={avatar} name={name} />
      <UserContacts username={username} phone={mobile} />
      <Interface />
    </div>
  )
}
