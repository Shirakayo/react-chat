import React from 'react'
import { useChangeTitle } from '@/hooks/useChangeTitle'
import { MainLayout } from '@/layouts'

export const BookMarks = () => {
  useChangeTitle('Bookmarks')
  return (
    <MainLayout hideChatsSideBar>
      <div>Marks</div>
    </MainLayout>
  )
}
