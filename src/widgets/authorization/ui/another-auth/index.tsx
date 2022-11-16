import React from 'react'
import { FcGoogle } from 'react-icons/fc'
import { GoMarkGithub } from 'react-icons/go'
import { Button } from '@/shared/ui/button'
import style from './style.module.scss'

export const AnotherAuth = () => {
  return (
    <div className={style.anotherAuth}>
      <Button>
        <GoMarkGithub size={25} />
      </Button>
      <Button>
        <FcGoogle size={30} />
      </Button>
    </div>
  )
}
