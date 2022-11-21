import React from 'react'
import { useSelector } from 'react-redux'
import { dialogSelector } from '@/store/slices/dialogSlice'
import { DialogSideBar } from '@/widgets/dialog-sidebar'
import { Header } from './header'
import { MessageInput } from './message-input'
import { Messages } from './Messages'
import style from './style.module.scss'

interface Messages {
  id: string
  message: string
}

interface Dialog {
  id: string
  userAvatar: string
  files: string[]
  photos: string[]
  name: string
  mobile: string
  bioStatus: string
  username: string
  status: string
  messages: Messages[]
}

interface Props {
  dialogData: Dialog[]
}

export const Dialog = ({ dialogData }: Props) => {
  const { viewBar } = useSelector(dialogSelector)
  // eslint-disable-next-line @typescript-eslint/no-unnecessary-condition
  if (!dialogData) {
    return <div>Загрузка..</div>
  }

  return (
    <div className={style.wrapper}>
      {dialogData.map((dialog) => (
        <React.Fragment key={dialog.id}>
          <div className={style.dialogWrapper}>
            <Header username={dialog.name} status={dialog.status} />
            <Messages messages={dialog.messages} />
            <MessageInput />
          </div>
          {viewBar && (
            <DialogSideBar
              mobile={dialog.mobile}
              name={dialog.name}
              avatar={dialog.userAvatar}
              file={dialog.files}
              bioStatus={dialog.bioStatus}
              status={dialog.status}
              photos={dialog.photos}
              username={dialog.username}
            />
          )}
        </React.Fragment>
      ))}
    </div>
  )
}
