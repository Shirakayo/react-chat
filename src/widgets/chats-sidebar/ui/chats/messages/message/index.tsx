import clsx from 'clsx'
import React from 'react'
import { Link } from '@/shared/ui/link'
import { Profile } from '@/shared/ui/profile'
import style from './style.module.scss'

interface Message {
  id: number
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
  id: number
}

export const Message = ({ message, className, id }: Props) => {
  return (
    <Link className={clsx(style.wrapper, className)} url={`/messages/${id}`}>
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
    </Link>
  )
}
