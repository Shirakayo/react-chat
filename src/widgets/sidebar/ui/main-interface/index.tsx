import React from 'react'
import { AiOutlineSetting } from 'react-icons/ai'
import { VscSignOut } from 'react-icons/vsc'
import { useNavigate } from 'react-router-dom'
import { Button } from '@/shared/ui/button'
import { useAppDispatch } from '@/store'
import { fetchSignOut } from '@/store/slices/authSlice'
import { LOGIN_ROUTE } from '@/utils/paths'
import style from './style.module.scss'

export const MainInterface = () => {
  const dispatch = useAppDispatch()
  const navigate = useNavigate()

  const signOut = () => {
    dispatch(fetchSignOut())
    navigate(LOGIN_ROUTE)
  }

  return (
    <div className={style.interface}>
      <Button>
        <AiOutlineSetting size={25} fill="white" />
      </Button>
      <Button onClick={signOut}>
        <VscSignOut size={25} fill="white" />
      </Button>
    </div>
  )
}
