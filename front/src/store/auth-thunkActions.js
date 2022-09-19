import { createAsyncThunk } from '@reduxjs/toolkit'
import axios from 'axios'

export const login = createAsyncThunk('auth/login', async userData => {
  try {
    const response = await axios.post(
      `${process.env.REACT_APP_API_URL}/api/v1/auth/signin`,
      {
        email: userData.email,
        pw: userData.password,
        withCredentials: true,
      },
    )
    return response.data
  } catch (error) {
    console.log(error)
  }
})

export const validToken = createAsyncThunk('auth/validToken', async () => {
  try {
    const response = await axios.get(
      `${process.env.REACT_APP_API_URL}/api/v1/auth/reissue`,
    )
    // console.log(response)
    return response.data
  } catch (error) {
    console.log(error)
  }
})

export const signup = createAsyncThunk('auth/signup', async userData => {
  try {
    const response = await axios.post(
      `${process.env.REACT_APP_API_URL}/api/v1/user`,
      userData,
    )
    return response.data
  } catch (error) {
    console.log(error)
  }
})

export const logout = createAsyncThunk('auth/signout', async () => {
  try {
    const response = await axios.post(
      `${process.env.REACT_APP_API_URL}/api/v1/auth/signout`,
    )
    return response.data
  } catch (error) {
    console.log(error)
  }
})
