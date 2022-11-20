import React from 'react'
import { AiOutlineSearch } from 'react-icons/ai'
import { BiDotsVerticalRounded } from 'react-icons/bi'
import { BsReverseLayoutSidebarReverse, BsTelephone } from 'react-icons/bs'
import { Button } from '@/shared/ui/button'
import style from './style.module.scss'

export const Interface = () => {
  return (
    <div className={style.interface}>
      <Button>
        <AiOutlineSearch size={20} fill="gray" />
      </Button>
      <Button>
        <BsTelephone size={16} fill="gray" />
      </Button>
      <Button>
        <BsReverseLayoutSidebarReverse size={18} fill="gray" />
      </Button>
      <Button>
        <BiDotsVerticalRounded size={20} fill="gray" />
      </Button>
    </div>
  )
}
