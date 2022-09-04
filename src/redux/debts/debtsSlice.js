import { createSlice } from '@reduxjs/toolkit';
import { getDebts } from './debtsOperations';

const initialState = {
  debts: [],
  error: null,
};

const debtsSlice = createSlice({
    name: 'debts',
    initialState,
    extraReducers: builder => {
      builder
        .addCase(getDebts.pending, state => {
          state.error = null;
        })
        .addCase(getDebts.fulfilled, (state, { payload }) => {
          state.debts = payload;
        })
        .addCase(getDebts.rejected, (state, { payload }) => {
          state.error = payload;
        });
    },
  });

  export default debtsSlice.reducer