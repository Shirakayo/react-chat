import React from 'react'
import { Button } from '@/shared/ui/button'
import {
  BsShare,
  CiEdit,
  MdBlockFlipped,
  MdOutlineDeleteOutline,
} from 'react-icons/all'
import clsx from 'clsx'
import style from './style.module.scss'

export const Interface = () => {
  return (
    <div className={style.interface}>
      <Button className={style.interfaceAction}>
        <BsShare fill="white" size={20} />
        <span>Share this contact</span>
      </Button>
      <Button className={style.interfaceAction}>
        <CiEdit fill="white" size={20} />
        <span>Edit contact</span>
      </Button>
      <Button className={style.interfaceAction}>
        <MdOutlineDeleteOutline fill="white" size={20} />
        <span>Delete contact</span>
      </Button>
      <Button className={clsx(style.interfaceAction, style.deleteAction)}>
        <MdBlockFlipped fill="red" size={20} />
        <span>Block user</span>
      </Button>
    </div>
  )
}
