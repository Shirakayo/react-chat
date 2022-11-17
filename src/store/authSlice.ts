import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import { RootState } from '@/store/store'
import { supabase } from '@/supabase'

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

enum Status {
  success = 'success',
  loading = 'loading',
  error = 'error',
  relax = 'relax',
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

interface RegisterData {
  username: string
  password: string
  email: string
  firstname: string
  lastname: string
}

interface State {
  isAuthenticated: boolean
  user: User[]
  status: Status
  authData: AuthData
}

const initialState: State = {
  isAuthenticated: false,
  status: Status.relax,
  user: [],
  authData: {
    email: '',
    username: '',
    firstname: '',
    lastname: '',
    password: '',
  },
}

export const requestRegistrationUser = createAsyncThunk<unknown, RegisterData>(
  'auth/requestRegistration',
  async ({ email, password, firstname, lastname, username }) => {
    const { data, error } = await supabase.auth.signUp({
      email,
      password,
      options: {
        data: {
          firstname,
          lastname,
          username,
        },
      },
    })
    if (error) {
      return error
    }
    return data
  }
)

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
      state.authData.firstname = payload.firstname
      state.authData.lastname = payload.lastname
      state.authData.password = payload.password
    },
  },
  extraReducers: (builder) => {
    builder.addCase(requestRegistrationUser.fulfilled, (state, action) => {
      state.status = Status.success
      console.log(action)
    })
  },
})

export const authSelector = (state: RootState) => state.authReducer
export const { setEmail, setCode, setPersonInfo } = authSlice.actions
export const authReducer = authSlice.reducer
