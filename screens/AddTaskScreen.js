import React, { useState } from 'react';
import { View, StyleSheet, Alert, Pressable, Text, TextInput } from 'react-native';
import { useDispatch } from 'react-redux';
import { addTodo } from '../store/todo.slice';

export default function AddTaskScreen({ route, navigation }) {
	const [taskName, setTaskName] = useState('');
	const dispatch = useDispatch();

	const handleAddTask = () => {
		if (taskName.trim() !== '') {
			dispatch(
				addTodo({
					text: taskName,
				}),
			);

			navigation.goBack();
		} else {
			Alert.alert('Error', 'Todo cannot be empty');
		}
	};

	return (
		<View style={styles.container}>
			<TextInput style={styles.input} value={taskName} onChangeText={setTaskName} placeholder="Add a new task" />
			<Pressable onPress={handleAddTask}>
				<Text>Add Task</Text>
			</Pressable>
		</View>
	);
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		padding: 16,
		justifyContent: 'center',
		alignItems: 'center',
	},
	input: {
		marginVertical: 16,
		backgroundColor: '#ddd',
		padding: 16,
	},
});
