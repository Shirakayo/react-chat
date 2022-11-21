import React from 'react'
import { useSelector } from 'react-redux'
import Dialog from '@/features/dialog'
import { useChangeTitle } from '@/hooks/useChangeTitle'
import { MainLayout } from '@/layouts'
import { dialogSelector } from '@/store/slices/dialogSlice'
import style from './style.module.scss'

export const Messages = () => {
  useChangeTitle('Messages')
  const { dialog } = useSelector(dialogSelector)
  if (dialog.length === 0) {
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
      <Dialog dialogData={dialog} />
    </MainLayout>
  )
}
