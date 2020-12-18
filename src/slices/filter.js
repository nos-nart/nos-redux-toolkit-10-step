import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  key: 'all',
}

export const FilterSlice = createSlice({
  name: 'filter',
  initialState,
  reducers: {
    changeFilter: (state, action) => {
      state.key = action.payload.filter
    }
  }
})

export const FilterActions = FilterSlice.actions;
export const FilterReducer = FilterSlice.reducer;
