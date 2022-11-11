import React from 'react'
import { IconType } from 'react-icons'
import {
  AiOutlineMessage,
  AiOutlineSetting,
  AiOutlineVideoCamera,
} from 'react-icons/ai'
import { BsPeople, BsTelephone } from 'react-icons/bs'
import { CiBookmarkMinus } from 'react-icons/ci'
import { useLocation } from 'react-router-dom'
import { Link } from '@/shared/ui/link'
import style from './style.module.scss'

interface ListItems {
  path: string
  icon: IconType
}

const navigationList: ListItems[] = [
  { path: '/messages', icon: AiOutlineMessage },
  { path: '/contacts', icon: BsPeople },
  { path: '/voices', icon: BsTelephone },
  { path: '/conferences', icon: AiOutlineVideoCamera },
  { path: '/bookmarks', icon: CiBookmarkMinus },
  { path: '/settings', icon: AiOutlineSetting },
]

export const Navigation = () => {
  const { pathname } = useLocation()

  return (
    <nav className={style.nav}>
      <ul className={style.navigationList}>
        {navigationList.map((el) => (
          <li key={el.path} className={style.navigationListItem}>
            <Link className={style.navigationListLink} url={el.path}>
              <el.icon
                size={25}
                fill={pathname === el.path ? 'white' : 'gray'}
              />
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  )
}
