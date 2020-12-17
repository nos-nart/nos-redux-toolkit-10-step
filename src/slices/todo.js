import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  data: {},
  message: ''
}

export const TodoSlice = createSlice({
  name: 'todo',
  initialState,
  reducers: {
    add: (state, action) => {
      const { id, title } = action.payload;
      state.data[id] = {
        label: title,
        complete: false
      }
      state = {
        ...state,
        message: 'add success!'
      }
    }
  }
})

export const TodoActions = TodoSlice.actions;
export const TodoReducer = TodoSlice.reducer;
