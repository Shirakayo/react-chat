import debounce from 'lodash.debounce'
import React, { ChangeEvent, useState } from 'react'
import { IoMdClose } from 'react-icons/io'
import { Icon } from '@/shared/ui/icon'
import { Input } from '@/shared/ui/input'
import style from './style.module.scss'

export const Search = () => {
  const [, setSearchValue] = useState('')
  const [viewSearchValue, setViewSearchValue] = useState('')

  const changeSearchValue = (event: ChangeEvent<HTMLInputElement>) => {
    setViewSearchValue(event.target.value)
    debounce(() => {
      setSearchValue(event.target.value)
    }, 1000)
  }

  const removeSearchValue = () => {
    setSearchValue('')
    setViewSearchValue('')
  }

  return (
    <div className={style.wrapper}>
      <div className={style.inputLabel}>
        <Input
          className={style.input}
          placeholder="Search.."
          onChange={(event) => changeSearchValue(event)}
          value={viewSearchValue}
        />
        {viewSearchValue && (
          <button onClick={() => removeSearchValue()}>
            <Icon>
              <IoMdClose />
            </Icon>
          </button>
        )}
      </div>
    </div>
  )
}
