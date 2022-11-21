import React from 'react'
import { AiOutlineSearch } from 'react-icons/ai'
import { BiDotsVerticalRounded } from 'react-icons/bi'
import { BsReverseLayoutSidebarReverse, BsTelephone } from 'react-icons/bs'
import { Button } from '@/shared/ui/button'
import style from './style.module.scss'
import { useAppDispatch } from '@/store'
import { setupViewBar } from '@/store/slices/dialogSlice'

export const Interface = () => {
  const dispatch = useAppDispatch()

  const viewBarToggle = () => {
    dispatch(setupViewBar())
  }

  return (
    <div className={style.interface}>
      <Button>
        <AiOutlineSearch size={25} fill="gray" />
      </Button>
      <Button>
        <BsTelephone size={20} fill="gray" />
      </Button>
      <Button onClick={viewBarToggle}>
        <BsReverseLayoutSidebarReverse size={23} fill="gray" />
      </Button>
      <Button>
        <BiDotsVerticalRounded size={25} fill="gray" />
      </Button>
    </div>
  )
}
