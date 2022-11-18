import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { MainLayout } from '@/layouts'
import { DialogLayout } from '@/layouts/ui/dialog-layout'
import { DialogMock } from '@/utils/mock/dialog'
import { Header } from './header'
import { MessageInput } from './message-input'
import { Messages } from './Messages'
import style from './style.module.scss'

interface StateTypes {
  id: string
  status: string
  username: string
  messages: string[]
}

export const Dialog = () => {
  const [userData, setUserData] = useState<StateTypes | null>(null)
  const { id } = useParams()
  useEffect(() => {
    const findObject = DialogMock.find((el) => {
      return el.id === id
    })
    if (findObject) {
      setUserData(findObject)
    }
  }, [id])

  if (!userData) {
    return <div>Загрузка..</div>
  }

  return (
    <MainLayout>
      <DialogLayout>
        <div className={style.wrapper}>
          <Header username={userData.username} status={userData.status} />
          <Messages messages={userData.messages} />
          <MessageInput />
        </div>
      </DialogLayout>
    </MainLayout>
  )
}
