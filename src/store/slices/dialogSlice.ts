import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { RootState } from '@/store'
import { DialogMock } from '@/utils/mock/dialog'

interface Messages {
  id: string
  message: string
}

interface Dialog {
  id: string
  username: string
  status: string
  userAvatar: string
  name: string
  mobile: string
  bioStatus: string
  files: string[]
  photos: string[]
  messages: Messages[]
}

interface State {
  dialog: Dialog[]
  viewBar: boolean
}

const initialState: State = {
  dialog: [],
  viewBar: true,
}

const dialogSlice = createSlice({
  name: 'dialog',
  initialState,
  reducers: {
    getDialogData(state, action: PayloadAction<string>) {
      const findDialog = DialogMock.find((el) => el.id === action.payload)
      if (findDialog) {
        state.dialog = [findDialog]
      }
    },
    setupViewBar(state) {
      state.viewBar = !state.viewBar
    },
  },
})

export const dialogSelector = (state: RootState) => state.dialogReducer
export const { getDialogData, setupViewBar } = dialogSlice.actions
export const dialogReducer = dialogSlice.reducer
