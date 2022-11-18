import React from 'react'
import { AiOutlinePaperClip } from 'react-icons/ai'
import style from './style.module.scss'
import { Navigation } from './navigation'

export const MessageInput = () => {
  return (
    <div className={style.wrapper}>
      <div className={style.fileBlock}>
        <label className={style.fileInputLabel} htmlFor="file_label">
          <AiOutlinePaperClip size={25} />
        </label>
        <input className={style.fileInput} id="file_label" type="file" />
      </div>
      <input
        placeholder="Write a message..."
        className={style.messageField}
        type="text"
      />
      <Navigation />
    </div>
  )
}
