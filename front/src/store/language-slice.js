import { createSlice } from '@reduxjs/toolkit'
import { getLanguages } from './language-thunkActions'

const languageSlice = createSlice({
  name: 'language',
  initialState: {
    languageId: undefined,
    lan: undefined,
    isError: false,
    message: undefined,
  },
  extraReducers: {
    [getLanguages.pending]: () => {
      return
    },
    [getLanguages.fulfilled]: (state, { payload }) => {
      state.languageId = payload.id
      state.lan = payload.lan
    },
    [getLanguages.rejected]: (state, { payload }) => {
      state.isError = true
      state.message = payload.message
    },
  },
})

export const countryActions = languageSlice.actions
export default languageSlice
