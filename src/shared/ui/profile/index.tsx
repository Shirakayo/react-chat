import clsx from 'clsx'
import React from 'react'
import style from './style.module.scss'

interface Props {
  status?: string
  url: string
  className?: string
  width?: number
  height?: number
}

export const Profile = ({
  status,
  url,
  className,
  width = 50,
  height = 50,
}: Props) => {
  return (
    <div className={style.profile}>
      <img
        width={width}
        className={clsx(style.profileImage, className)}
        height={height}
        alt="profile_image"
        src={`${url}`}
      />
      {status && <span className={style.onlineCircle} />}
    </div>
  )
}
