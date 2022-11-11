import React from 'react'
import { Chats } from './chats'
import { Header } from './header'
import { Search } from './search'
import { Status } from './status'
import style from './style.module.scss'

export const ChatsBar = () => {
  return (
    <div className={style.wrapper}>
      <Header />
      <Search />
      <Status />
      <Chats />
    </div>
  )
}
