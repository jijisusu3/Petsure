import { createSlice } from '@reduxjs/toolkit'
import { login, logout, validToken } from './auth-thunkActions'

const authSlice = createSlice({
  name: 'auth',
  initialState: {
    isAuthenticated: false,
    token: undefined,
    isError: false,
    message: undefined,
  },
  extraReducers: {
    [login.fulfilled]: (state, { payload }) => {
      state.isAuthenticated = false
      state.token = undefined
      state.isError = false
      state.message = undefined
    },
    [login.fulfilled]: (state, { payload }) => {
      state.isAuthenticated = true
      state.token = payload.data.accessToken
    },
    [login.rejected]: (state, { payload }) => {
      state.isError = true
      state.message = payload.message
    },
    [logout.fulfilled]: state => {
      state.isAuthenticated = false
      state.token = undefined
      state.isError = false
      state.message = undefined
    },
    [validToken.fulfilled]: (state, { payload }) => {
      state.token = payload.data.accessToken
    },
    [validToken.rejected]: (state, { payload }) => {
      state.isError = true
      state.message = payload.message
    },
  },
})

export const authActions = authSlice.actions
export default authSlice
