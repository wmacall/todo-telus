import { Pressable, View, Text, StyleSheet, Image } from 'react-native';
import { useDispatch } from 'react-redux';
import { deleteTodo } from '../../store/todo.slice';

export const TodoCard = ({ text, id }) => {
	const dispatch = useDispatch();

	const handleDeleteTodo = () => {
		dispatch(deleteTodo(id));
	};

	return (
		<View style={styles.container}>
			<Text>{text}</Text>
			<Pressable onPress={handleDeleteTodo}>
				<Image
					source={{ uri: 'https://cdn-icons-png.flaticon.com/512/6861/6861362.png' }}
					style={styles.deleteIcon}
				/>
			</Pressable>
		</View>
	);
};

const styles = StyleSheet.create({
	container: {
		flexDirection: 'row',
		justifyContent: 'space-between',
		alignItems: 'center',
		padding: 16,
	},
	deleteIcon: {
		height: 20,
		width: 20,
	},
});
