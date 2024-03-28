import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Auth from './mid-term/auth';
import IndexTab from './mid-term/indexTab';
import Buy from './mid-term/tab/buy';
import Thanks from './mid-term/tab/thanks';

const Stack = createStackNavigator();

export default function App() {
	return (
		<NavigationContainer>
			<Stack.Navigator>
				{/* -- Main Page -- */}
				<Stack.Screen
					name='Auth'
					component={Auth}
					options={{
						headerShown: false,
					}}
				/>
				<Stack.Screen
					name='IndexTab'
					component={IndexTab}
					options={{
						headerShown: false,
					}}
				/>
				<Stack.Screen
					name='Buy'
					component={Buy}
					options={{
						title: 'Buying'
					}}
				/>
				<Stack.Screen
					name='Thanks'
					component={Thanks}
					options={{
						headerShown: false,
					}}
				/>
			</Stack.Navigator>
		</NavigationContainer>
	);
}
