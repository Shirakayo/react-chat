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

interface AuthData {
  [key: string]: string
}

interface State {
  isAuthenticated: boolean
  user: User[]
  authData: AuthData
}

const initialState: State = {
  isAuthenticated: false,
  user: [],
  authData: {
    email: '',
    code: '',
    login: '',
    dateOfBirth: '',
    password: '',
    confirmPassword: '',
  },
}

const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    setEmail(state, { payload }) {
      state.authData.email = payload
    },
    setCode(state, { payload }) {
      state.authData.code = payload
    },
    setPersonInfo(state, { payload }) {
      state.authData.login = payload.login
      state.authData.dateOfBirth = payload.dateOfBirth
      state.authData.password = payload.password
      state.authData.confirmPassword = payload.confirmPassword
    },
  },
})

export const authSelector = (state: RootState) => state.authReducer
export const { setEmail, setCode, setPersonInfo } = authSlice.actions
export const authReducer = authSlice.reducer
