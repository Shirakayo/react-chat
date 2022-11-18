import React from 'react'
import { BsEmojiSmile } from 'react-icons/bs'
import { MdKeyboardVoice } from 'react-icons/md'
import { Button } from '@/shared/ui/button'
import style from './style.module.scss'

export const Navigation = () => {
  return (
    <div className={style.wrapper}>
      <Button>
        <BsEmojiSmile size={25} fill="gray" />
      </Button>
      <Button>
        <MdKeyboardVoice size={30} fill="gray" />
      </Button>
    </div>
  )
}
