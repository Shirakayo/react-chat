import React from 'react'
import style from './style.module.scss'
import { AiOutlineBell, AiOutlineInfoCircle } from 'react-icons/ai'

interface Props {
  phone: string
  username: string
}

export const UserContacts = ({ phone, username }: Props) => {
  return (
    <div className={style.wrapper}>
      <div className={style.contentWrapper}>
        <div className={style.information}>
          <AiOutlineInfoCircle size={25} fill="white" />
          <div>
            <div className={style.infoBlock}>
              <p className={style.infoBlockPhone}>{phone}</p>
              <span className={style.infoBlockPhoneSubtitle}>Mobile</span>
            </div>
            <div className={style.infoBlock}>
              <p className={style.infoBlockUsername}>{username}</p>
              <span className={style.infoBlockUsernameSubtitle}>Username</span>
            </div>
          </div>
        </div>
        <div className={style.notify}>
          <div className={style.notifyContent}>
            <AiOutlineBell size={25} fill="white" />
            <span className={style.notifyTitle}>Notifications</span>
            <input type="checkbox" />
          </div>
        </div>
      </div>
    </div>
  )
}
