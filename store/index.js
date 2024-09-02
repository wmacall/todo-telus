import { combineReducers } from 'redux';
import todoSlice from './todo.slice';
import { configureStore } from '@reduxjs/toolkit';

const rootReducer = combineReducers({
	todos: todoSlice,
});

export const store = configureStore({
	reducer: rootReducer,
});
