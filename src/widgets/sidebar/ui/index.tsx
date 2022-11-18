import React from 'react'
import { VscSignOut } from 'react-icons/vsc'
import { useNavigate } from 'react-router-dom'
import { Button } from '@/shared/ui/button'
import { useAppDispatch } from '@/store'
import { fetchSignOut } from '@/store/authSlice'
import { LOGIN_ROUTE } from '@/utils/paths'
import { Logo } from './logo'
import { Navigation } from './navigation'
import style from './styles.module.scss'

export const SideBar = () => {
  const dispatch = useAppDispatch()
  const navigate = useNavigate()

  const signOut = () => {
    dispatch(fetchSignOut())
    navigate(LOGIN_ROUTE)
  }

  return (
    <aside className={style.aside}>
      <Logo />
      <Navigation />
      <Button onClick={signOut}>
        <VscSignOut size={25} fill="gray" />
      </Button>
    </aside>
  )
}
