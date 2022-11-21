import clsx from 'clsx'
import React from 'react'
import { Profile } from '@/shared/ui/profile'
import style from './style.module.scss'
import { Button } from '@/shared/ui/button'
import { useAppDispatch } from '@/store'
import { getDialogData } from '@/store/slices/dialogSlice'

interface Message {
  id: string
  profile_url: string
  className?: string
  onClick?: () => void
  last_message: string
  last_message_timestamp: string
  login: string
  status: string
}

interface Props {
  message: Message
  className?: string
  id: string
}

export const Message = ({ message, className, id }: Props) => {
  const dispatch = useAppDispatch()
  const getDialogHandle = () => {
    dispatch(getDialogData(id))
  }

  return (
    <Button
      onClick={getDialogHandle}
      className={clsx(style.wrapper, className)}
    >
      <div className={style.message}>
        <Profile url={message.profile_url} status={message.status} />
        <div className={style.info}>
          <span className={style.infoLogin}>{message.login}</span>
          <p className={style.infoMessage}>{message.last_message}</p>
        </div>
        <div className={style.messageTime}>
          <small>{message.last_message_timestamp}</small>
        </div>
      </div>
    </Button>
  )
}
