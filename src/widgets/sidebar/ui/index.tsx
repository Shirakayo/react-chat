import React from 'react'
import { Logo } from './logo'
import { MainInterface } from './main-interface'
import { Navigation } from './navigation'
import style from './styles.module.scss'

export const SideBar = () => {
  return (
    <aside className={style.aside}>
      <Logo />
      <Navigation />
      <MainInterface />
    </aside>
  )
}
