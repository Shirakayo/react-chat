import clsx from 'clsx'
import React from 'react'
import style from './style.module.scss'

interface Props {
  className?: string
}

export const Header = ({ className }: Props) => {
  const messageCount = 30
  return (
    <div className={clsx(style.header, className)}>
      <h2 className={style.title}>Messages</h2>
      <span className={style.titleCount}>{`${messageCount}`}</span>
    </div>
  )
}
