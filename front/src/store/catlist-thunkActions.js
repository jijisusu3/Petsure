import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

export const getCatlists = createAsyncThunk('catlists/catlists', async () => {
  try {
    const response = await axios.get(`${process.env.REACT_APP_API_URL}/api/v1/catlists`);
    return response.data;
  } catch (error) {
    console.log(error);
  }
});
