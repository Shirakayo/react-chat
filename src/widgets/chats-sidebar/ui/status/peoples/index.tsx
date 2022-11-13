import React from 'react'
import { useHorizontalScroll } from '@/hooks/useHorizontalScroll'
import { Profile } from '@/shared/ui/profile'
import { onlineUsers } from '@/utils/mock/statusUsers'
import style from './style.module.scss'

const mockUsers = onlineUsers

export const Peoples = () => {
  const scrollRef = useHorizontalScroll()
  return (
    <div ref={scrollRef} className={style.wrapper}>
      {mockUsers.map((user) => (
        <div key={user.id} className={style.cardBlock}>
          <Profile
            url={user.profile_photo}
            className={style.cardBlockPhoto}
            status={user.status}
          />
          <span className={style.cardBlockName}>{user.login}</span>
        </div>
      ))}
    </div>
  )
}
