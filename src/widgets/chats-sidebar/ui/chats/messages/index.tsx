import React from 'react'
import { messages } from '@/utils/mock/messages'
import { Message } from './message'
import style from './style.module.scss'

const data = messages

export const Messages = () => {
  return (
    <div className={style.wrapper}>
      {data.map((data) => (
        <Message key={data.id} id={data.id} message={data} />
      ))}
    </div>
  )
}
