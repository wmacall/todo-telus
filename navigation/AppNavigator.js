import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import HomeScreen from '../screens/HomeScreen';
import AddTaskScreen from '../screens/AddTaskScreen';

const Stack = createNativeStackNavigator();

export default function AppNavigator() {
	return (
		<NavigationContainer>
			<Stack.Navigator
				initialRouteName="Home"
				screenOptions={{
					headerShown: false,
				}}
			>
				<Stack.Screen name="Home" component={HomeScreen} />
				<Stack.Screen name="AddTask" component={AddTaskScreen} />
			</Stack.Navigator>
		</NavigationContainer>
	);
}
