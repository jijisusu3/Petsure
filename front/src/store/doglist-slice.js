import { createSlice } from '@reduxjs/toolkit';
import { getDoglists } from './doglist-thunkActions';

const doglistSlice = createSlice({
  name: 'doglist',
  initialState: {
    doglistId: undefined,
    doglist: undefined,
    isError: false,
    message: undefined,
  },
  extraReducers: {
    [getDoglists.pending]: () => {
      return;
    },
    [getDoglists.fulfilled]: (state, { payload }) => {
      state.doglistId = payload.id;
      state.doglist = payload.doglist;
    },
    [getDoglists.rejected]: (state, { payload }) => {
      state.isError = true;
      state.message = payload.message;
    },
  },
});

export const dogActions = doglistSlice.actions;
export default doglistSlice;
