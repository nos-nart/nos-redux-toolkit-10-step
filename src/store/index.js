import { combineReducers } from 'redux';
import { configureStore } from '@reduxjs/toolkit';
import { TodoReducer, TodoSlice } from '../slices/todo';

const indexReducer = combineReducers({
  [TodoSlice.name]: TodoReducer,
});

const store = configureStore({
  reducer: indexReducer,
});

const dispatch = store.dispatch;
export { store, dispatch };
