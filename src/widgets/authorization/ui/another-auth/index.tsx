import clsx from 'clsx'
import React from 'react'
import { AiFillFacebook, AiFillGoogleCircle } from 'react-icons/ai'
import { GoMarkGithub } from 'react-icons/go'
import { Button } from '@/shared/ui/button'
import style from './style.module.scss'

interface Props {
  className: string
  handleGithubLogin: () => void
}

export const AnotherAuth = ({ className, handleGithubLogin }: Props) => {
  return (
    <div className={clsx(style.anotherAuth, className)}>
      <p className={style.title}>With other services</p>
      <div className={style.serviceField}>
        <Button onClick={handleGithubLogin}>
          <GoMarkGithub size={26} title="Authorize via github" />
        </Button>
        <Button>
          <AiFillGoogleCircle
            size={30}
            fill="white"
            title="Authorize via google"
          />
        </Button>
        <Button>
          <AiFillFacebook
            size={30}
            fill="white"
            title="Authorize via facebook"
          />
        </Button>
      </div>
    </div>
  )
}
