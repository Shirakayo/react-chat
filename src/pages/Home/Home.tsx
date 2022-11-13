import React from 'react'
import { useChangeTitle } from '@/hooks/useChangeTitle'
import { MainLayout } from '@/layouts'

export const Home = () => {
  useChangeTitle()
  return (
    <MainLayout>
      <div>Home</div>
    </MainLayout>
  )
}
