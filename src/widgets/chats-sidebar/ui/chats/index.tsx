import React from 'react'
import { Header } from './header'
import { Messages } from './messages'
import style from './style.module.scss'

export const Chats = () => {
  return (
    <div className={style.wrapper}>
      <Header className={style.header} />
      <Messages />
    </div>
  )
}
