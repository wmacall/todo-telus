import React from 'react';
import { StyleSheet, View, Text, Pressable, FlatList, SafeAreaView } from 'react-native';
import { useSelector } from 'react-redux';
import { TodoCard } from '../components/TodoCard';

export default function HomeScreen({ navigation }) {
	const todoList = useSelector((state) => state.todos);
	console.log(todoList);

	const handleAddTask = () => {
		navigation.navigate('AddTask');
	};

	return (
		<View style={styles.container}>
			<SafeAreaView />
			<Pressable style={styles.addTodoButton} onPress={handleAddTask}>
				<Text style={styles.buttonText}>Add New Todo</Text>
			</Pressable>
			<FlatList
				data={todoList}
				keyExtractor={(_, index) => index.toString()}
				renderItem={({ item, index }) => <TodoCard {...item} id={index + 1} />}
				ListEmptyComponent={() => <Text>Star adding todos</Text>}
			/>
		</View>
	);
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		padding: 16,
	},
	addTodoButton: {
		width: '100%',
		height: 56,
		justifyContent: 'center',
		alignItems: 'center',
		backgroundColor: '#757ce8',
		borderRadius: 36,
		marginBottom: 16,
	},
	buttonText: {
		color: '#fff',
	},
});
