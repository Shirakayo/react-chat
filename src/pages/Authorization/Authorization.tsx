import { yupResolver } from '@hookform/resolvers/yup'
import clsx from 'clsx'
import React, { useState } from 'react'
import { useForm } from 'react-hook-form'
import * as yup from 'yup'
import { useChangeTitle } from '@/hooks/useChangeTitle'
import { Header } from '@/shared/ui/auth-header'
import { Link } from '@/shared/ui/link'
import { REGISTRATION_ROUTE } from '@/utils/paths'
import { AnotherAuth } from '@/widgets/authorization/ui/another-auth'
import style from './style.module.scss'
import { fetchLoginUser } from '@/store/authSlice'
import { useAppDispatch } from '@/store'

const schema = yup.object({
  email: yup
    .string()
    .matches(
      /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
      'Enter a correct e-mail address'
    )
    .required("Don't you have any mail?"),
  password: yup
    .string()
    .required('Please Enter your password')
    .matches(
      /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#\$%\^&\*])(?=.{8,})/,
      'Must Contain 8 Characters, One Uppercase, One Lowercase, One Number and One Special Case Character'
    ),
})

interface FormValue {
  email: string
  password: string
}

export const Authorization = () => {
  useChangeTitle('Authorization')
  const dispatch = useAppDispatch()
  const [viewMagicLink, setViewMagicLink] = useState(false)
  const {
    handleSubmit,
    register,
    formState: { errors, isValid },
  } = useForm<FormValue>({
    mode: 'onSubmit',
    resolver: yupResolver(schema),
  })

  const onSubmit = (data: FormValue) => {
    dispatch(
      fetchLoginUser({
        email: data.email,
        password: data.password,
      })
    )
  }

  return (
    <div className={style.mainWrapper}>
      <div className={style.formWrapper}>
        <Header className={style.header} />
        {!viewMagicLink && (
          <form className={style.form} onSubmit={handleSubmit(onSubmit)}>
            <input
              {...register('email')}
              className={clsx(
                style.authInput,
                errors.email?.message && style.error
              )}
              title={errors.email?.message}
              placeholder="Email"
              type="text"
            />
            <input
              {...register('password')}
              className={clsx(
                style.authInput,
                errors.password?.message && style.error
              )}
              title={errors.password?.message}
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
        <AnotherAuth className={style.anotherAuthBlock} />
        <div className={style.registerField}>
          <span className={style.linkTitle}>Are you new here?</span>
          <Link className={style.link} url={REGISTRATION_ROUTE}>
            Sign up.
          </Link>
        </div>
      </div>
    </div>
  )
}
