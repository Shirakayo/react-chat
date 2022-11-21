import React from 'react'
import style from './style.module.scss'

interface Messages {
  id: string
  message: string
}

interface Props {
  messages: Messages[]
}

export const Messages = ({ messages }: Props) => {
  if (messages.length === 0) {
    return (
      <div className={style.empty}>
        <p className={style.emptyTitle}>Your dialog is empty...</p>
      </div>
    )
  }

  return <div className={style.wrapper} />
}
