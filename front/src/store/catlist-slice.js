import { createSlice } from '@reduxjs/toolkit';
import { getCatlists } from './catlist-thunkActions';

const catlistSlice = createSlice({
  name: 'catlist',
  initialState: {
    catlistId: undefined,
    catlist: undefined,
    isError: false,
    message: undefined,
  },
  extraReducers: {
    [getCatlists.pending]: () => {
      return;
    },
    [getCatlists.fulfilled]: (state, { payload }) => {
      state.catlistId = payload.id;
      state.catlist = payload.catlist;
    },
    [getCatlists.rejected]: (state, { payload }) => {
      state.isError = true;
      state.message = payload.message;
    },
  },
});

export const catActions = catlistSlice.actions;
export default catlistSlice;
