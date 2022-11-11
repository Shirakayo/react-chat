import React from 'react'
import { MainLayout } from '@/layouts'
import style from './style.module.scss'

interface Dialog {
  id: number
  title: string
}

interface Props {
  dialog?: Dialog[] // Сделать модель на бэке и переделать
}

export const Messages = ({ dialog }: Props) => {
  if (!dialog || dialog.length === 0) {
    return (
      <MainLayout>
        <div className={style.empty_wrapper}>
          <h2 className={style.empty_title}>
            Select a chat to start messaging
          </h2>
        </div>
      </MainLayout>
    )
  }

  return (
    <MainLayout>
      <div>messages</div>
    </MainLayout>
  )
}
