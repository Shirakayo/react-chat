import { combineReducers, configureStore } from '@reduxjs/toolkit'
import { useDispatch } from 'react-redux'
import { authReducer } from '@/store/slices/authSlice'
import { dialogReducer } from '@/store/slices/dialogSlice'

const rootReducer = combineReducers({
  authReducer,
  dialogReducer,
})

export const store = configureStore({
  reducer: rootReducer,
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
export const useAppDispatch: () => AppDispatch = useDispatch
