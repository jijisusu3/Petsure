import { createAsyncThunk } from '@reduxjs/toolkit'
import axios from 'axios'

export const getLanguages = createAsyncThunk('language/language', async () => {
  try {
    const response = await axios.get(
      `${process.env.REACT_APP_API_URL}/api/v1/language`,
    )
    return response.data
  } catch (error) {
    console.log(error)
  }
})
