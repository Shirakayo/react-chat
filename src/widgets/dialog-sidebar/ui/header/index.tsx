import React from 'react'
import { IoMdClose } from 'react-icons/io'
import { Button } from '@/shared/ui/button'
import { useAppDispatch } from '@/store'
import { setupViewBar } from '@/store/slices/dialogSlice'
import style from './style.module.scss'

export const Header = () => {
  const dispatch = useAppDispatch()

  const handleCloseSideBar = () => {
    dispatch(setupViewBar())
  }

  return (
    <div className={style.header}>
      <p className={style.headerUserInfo}>User info</p>
      <Button onClick={handleCloseSideBar}>
        <IoMdClose size={20} fill="gray" />
      </Button>
    </div>
  )
}
