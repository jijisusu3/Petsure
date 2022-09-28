import { createSlice } from '@reduxjs/toolkit';
import { getCatlists } from './catlist-thunkActions';

const catlistSlice = createSlice({
  name: 'cat',
  initialState: {
    id: undefined,
    disease: [],
    species: undefined,
    name: undefined,
    wild: undefined,
    isError: false,
    message: undefined,
  },
  extraReducers: {
    [getCatlists.pending]: () => {
      return;
    },
    [getCatlists.fulfilled]: (state, { payload }) => {
      state.id = payload.id;
      state.disease = payload.disease;
      state.species = payload.species;
      state.name = payload.name;
      state.wild = payload.wild;
    },
    [getCatlists.rejected]: (state, { payload }) => {
      state.isError = true;
      state.message = payload.message;
    },
  },
});

export const catActions = catlistSlice.actions;
export default catlistSlice;
