import React from 'react'
import { useChangeTitle } from '@/hooks/useChangeTitle'
import { MainLayout } from '@/layouts'

export const Contacts = () => {
  useChangeTitle('Contacts')
  return (
    <MainLayout hideChatsSideBar>
      <div>Contacts</div>
    </MainLayout>
  )
}
