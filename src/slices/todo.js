import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  data: [],
  message: ''
}

export const TodoSlice = createSlice({
  name: 'todo',
  initialState,
  reducers: {
    add: (state, action) => {
      const { id, title } = action.payload;
      state.data.push({ id, title, complete: false })
    },
    remove: (state, action) => {
      const { id } = action.payload;
      state.data = state.data.filter(i => i.id !== id);
    },
    toggleComplete: (state, action) => {
      const { id } = action.payload;
      const index = state.data.findIndex(i => i.id === id);
      state.data[index].complete = !state.data[index].complete;
    }
  }
})

export const TodoActions = TodoSlice.actions;
export const TodoReducer = TodoSlice.reducer;
