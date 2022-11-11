import clsx from 'clsx'
import React, { ReactNode } from 'react'
import { NavLink, useParams } from 'react-router-dom'
import style from './style.module.scss'

interface Props {
  children: ReactNode
  className?: string
  url: string
  disableActive?: boolean
}

export const Link = ({
  children,
  className,
  url,
  disableActive = false,
}: Props) => {
  const { pathname } = useParams()
  return (
    <NavLink
      to={url}
      className={clsx(
        style.link,
        className,
        pathname === url && !disableActive ? style.linkActive : null
      )}
    >
      {children}
    </NavLink>
  )
}
