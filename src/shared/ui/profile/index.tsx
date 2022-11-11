import clsx from 'clsx'
import React from 'react'
import style from './style.module.scss'

interface Props {
  status?: string
  url: string
  className?: string
}

export const Profile = ({ status, url, className }: Props) => {
  return (
    <div className={style.profile}>
      <img
        width={50}
        className={clsx(style.profileImage, className)}
        height={50}
        alt="profile_image"
        src={`${url}`}
      />
      {status && <span className={style.onlineCircle} />}
    </div>
  )
}
