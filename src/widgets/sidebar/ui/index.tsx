import React from 'react'
import { Profile } from '@/shared/ui/profile'
import { Logo } from './logo'
import { Navigation } from './navigation'
import style from './styles.module.scss'

export const SideBar = () => {
  return (
    <aside className={style.aside}>
      <Logo />
      <Navigation />
      <Profile url="mock-profile.jpg" />
    </aside>
  )
}
