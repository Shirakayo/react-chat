import { createSlice } from '@reduxjs/toolkit'
import { RootState } from '@/store/store'

interface Users {
  id: number
  username: string
  email: string
  phone: string
  firstname: string
  lastname: string
  is_active: boolean
  last_visit: Date
  date_joined: Date
  is_online: boolean
}

interface User {
  id: number
  username: string
  email: string
  phone: string
  firstname: string
  lastname: string
  is_active: boolean
  is_superuser: boolean
  is_staff: boolean
  last_visit: Date
  date_joined: Date
  is_online: boolean
  friends: Users[]
}

interface State {
  isAuthenticated: boolean
  user: User[]
}

const initialState: State = {
  isAuthenticated: true,
  user: [],
}

const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {},
})

export const authSelector = (state: RootState) => state.authReducer

export const authReducer = authSlice.reducer
