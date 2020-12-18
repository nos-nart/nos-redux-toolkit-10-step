import { combineReducers } from 'redux';
import { configureStore } from '@reduxjs/toolkit';
import { TodoReducer, TodoSlice } from '../slices/todo';
import { FilterReducer, FilterSlice } from '../slices/filter';

const indexReducer = combineReducers({
  [TodoSlice.name]: TodoReducer,
  [FilterSlice.name]: FilterReducer,
});

const store = configureStore({
  reducer: indexReducer,
});

const dispatch = store.dispatch;
export { store, dispatch };
