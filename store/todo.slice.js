import { createSlice } from '@reduxjs/toolkit';

const todoSlice = createSlice({
	name: 'todos',
	initialState: [],
	reducers: {
		addTodo(state, action) {
			state.push({
				text: action.payload.text,
				id: state.length + 1,
			});
		},
		deleteTodo(state, action) {
			return (state = state.filter(({ id }) => id !== action.payload));
		},
	},
});

export const { addTodo, deleteTodo } = todoSlice.actions;
export default todoSlice.reducer;
