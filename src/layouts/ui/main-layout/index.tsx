import React, { ReactNode } from 'react'
import { ChatsBar } from '@/widgets/chats-sidebar/ui'
import { SideBar } from '@/widgets/sidebar'
import style from './styles.module.scss'

interface Props {
  children: ReactNode
  hideChatsSideBar?: boolean
}

export const MainLayout = ({ children, hideChatsSideBar = false }: Props) => {
  return (
    <div className={style.wrapper}>
      <SideBar />
      {!hideChatsSideBar && <ChatsBar />}
      <main className={style.main}>
        <section>{children}</section>
      </main>
    </div>
  )
}
