import React from 'react'
import { RiArrowRightSLine } from 'react-icons/ri'
import style from './style.module.scss'

export const Header = () => {
  return (
    <div className={style.header}>
      <h2 className={style.headerTitle}>Online now</h2>
      <div className={style.headerLink}>
        <span>More</span>
        <RiArrowRightSLine size={20} fill="gray" />
      </div>
    </div>
  )
}
