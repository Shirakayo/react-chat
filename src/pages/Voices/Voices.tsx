import React from 'react'
import { useChangeTitle } from '@/hooks/useChangeTitle'
import { MainLayout } from '@/layouts'

export const Voices = () => {
  useChangeTitle('Voices')
  return (
    <MainLayout hideChatsSideBar>
      <div>Voices</div>
    </MainLayout>
  )
}
