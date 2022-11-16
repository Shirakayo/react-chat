import { yupResolver } from '@hookform/resolvers/yup'
import React, { useState } from 'react'
import { useForm } from 'react-hook-form'
import * as yup from 'yup'
import { useChangeTitle } from '@/hooks/useChangeTitle'
import { Header } from '@/shared/ui/auth-header'
import style from './style.module.scss'
import clsx from 'clsx'
import { AnotherAuth } from '@/widgets/authorization/ui/another-auth'

const schema = yup.object({
  username: yup
    .string()
    .min(1, 'Minimum 1 characters')
    .max(15, 'Maximum 15 characters'),
  password: yup
    .string()
    .required('Please Enter your password')
    .matches(
      /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#\$%\^&\*])(?=.{8,})/,
      'Must Contain 8 Characters, One Uppercase, One Lowercase, One Number and One Special Case Character'
    ),
})

interface FormValue {
  username: string
  password: string
}

export const Authorization = () => {
  useChangeTitle('Authorization')
  const [viewMagicLink, setViewMagicLink] = useState(false)
  const {
    handleSubmit,
    register,
    formState: { errors, isValid },
  } = useForm<FormValue>({
    mode: 'onBlur',
    resolver: yupResolver(schema),
  })

  const onSubmit = (data: FormValue) => {
    console.log(data)
  }

  return (
    <div className={style.mainWrapper}>
      <div className={style.formWrapper}>
        <Header className={style.header} />
        {!viewMagicLink && (
          <form className={style.form} onSubmit={handleSubmit(onSubmit)}>
            <input
              {...register('username')}
              className={style.authInput}
              placeholder="Username"
              type="text"
            />
            <input
              {...register('password')}
              className={style.authInput}
              placeholder="Password"
              type="password"
            />
            <button
              disabled={!isValid}
              className={clsx(
                style.button,
                isValid ? style.buttonValid : style.buttonInvalid
              )}
            >
              Sign In
            </button>
          </form>
        )}
        <p className={style.passwordReset}>Forgot your password?</p>
        <AnotherAuth />
      </div>
    </div>
  )
}
