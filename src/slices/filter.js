import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  filter: 'all',
}

export const FilterSlice = createSlice({
  name: 'filter',
  initialState,
  reducers: {
    changeFilter: (state, action) => ({
      ...state,
      filter: action.payload
    })
  }
})

export const FilterAction = FilterSlice.actions;
export const FilterReducer = FilterSlice.reducer;
